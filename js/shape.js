const shapeSection = document.querySelector('.shape')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  shapeSection.clientWidth / shapeSection.clientHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
})

renderer.setSize(shapeSection.clientWidth, shapeSection.clientHeight)
shapeSection.appendChild(renderer.domElement)

camera.position.z = 5

const geometry = new THREE.TorusGeometry(2, 1, 30, 200)


// set image
const loader = new THREE.TextureLoader()
const material = new THREE.MeshLambertMaterial({
  map: loader.load('./../img/text.png'),
})
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

controls = new THREE.OrbitControls( camera );

//light
const ambientLight = new THREE.AmbientLight(0xffffff) 
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.position.set(0, 0, 6)
scene.add(directionalLight)

// render scene
function animate() {
  requestAnimationFrame(animate)
  torus.rotation.x += 0.01
  torus.rotation.y += 0.01
  controls.update();
  renderer.render(scene, camera)
}
animate()

// resize
window.addEventListener('resize', () => {
  camera.aspect = shapeSection.clientWidth / shapeSection.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(shapeSection.clientWidth, shapeSection.clientHeight)
})

