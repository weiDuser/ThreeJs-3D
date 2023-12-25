function initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
  // 创建着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  // 引入顶点、片元着色器源代码
  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
  gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE)
  // 编译顶点、片元着色器
  gl.compileShader(vertexShader)
  gl.compileShader(fragmentShader)
  // 创建程序对象program
  const program = gl.createProgram()
  // 附着顶点着色器和片元着色器到program
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  // 链接program
  gl.linkProgram(program)
  // 使用program
  gl.useProgram(program)
  return program
}
