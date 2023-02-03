
import {ARButton} from "https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js";


let camera, scene, renderer 
let torus, sphere, box, cylinder, torus1,torusKnot


init()
animate()
function init() {
    const container = document.createElement("div")
    document.body.appendChild(container)

    // Create a scene
    scene = new THREE.Scene()
    scene.name = "myScene"
    
    // Create a camera
    camera = new THREE.PerspectiveCamera(
        60, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        100
    )
    console.log(camera)
    scene.add(camera)
    
    // Create a renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.xr.enabled = true
    container.appendChild(renderer.domElement)
    console.log(renderer)

    const boxGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const boxMaterial = new THREE.MeshLambertMaterial({
        color: 0xff6666,
        opacity: 0.5,
        transparent: true,
        shininess: 10,
        flatShading: true
    })
    box = new THREE.Mesh(boxGeometry, boxMaterial)
    box.position.x = 0.3
    box.position.y = 0.5
    box.position.z = -1

    scene.add(box)

    const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32)
    const sphereMaterial = new THREE.MeshToonMaterial({
        color: 0x6582,
        shininess: 10,
        flatShading: false,
        opacity: 0.8
    })
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)
    sphere.position.set(-0.5, 0.5, -1)


    const torusGeometry = new THREE.TorusGeometry(0.15, 0.025, 16,1000)
    const torusMaterial = new THREE.MeshLambertMaterial({
        color: 0x999,
        shininess: 80,
        flatShading: true,
        opacity: 0.75
    })
    torus = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(sphere)
    torus.position.set(-0.7, -0.3, -1)
    scene.add(torus)

    const cylinderGeometry = new THREE.CylinderGeometry(10, 10, 40, 640);
    const cylinderMaterial = new THREE.MeshBasicMaterial({
        color: 0x999,
        shininess: 80,
        flatShading: true,
        opacity: 0.75
    })
    cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
    
    cylinder.position.set(-0.2, -0.3, -2)
    scene.add(cylinder)
    const torus1Geometry = new THREE.TorusGeometry(0.15, 0.025, 16,1000)
    const torus1Material = new THREE.MeshBasicMaterial({
        color: 0x9fe99,
        shininess: 80,
        flatShading: true,
        opacity: 0.75
    })
    torus1 = new THREE.Mesh(torus1Geometry, torus1Material)
    scene.add(sphere)
    torus1.position.set(-0, -0, -1)
    scene.add(torus1)
    
    const torusKnotgeometry = new THREE.TorusKnotGeometry( 0.25, 0.08, 250, 10  );
    const torusKnotmaterial = new THREE.MeshMatcapMaterial( { color: 0x9F5fb9,
    



} );
    torusKnot = new THREE.Mesh( torusKnotgeometry, torusKnotmaterial );
    torusKnot.position.set(0.7, -0.3, -1)
    scene.add(torusKnot)
    // Create a light¨
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 5000);
    directionalLight.position.set(-20, -1, 5)
    scene.add(directionalLight)

    const button=ARButton.createButton(renderer)
    document.body.appendChild(button)




}

function animate() {
    renderer.setAnimationLoop(render)
}

function render() {
    rotateObjects()
    renderer.render(scene, camera)
}

function rotateObjects() {    torus.rotation.x += 0.02
    sphere.rotation.x += 0.02
    box.rotation.y += 0.05
    cylinder.rotation.y += 0.05
    torus1.rotation.y += 0.05
    torusKnot.rotation.y += 0.05}