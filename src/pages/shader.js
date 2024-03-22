function initShader(gl, vsSource, fsSource) {
  const program = gl.createProgram() // 创建着色器程序
  // 创建着色器
  const vShader = gl.createShader(gl.VERTEX_SHADER)
  const fShader = gl.createShader(gl.FRAGMENT_SHADER)
  // 绑定着色器
  gl.shaderSource(vShader, vsSource)
  gl.shaderSource(fShader, fsSource)
  // 编译着色器
  gl.compileShader(vShader)
  gl.compileShader(fShader)
  // 将着色器挂载到着色器程序上
  gl.attachShader(program, vShader)
  gl.attachShader(program, fShader)
  // 链接着色器程序
  gl.linkProgram(program)
  // 使用着色器程序
  gl.useProgram(program)

  gl.program = program // 将着色器程序挂载到gl上
}


export {
  initShader
}
