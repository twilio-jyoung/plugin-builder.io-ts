// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { PasteText } from "./Text.Component";
import {
	fontSizes,
	fontWeights,
	lineHeights,
	spacings,
} from "@twilio-paste/design-tokens";
import sortOptionNames from "../../utils/designTokenHelper";

let fontSizesSorted = sortOptionNames(fontSizes);
let fontWeightsSorted = sortOptionNames(fontWeights);
let lineHeightsSorted = sortOptionNames(lineHeights);
let spacingsSorted = sortOptionNames(spacings);

export const TextComponent: CustomBuilderIOComponent = {
	component: PasteText,
	componentOptions: {
		// the text component does not expose a property for the actual text?
		// therefore created a custom component which wraps text and exposes a text property
		name: "Paste Text",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/typography.png",
		docsLink: "https://paste.twilio.design/primitives/text",
		inputs: [
			{
				friendlyName: "Text",
				name: "text",
				type: "text",
				defaultValue: "please enter some text...",
				required: true,
				richText: false,
			},
			{
				friendlyName: "As",
				name: "as",
				type: "text",
				enum: ["span", "div", "label"],
				defaultValue: "span",
				required: true,
			},
			{
				friendlyName: "Display",
				name: "display",
				type: "text",
				enum: ["block", "inline-block"],
				defaultValue: "block",
				required: true,
			},
			{
				friendlyName: "Color",
				name: "color",
				type: "color",
			},
			{
				friendlyName: "Font Family",
				name: "fontFamily",
				type: "text",
			},
			{
				friendlyName: "Font Size",
				name: "fontSize",
				type: "text",
				enum: fontSizesSorted,
			},
			{
				friendlyName: "Font Weight",
				name: "fontWeight",
				type: "text",
				enum: fontWeightsSorted,
			},
			{
				friendlyName: "Line Height",
				name: "lineHeight",
				type: "text",
				enum: lineHeightsSorted,
			},
			{
				friendlyName: "Margin",
				name: "margin",
				type: "text",
				enum: spacingsSorted,
				defaultValue: "space0",
			},
			{
				friendlyName: "Padding",
				name: "padding",
				type: "text",
				enum: spacingsSorted,
				defaultValue: "space0",
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
