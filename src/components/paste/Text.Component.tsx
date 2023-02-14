import React from "react";
import { Text, TextProps } from "@twilio-paste/core";

export const PasteText = (props: TextProps & { text: string }): JSX.Element => {
	return (
		<Text
			as={props.as}
			color={props.color}
			fontFamily={props.fontFamily}
			fontSize={props.fontSize}
			fontWeight={props.fontWeight}
			lineHeight={props.lineHeight}
			margin={props.margin}
			padding={props.padding}
		>
			{props.text}
		</Text>
	);
};
