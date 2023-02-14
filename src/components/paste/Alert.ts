// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Alert } from "@twilio-paste/core";

export const AlertComponent: CustomBuilderIOComponent = {
	component: Alert,
	componentOptions: {
		name: "Paste Alert",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/exclamation-mark.png",
		docsLink: "https://paste.twilio.design/components/alert",
		inputs: [
			{
				friendlyName: "Alert Message",
				name: "children",
				type: "text",
				defaultValue: "this is default alert text",
				required: true,
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["neutral", "warning", "error"],
				defaultValue: "neutral",
				required: true,
			},
		],
	},
};
