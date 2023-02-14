import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Avatar } from "@twilio-paste/core";
import { iconSizes } from "../../utils/designTokenHelper";

export const AvatarComponent: CustomBuilderIOComponent = {
	component: Avatar,
	componentOptions: {
		name: "Paste Avatar",
		image:
			"https://tabler-icons.io/static/tabler-icons/icons-png/user-circle.png",
		docsLink: "https://paste.twilio.design/components/avatar",
		inputs: [
			{
				friendlyName: "Name",
				name: "name",
				type: "text",
				defaultValue: "John Doe",
				required: true,
			},
			{
				friendlyName: "Image",
				name: "src",
				type: "url",
				defaultValue: null,
				onChange: (options: any) => {
					if (options.get("src") === "") {
						options.set("src", null);
					}
				},
			},
			{
				friendlyName: "Icon size",
				name: "size",
				type: "text",
				enum: iconSizes,
				defaultValue: "sizeIcon70",
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["user", "entity"],
				defaultValue: "user",
			},
			{
				friendlyName: "Color",
				name: "color",
				type: "text",
				enum: [
					"default",
					"decorative10",
					"decorative20",
					"decorative30",
					"decorative40",
				],
				defaultValue: "default",
			},
		],
	},
};
