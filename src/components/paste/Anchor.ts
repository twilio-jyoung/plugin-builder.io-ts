// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { TextAnchor } from "./Anchor.Component";

// the anchor component does not expose a property for the anchor text
// therefore created a custom component which wraps anchor and exposes a text property
export const AnchorComponent: CustomBuilderIOComponent = {
	component: TextAnchor,
	componentOptions: {
		name: "Paste Anchor",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/link.png",
		docsLink: "https://paste.twilio.design/components/anchor",
		canHaveChildren: true,
		inputs: [
			{
				friendlyName: "Link Text",
				name: "text",
				type: "text",
				defaultValue: "Link Text",
				required: true,
			},
			{
				friendlyName: "HREF",
				name: "href",
				type: "url",
				required: true,
			},
			{
				friendlyName: "Show External Link Icon",
				name: "showExternal",
				type: "boolean",
				defaultValue: false,
			},
			{
				friendlyName: "Target",
				name: "target",
				type: "text",
				enum: ["_self", "_blank", "_parent", "_top"],
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["default", "inverse"],
				defaultValue: "default",
			},
		],
	},
};
