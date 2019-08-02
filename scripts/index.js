const app = new App({setup, animate});

window.onload = app.init;
window.onresize = app.handleResize;

const controls = {
	text: "random"
}

function setup() {
	app.useGui(gui => {})
}

function animate() {

}