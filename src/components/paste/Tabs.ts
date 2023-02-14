import { PasteTabs } from "./Tabs.Component";
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";

export const TabsComponent: CustomBuilderIOComponent = {
	component: PasteTabs,
	componentOptions: {
		name: "Paste Tabs",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/folder.png",
		docsLink: "https://paste.twilio.design/components/tabs",
		inputs: [
			{
				name: "tabs",
				type: "list",
				subFields: [
					{
						name: "label",
						type: "text",
						defaultValue: "New tab",
					},
					{
						name: "content",
						type: "uiBlocks",
						defaultValue: [],
					},
				],
				defaultValue: [
					{
						label: "Tab 1",
						content: [],
					},
				],
			},
			{
				friendlyName: "Is Vertical Tabs?",
				name: "vertical",
				type: "boolean",
				defaultValue: false,
				helperText:
					"Changing this setting will require you to refresh the preview window.",
			},
		],
	},
};
