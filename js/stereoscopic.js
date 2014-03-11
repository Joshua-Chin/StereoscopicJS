window.onload = function() {

	var canvas = document.getElementById("canvas");
	var hiddenCanvas = document.getElementById("hiddenCanvas");
	var hiddenCanvas1 = document.getElementById("hiddenCanvas1");
	var ctx = canvas.getContext("2d");
	var hiddenCtx1 = hiddenCanvas1.getContext("2d");
	
	var renderer = new THREE.WebGLRenderer({
		canvas : hiddenCanvas,
		antialias : true
	});

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, hiddenCanvas.width / hiddenCanvas.height, 0.1, 1000);

	var cube = new THREE.TorusGeometry(1, 0.4, 80, 60);

	var white = new THREE.MeshPhongMaterial({
		color : 0xffffff
	});
	var red = new THREE.MeshPhongMaterial({
		color : 0xff0000
	});
	var green = new THREE.MeshPhongMaterial({
		color : 0x00ff00
	});
	var blue = new THREE.MeshPhongMaterial({
		color : 0x0000ff
	});
	var redCube = new THREE.Mesh(cube, white);
	var greenCube = new THREE.Mesh(cube, white);
	var blueCube = new THREE.Mesh(cube, white);

	redCube.position.set(0, 0, 2);
	greenCube.position.set(2, 0, 0);
	blueCube.position.set(-2, 5, -20);

	scene.add(redCube);
	scene.add(greenCube);
	scene.add(blueCube);

	var light = new THREE.DirectionalLight(0xffffff);
	light.position.set(0, 3, 7);
	scene.add(light);

	camera.position.z = 10;

	var render = function() {
		requestAnimationFrame(render);
		
		redCube.rotation.x += 0.01;
		redCube.rotation.y += 0.01;
		blueCube.rotation.x += 0.01;
		blueCube.rotation.y += 0.01;
		greenCube.rotation.x += 0.01;
		greenCube.rotation.y += 0.01;
		
		camera.position.x = -0.25;
		light.color.setHex(0xff0000);
		renderer.render(scene, camera);
		hiddenCtx1.drawImage(hiddenCanvas, 0, 0);
		
		camera.position.x = 0.25;
		light.color.setHex(0x00ffff);
		renderer.render(scene, camera);
		ctx.globalCompositeOperation = "copy";
		ctx.drawImage(hiddenCanvas1, -100, 0);
		ctx.globalCompositeOperation = "lighter";
		ctx.drawImage(hiddenCanvas, 100, 0);
	};
	render();
};
