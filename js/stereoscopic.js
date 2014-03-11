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

	var cube = new THREE.TorusGeometry(.5, 0.2, 80, 60);
    var cube1 = new THREE.TetrahedronGeometry(1);
    var cube2 = new THREE.SphereGeometry(4, 50, 50);
    var cube3 = new THREE.CylinderGeometry(2,2,5, 20, 20);


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
    var purple = new THREE.MeshPhongMaterial({color:0xff00ff});
	var redCube = new THREE.Mesh(cube, white);
	redCube.position.set(0, 0, 5);
	scene.add(redCube);

	var redCube1 = new THREE.Mesh(cube1, white);
	redCube1.position.set(-5, 0, 0);
	scene.add(redCube1);

	var redCube2 = new THREE.Mesh(cube3, white);
	redCube2.position.set(7, 0, -5);
	scene.add(redCube2);

	var redCube3 = new THREE.Mesh(cube2, white);
	redCube3.position.set(0, 10, -20);
	scene.add(redCube3);

	var light = new THREE.DirectionalLight(0xffffff);
	light.position.set(0, 3, 7);
	scene.add(light);

	camera.position.z = 10;

    var angle = 0;

	var render = function() {
		requestAnimationFrame(render);
		

		camera.position.x = -0.25;
		light.color.setHex(0xff0000);
		renderer.render(scene, camera);
		hiddenCtx1.drawImage(hiddenCanvas, 0, 0);
		
		camera.position.x = 0.25;
		light.color.setHex(0x00ffff);
		renderer.render(scene, camera);
		ctx.globalCompositeOperation = "copy";
		ctx.drawImage(hiddenCanvas1, -10, 0);
		ctx.globalCompositeOperation = "lighter";
		ctx.drawImage(hiddenCanvas, 10, 0);
	};
	render();
};
