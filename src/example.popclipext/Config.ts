// #popclip
// name: Example Package

export const action: Action = {
	title: "Example",
	code() {
		popclip.showText("Hello, world!");
	},
};
