import { Spinner, SpinnerProps } from "@twilio-paste/core/spinner";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import React, { Component, lazy, ReactNode, Suspense } from "react";

interface IconErrorBoundaryProps {
	children: ReactNode;
}
interface IconErrorBoundaryState {
	hasError: boolean;
}

class IconErrorBoundary extends Component<
	IconErrorBoundaryProps,
	IconErrorBoundaryState
> {
	constructor(props: IconErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): IconErrorBoundaryState {
		return { hasError: true };
	}

	render(): JSX.Element | ReactNode {
		if (this.state.hasError) {
			return (
				<ErrorIcon
					title="an error occurred"
					color="colorTextError"
					size="sizeIcon40"
					decorative
				/>
			);
		}

		return this.props.children;
	}
}

type IconLoaderProps = Omit<SpinnerProps, "title"> &
	IconWrapperProps & {
		icon: string;
		title?: string;
		decorative: boolean;
	};

const IconLoader: React.FC<IconLoaderProps> = React.memo(
	({ icon, ...iconProps }: IconLoaderProps) => {
		const AsyncIcon = lazy(() =>
			import(
				/* webpackMode: "eager" */ `@twilio-paste/icons/esm/${icon}.js`
			).then((c) => ({
				default: c[icon],
			}))
		);
		return (
			<IconErrorBoundary>
				<Suspense
					fallback={
						<Spinner
							size="sizeIcon30"
							{...iconProps}
							title={"Loading"}
							decorative
						/>
					}
				>
					<AsyncIcon icon={icon} {...iconProps} />
				</Suspense>
			</IconErrorBoundary>
		);
	}
);
export { IconLoader };
