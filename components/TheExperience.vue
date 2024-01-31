<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
} from "three";
let renderer: WebGLRenderer;
const experience: Ref<HTMLCanvasElement | null> = ref(null);
const scene = new Scene();

// Camera
// const width = 800;
// const height = 600;
const camera = new PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
// const camera = new PerspectiveCamera(80, width / height, 1, 1000);
camera.position.set(0, 0, 2);

scene.add(camera);
// Camera

// sphere
const geometry = new SphereGeometry(1, 30, 30);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const sphere = new Mesh(geometry, material);
scene.add(sphere);
// sphere

function setRender() {
  if (experience.value) {
    renderer = new WebGLRenderer({
      canvas: experience.value,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
}

onMounted(() => {
  setRender();
});
</script>

<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>

<style></style>
