// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Button } from "@twilio-paste/core";

export const ButtonComponent: CustomBuilderIOComponent = {
	component: Button,
	componentOptions: {
		name: "Paste Button",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/rectangle.png",
		docsLink: "https://paste.twilio.design/components/button",
		inputs: [
			{
				friendlyName: "Button Text",
				name: "children",
				type: "text",
				defaultValue: "Button",
				required: true,
			},
			{
				friendlyName: "Size",
				name: "size",
				type: "text",
				enum: ["default", "small", "icon", "icon_small", "reset"],
				defaultValue: "default",
				required: true,
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: [
					"primary",
					"secondary",
					"inverse",
					"destructive",
					"destructive_secondary",
					"destructive_link",
					"link",
					"inverse_link",
					"primary_icon",
					"secondary_icon",
					"destructive_icon",
				],
				defaultValue: "primary",
				required: true,
			},
		],
	},
};
