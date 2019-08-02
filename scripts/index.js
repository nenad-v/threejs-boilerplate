const app = new App({setup, animate});

window.onload = app.init;
window.onresize = app.handleResize;

const controls = {
	text: "random"
}

const elements = {
	sphere: null
}


function setup() {
	app.useGui(gui => {})
	app.camera.position.z = 200 * 2.75;
	createSphere();
}


function animate() {

}


function createSphere() {
	const radius = 200;
	const wSegments = 60;
	const hSegments = 60;
	const geometry = new THREE.SphereGeometry(radius, wSegments, hSegments);
	const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
	elements.sphere = new THREE.Mesh( geometry, material);

	elements.sphere.name = 'Sphere';
	app.scene.add(elements.sphere);
}