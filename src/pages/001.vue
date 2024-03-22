<script setup lang="ts">
import { Color } from 'three'
import type { ColorRepresentation } from 'three'
import { ref } from 'vue'

const width = ref(window.innerWidth)
const height = ref(window.innerHeight)

const el = ref<HTMLCanvasElement>()
const gl = $computed(() => el.value!.getContext('webgl')!) as WebGLRenderingContext

function init() {
  setColor('red')
}

function setColor(color: ColorRepresentation) {
  const newColor = new Color(color)
  useSetColor(gl, newColor)
  // offsetHSL(newColor)
}

// function offsetHSL(color: Color) {
//   color.offsetHSL(0.005, 0, 0)
//   gl.clearColor(color.r, color.g, color.b, 1)
//   useSetColor(gl, color)
//   requestAnimationFrame(() => offsetHSL(color))
// }

onMounted(() => {
  init()
})
</script>

<template>
  <canvas ref="el" :width="width" :height="height" />
</template>

<style></style>
