class App {
	constructor({setup, animate}) {
		this.setup = setup;
		this.animate = animate;
	}

	init = () => {
		this.initRenderer();
		this.initScene();
		this.initCamera();
		this.initStats();
		this.initGui();

		this.render();
		this.update();
	}

	initStats = () => {
        this.stats = new Stats();
        this.stats.setMode(0);
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
        document.body.appendChild( this.stats.domElement );
	}


	initCamera = () => {
		this.aspect = window.innerWidth / window.innerHeight;
		this.camera = new THREE.PerspectiveCamera(60, this.aspect, 0.1, 10000);
		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 50;
		this.camera.lookAt(this.scene.position);
	}

	initRenderer = () => {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(0x000000, 1.0);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
	}

	initScene = () => {
		this.scene = new THREE.Scene();
	}

	initGui = (controls, callback) => {
		this.gui = new dat.GUI();
	}

	useGui = (callback) => {
		callback(this.gui);
	}

	render = () => {
		this.setup();
		document.body.appendChild(this.renderer.domElement);
	}

	update = () => {
		this.animate();
		this.stats.update();
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.update);
	}

	handleResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
}