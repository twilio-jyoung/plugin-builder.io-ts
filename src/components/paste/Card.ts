import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Card } from "@twilio-paste/core";

export const CardComponent: CustomBuilderIOComponent = {
	component: Card,
	componentOptions: {
		name: "Paste Card",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/layout-cards.png",
		docsLink: "https://paste.twilio.design/components/card",
		canHaveChildren: true,
		inputs: [
			{
				friendlyName: "Content",
				name: "children",
				type: "uiBlocks",
				helperText: "Drag and drop additional components onto the Card",
			},
		],
		defaultStyles: {
			margin: "state.theme.tokens.spacings.space60",
		},
		defaults: {
			bindings: {
				"style.background":
					"state.theme.tokens.backgroundColors.colorBackground",
				"style.borderColor": "state.theme.tokens.borderColors.colorBorder",
				"style.color": "state.theme.tokens.textColors.colorText",
			},
		},
	},
};
