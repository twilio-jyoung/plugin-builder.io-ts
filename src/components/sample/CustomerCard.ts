// command + shift + L to update all instances of word at once
import { CustomBuilderIOComponent } from "types/CustomBuilderIOComponent";
import { CustomerCard } from "../sample/CustomerCard.Component";


export const CustomerCardComponent: CustomBuilderIOComponent = {
	component: CustomerCard,
	componentOptions: {
		name: "Customer Card",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/user.png",
	},
};