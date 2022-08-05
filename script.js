import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import { VRButton } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
renderer.xr.enabled = true;
document.body.appendChild( VRButton.createButton( renderer ) );

			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

		const listener = new THREE.AudioListener();
camera.add( listener );

// create the PositionalAudio object (passing in the listener)
const sound = new THREE.PositionalAudio( listener );

// load a sound and set it as the PositionalAudio object's buffer

const clock = new THREE.Clock();

// create an object for the sound to play from
 

   const sphere = new THREE.SphereGeometry( 0.1, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xff2200 } );
const mesh = new THREE.Mesh( sphere, material );
scene.add( mesh );
mesh.add(sound)





document.querySelector('#VRButton').addEventListener('click', () =>{
	const audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'Rauf-faik.mp3', function( buffer ) {
	  sound.setBuffer( buffer );
	  sound.setRefDistance( 20 );
	  sound.play();
  });
  
   })

// finally add the sound to the mesh

//const controls = new OrbitControls( camera, renderer.domElement );

				camera.position.set( 0, 1.6, 8 );

		renderer.setAnimationLoop( function () {
			const delta = clock.getDelta() * 0.8;

	renderer.render( scene, camera );

} );