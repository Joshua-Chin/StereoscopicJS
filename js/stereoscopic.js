var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({
	color : 0xff0000
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0,3,7);
scene.add(light);

camera.position.z = 5;

var render = function() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};
render();
