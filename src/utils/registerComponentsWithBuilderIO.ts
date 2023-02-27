import { Builder, withChildren } from "@builder.io/react";
import { CustomBuilderIOComponent } from "../types/CustomBuilderIOComponent";
import { AlertComponent } from "../components/paste/Alert";
import { AnchorComponent } from "../components/paste/Anchor";
import { AvatarComponent } from "../components/paste/Avatar";
import { BadgeComponent } from "../components/paste/Badge";
import { ButtonComponent } from "../components/paste/Button";
import { CardComponent } from "../components/paste/Card";
import { HeadingComponent } from "../components/paste/Heading";
import { IconComponent } from "../components/paste/Icon";
import { ParagraphComponent } from "../components/paste/Paragraph";
import { TabsComponent } from "../components/paste/Tabs";
import { TextComponent } from "../components/paste/Text";
import { PolarAreaApexChartComponent } from "../components/sample/ApexChart";

function registerListOfComponents(
	customComponents: CustomBuilderIOComponent[]
): void {
	customComponents.forEach((customComponent) => {
		Builder.registerComponent(
			customComponent.componentOptions.canHaveChildren
				? withChildren(customComponent.component)
				: customComponent.component,

			customComponent.componentOptions
		);
	});
}

export default function registerComponentsWithBuilderIO(): void {
	const components: CustomBuilderIOComponent[] = [
		// paste components
		AlertComponent,
		AnchorComponent,
		AvatarComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		HeadingComponent,
		IconComponent,
		ParagraphComponent,
		TabsComponent,
		TextComponent,

		// custom components
		PolarAreaApexChartComponent,
	];

	registerListOfComponents(components);
}
