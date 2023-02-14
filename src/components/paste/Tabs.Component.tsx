import React from "react";
import { useState } from "react";
import { Tab, TabList, Tabs } from "@twilio-paste/core";
import { BuilderBlocks, BuilderElement } from "@builder.io/react";

export type TabProps = {
	vertical: boolean;
	tabs: [
		{
			label: string;
			content: any;
		}
	];
};

export const PasteTabs = (
	props: TabProps & { builderBlock?: BuilderElement }
): JSX.Element => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Tabs orientation={props.vertical ? "vertical" : "horizontal"}>
			<TabList aria-label="My tabs">
				{props.tabs?.map((item, index) => {
					return (
						<Tab
							key={index}
							id={index.toString()}
							onClick={() => setActiveTab(index)}
						>
							{item.label}
						</Tab>
					);
				})}
			</TabList>

			{props.tabs?.length && (
				// <TabPanels paddingTop="space20">
				<BuilderBlocks
					parentElementId={props.builderBlock?.id}
					dataPath={`component.options.tabs.${activeTab}.content`}
					blocks={props.tabs[activeTab].content}
				/>
				// </TabPanels>
			)}
		</Tabs>
	);
};
