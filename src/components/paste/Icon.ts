// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import iconsJson from "@twilio-paste/icons/json/icons.json";
import { IconLoader } from "../../utils/IconLoader";
import { textColors } from "@twilio-paste/design-tokens";
import sortOptionNames, { iconSizes } from "../../utils/designTokenHelper";

let iconColors = sortOptionNames(textColors);

export const IconComponent: CustomBuilderIOComponent = {
	component: IconLoader,
	componentOptions: {
		name: "Paste Icon",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/circle-letter-i.png",
		docsLink: "https://paste.twilio.design/components/icons",
		inputs: [
			{
				friendlyName: "Icon Name",
				name: "icon",
				type: "text",
				defaultValue: "AcceptIcon",
				enum: iconsJson.icons.map((x) => x.name).sort(),
				required: true,
			},
			{
				friendlyName: "Title",
				name: "title",
				type: "text",
				defaultValue: "an icon title",
			},
			{
				friendlyName: "Is Decorative?",
				name: "decorative",
				type: "boolean",
				defaultValue: true,
				required: true,
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
				type: "text",
				enum: iconColors,
				defaultValue: "colorText",
			},
			{
				friendlyName: "Size",
				name: "size",
				type: "text",
				enum: iconSizes,
				defaultValue: "sizeIcon40",
			},
		],
	},
};
