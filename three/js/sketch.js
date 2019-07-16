// Create a Three.js Scene
var scene = new THREE.Scene();

// Set Up Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Move camera
camera.position.z = 50;

// Set up renderer and add to document body
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// load texture
var texture = new THREE.TextureLoader().load( "textures/gradient.png" );
// create material using texture
var material = new THREE.MeshBasicMaterial( { map: texture } );
// create geometry for 3D shape
var geometry = new THREE.TorusKnotBufferGeometry( 15, 4, 100, 16 );
// create a torus object using our geometry and material
var torus = new THREE.Mesh( geometry, material );

// add torus to scene
scene.add( torus );


function animate() { // this loops
	requestAnimationFrame( animate ); // this updates our animation frame
	renderer.render( scene, camera ); // this renders our new frame
  torus.rotation.y += 0.01; // this increases our rotation value for torus
}

animate();

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);
