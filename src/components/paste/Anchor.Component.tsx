import React from "react";
import { Anchor, AnchorProps } from "@twilio-paste/core";

export const TextAnchor = (
	props: AnchorProps & { text: string }
): JSX.Element => {
	return (
		<Anchor
			href={props.href}
			showExternal={props.showExternal}
			target={props.target}
			variant={props.variant}
		>
			{props.text}
		</Anchor>
	);
};
