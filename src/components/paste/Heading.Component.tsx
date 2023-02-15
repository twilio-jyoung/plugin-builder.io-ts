import React from "react";
import { Heading, HeadingProps } from "@twilio-paste/core";

export const PasteHeading = (props: HeadingProps & { text: string }) => (
	<Heading
		as={props.as}
		variant={props.variant}
		marginBottom={props.marginBottom}
	>
		{props.text}
	</Heading>
);
