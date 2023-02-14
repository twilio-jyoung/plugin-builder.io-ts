import React, { useState, useEffect } from "react";
import {
	Manager,
	Actions,
	Theme,
	ITask,
	withTheme,
	withTaskContext,
} from "@twilio/flex-ui";
import { BuilderComponent, builder } from "@builder.io/react";
import {
	cleanTaskObject,
	cleanWorkerObject,
	CleanWorker,
} from "../../utils/flexObjectCleaner";

const SECTION_MODEL_NAME = "panel-2";

export interface ContextProps {
	tasks?: Map<string, ITask>;
	task?: ITask;
	theme?: Theme;
	selectedTaskSid?: string;
}

const Section = (props: ContextProps) => {
	const [builderContentJson, setBuilderContentJson] = useState<any>();
	const [task, setTask] = useState<Partial<ITask>>();
	const [tasks, setTasks] = useState<string[] | undefined>();
	const [worker, setWorker] = useState<Partial<CleanWorker> | undefined>();

	const manager = Manager.getInstance();
	let workerClient = manager.workerClient;

	useEffect(() => {
		try {
			builder
				.get(SECTION_MODEL_NAME, {
					url: location.pathname,
					cachebust: true,
					cacheSeconds: 60,
					userAttributes: {
						// set attributes used for targetting here
						worker: workerClient?.name,
					},
				})
				.promise()
				.then(setBuilderContentJson);
		} catch (error) {
			console.log(error);
		}
	}, []);

	//#region effect hooks and listeners
	useEffect(() => {
		workerClient?.on("activityUpdated", (worker) => {
			setWorker(cleanWorkerObject(worker));
		});

		setWorker(cleanWorkerObject(workerClient));
	}, []);

	useEffect(() => {
		if (props.task) {
			let clean = cleanTaskObject(props.task);
			setTask(clean);
		}
	}, [props.task]);

	useEffect(() => {
		if (props.tasks) {
			setTasks(Array.from(props.tasks.keys()));
		}
	}, [props.tasks]);
	//#endregion

	if (!builderContentJson) {
		return <React.Fragment />;
	} else {
		let dataPayload = {
			// pass theme data (using withTheme helper) minus cyclical references:
			// https://www.twilio.com/docs/flex/developer/ui/add-component-context#add-theme-data-to-a-custom-component
			theme: props.theme,

			// a string[] of all assigned tasks.
			// useful for understanding if the user has active tasks or not.
			tasks: tasks,

			// pass a cleaned up copy of task data (using withTaskContext helper) minus cyclical references:
			// https://www.twilio.com/docs/flex/developer/ui/add-component-context#add-task-data-to-a-custom-component
			task: task,

			// this gets set by the withTaskContext helper,
			// and tells you which task the user has selected.
			selectedTaskSid: props.selectedTaskSid,

			// pass worker info so that pages can render
			// different content based on worker attributes.
			worker: worker,
		};

		return (
			<BuilderComponent
				model={SECTION_MODEL_NAME}
				content={builderContentJson}
				// use context to pass callbacks
				context={{
					invokeAction: async (action: string, payload: object) => {
						console.log(
							`${action} Action invoked from builder.io with payload:`,
							payload
						);
						await Actions.invokeAction(action, payload);
					},
				}}
				// pass any data that builder.io may need.
				// will be placed in builder.io's state object
				data={dataPayload}
			/>
		);
	}
};

export default withTheme(withTaskContext(Section));
