// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Paragraph } from "@twilio-paste/core";

export const ParagraphComponent: CustomBuilderIOComponent = {
	component: Paragraph,
	componentOptions: {
		name: "Paste Paragraph",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/typography.png",
		docsLink: "https://paste.twilio.design/primitives/text",
		inputs: [
			{
				friendlyName: "Text",
				name: "children",
				type: "text",
				defaultValue: "enter text here...",
			},
			{
				friendlyName: "Remove Bottom Margin?",
				name: "marginBottom",
				type: "text",
				defaultValue: "",
				enum: [
					{ label: "Yes", value: "space0" },
					{ label: "No", value: "" },
				],
			},
		],
	},
};
