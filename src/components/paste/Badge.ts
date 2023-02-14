// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Badge } from "@twilio-paste/core";

export const BadgeComponent: CustomBuilderIOComponent = {
	component: Badge,
	componentOptions: {
		name: "Paste Badge",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/badge.png",
		docsLink: "https://paste.twilio.design/components/badge",
		inputs: [
			{
				friendlyName: "Badge Text",
				name: "children",
				type: "text",
				defaultValue: "this is default badge text",
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["neutral", "warning", "error", "success", "new"],
				defaultValue: "neutral",
				required: true,
			},
			{
				friendlyName: "URL",
				name: "href",
				type: "text",
			},
			{
				friendlyName: "Render As",
				name: "as",
				type: "text",
				enum: ["span", "button", "a"],
			},
		],
	},
};
