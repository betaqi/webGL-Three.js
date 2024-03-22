import type { Color } from 'three'

export function useSetColor(gl: WebGLRenderingContext, color: Color) {
  gl.clearColor(color.r, color.g, color.b, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
}
