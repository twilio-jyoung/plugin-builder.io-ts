// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { PasteHeading } from "./Heading.Component";

export const HeadingComponent: CustomBuilderIOComponent = {
	component: PasteHeading,
	componentOptions: {
		name: "Paste Heading",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/heading.png",
		docsLink: "",
		inputs: [
			{
				friendlyName: "Heading Text",
				name: "text",
				type: "text",
				defaultValue: "enter heading here...",
			},
			{
				friendlyName: "As",
				name: "as",
				type: "text",
				enum: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "label", "span"],
				defaultValue: "h2",
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: [
					"heading10",
					"heading20",
					"heading30",
					"heading40",
					"heading50",
					"heading60",
				],
				defaultValue: "heading20",
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
		defaults: {
			bindings: {
				"component.options.color": "state.theme.tokens.textColors.colorText",
				"component.options.fontFamily":
					"state.theme.tokens.fonts.fontFamilyText",
				"component.options.fontSize": "state.theme.tokens.fontSizes.fontSize30",
				"component.options.fontWeight":
					"state.theme.tokens.fontSizes.fontWeightNormal",
				"component.options.lineHeight":
					"state.theme.tokens.lineHeights.lineHeight40",
			},
		},
	},
};
