// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { Avatar } from "@twilio-paste/core";

export const AvatarComponent: CustomBuilderIOComponent = {
	component: Avatar,
	componentOptions: {
		name: "Paste Avatar", // shown in the Builder.io UI.  If from Paste, prefix with paste
		image: "", // URL: find from https://tabler-icons.io
		docsLink: "", // URL: link to this paste component.  find from https://paste.twilio.design/components
		inputs: [
			{
				friendlyName: "Name",
				name: "name",
				type: "text",
				defaultValue: "John Doe",
			},
		],
	},
};
