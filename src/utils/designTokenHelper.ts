import { sizings } from "@twilio-paste/design-tokens";

export default function sortOptionNames(obj: object): string[] {
	let result = Object.keys(obj).sort(function (a, b) {
		return a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: "base",
		});
	});

	return result;
}

export const iconSizes = Object.keys(sizings)
	.filter((key) => key.includes("sizeIcon"))
	.sort(function (a, b) {
		return a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: "base",
		});
	});
