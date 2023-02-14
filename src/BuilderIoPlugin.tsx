import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import Section from "./components/builderio/Section";
import builder from "@builder.io/react";
import registerPasteComponents from "./utils/registerPasteComponents";

import {
	CustomizationProvider,
	PasteCustomCSS,
	CustomizationProviderProps,
} from "@twilio-paste/core/customization";

const PLUGIN_NAME = "BuilderIoPlugin";

export default class BuilderIoPlugin extends FlexPlugin {
	constructor() {
		super(PLUGIN_NAME);
	}

	/**
	 * This code is run when your plugin is being started
	 * Use this to modify any UI components or attach to the actions framework
	 *
	 * @param flex { typeof Flex }
	 */
	async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
		console.log("loading plugin");

		// sets paste as a theme provider so all components inherit styles and update on token / theme changes.
		flex.setProviders({
			CustomProvider: (RootComponent) => (props) => {
				const pasteProviderProps: CustomizationProviderProps & {
					style: PasteCustomCSS;
				} = {
					baseTheme: props.theme?.isLight ? "default" : "dark",
					theme: props.theme?.tokens,
					style: { minWidth: "100%", height: "100%" },
				};
				return (
					<CustomizationProvider {...pasteProviderProps}>
						<RootComponent {...props} />
					</CustomizationProvider>
				);
			},
		});

		// set to the API key of your builder io environment
		builder.init(process.env.FLEX_BUILDERIO_API_KEY!);

		// pass worker data.  can optionally be used in targetting
		// builder.setUserAttributes({
		// 	worker: manager.workerClient,
		// });

		// loads useful paste components to be used in Panel2
		registerPasteComponents();

		flex.AgentDesktopView.Panel2.Content.replace(<Section key="myComp" />);
	}
}
