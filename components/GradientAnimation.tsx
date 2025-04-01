'use client'
import React, { useEffect, useRef, FC } from 'react'

interface GradientAnimationProps {
  className?: string
  colorA?: number[]
  colorB?: number[]
  chaosLevel?: number
  scale?: number
  // width?: number
  // height?: number
}

const GradientAnimation: FC<GradientAnimationProps> = ({
  className,
  colorA = [0.1, 0.8, 0.3], // Default: Darker green
  colorB = [0.2, 0.7, 0.5], // Default: Lighter green
  chaosLevel = 1.0, // Default: Normal chaos (1.0 = 100%)
  scale = 1.0, // Default: Normal scale (1.0 = 100%)
  // width = 300,
  // height = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  // const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const programRef = useRef<WebGLProgram | null>(null)
  const uniformsRef = useRef<{
    resolution?: WebGLUniformLocation
    time?: WebGLUniformLocation
    colorA?: WebGLUniformLocation
    colorB?: WebGLUniformLocation
    chaosLevel?: WebGLUniformLocation
    scale?: WebGLUniformLocation
  }>({})

  useEffect(() => {
    const canvas = canvasRef.current
    // const container = containerRef.current
    // if (!canvas || !container) return
    if (!canvas) return

    const gl = canvas.getContext('webgl')

    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    // Resize canvas to full size
    const resizeCanvas = () => {
      if (!canvas || !gl) return

      // const displayWidth = container.clientWidth
      // const displayHeight = container.clientHeight
      const displayWidth = canvas.clientWidth
      const displayHeight = canvas.clientHeight

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth
        canvas.height = displayHeight
        gl.viewport(0, 0, canvas.width, canvas.height)

        // Update resolution uniform if program exists
        if (programRef.current && uniformsRef.current.resolution) {
          gl.uniform2f(uniformsRef.current.resolution, canvas.width, canvas.height)
        }
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `

    // Fragment shader with animated gradient
    const fragmentShaderSource = `
      precision mediump float;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec3 u_colorA;
      uniform vec3 u_colorB;
      uniform float u_chaosLevel;
      uniform float u_scale;
      
      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution;
        
        // Apply scale (centered)
        st = (st - 0.5) / u_scale + 0.5;
        
        // Create moving wave patterns with chaos level
        float noise1 = sin(st.x * 3.0 * u_chaosLevel + u_time * 0.2) * 
                      cos(st.y * 2.0 * u_chaosLevel + u_time * 0.1) * 0.25 + 0.75;
        float noise2 = cos(st.x * 4.0 * u_chaosLevel - u_time * 0.3) * 
                      sin(st.y * 3.0 * u_chaosLevel + u_time * 0.2) * 0.25 + 0.75;
        
        // Create radial gradient from center
        vec2 center = vec2(0.5) + vec2(
          sin(u_time * 0.1) * 0.2 * u_chaosLevel,
          cos(u_time * 0.15) * 0.2 * u_chaosLevel
        );
        float dist = distance(st, center);
        
        // Combine effects
        float mixFactor = noise1 * noise2 * (1.0 - dist * 0.8);
        vec3 color = mix(u_colorA, u_colorB, mixFactor);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Create and compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    if (!vertexShader) {
      console.error('Failed to create vertex shader')
      return
    }

    gl.shaderSource(vertexShader, vertexShaderSource)
    gl.compileShader(vertexShader)

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    if (!fragmentShader) {
      console.error('Failed to create fragment shader')
      return
    }

    gl.shaderSource(fragmentShader, fragmentShaderSource)
    gl.compileShader(fragmentShader)

    // Create program
    const program = gl.createProgram()
    if (!program) {
      console.error('Failed to create WebGL program')
      return
    }

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.useProgram(program)
    programRef.current = program

    // Create a buffer for the position of the rectangle (2 triangles)
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

    // Get the attribute location and set the data format
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    uniformsRef.current = {
      resolution: gl.getUniformLocation(program, 'u_resolution') || undefined,
      time: gl.getUniformLocation(program, 'u_time') || undefined,
      colorA: gl.getUniformLocation(program, 'u_colorA') || undefined,
      colorB: gl.getUniformLocation(program, 'u_colorB') || undefined,
      chaosLevel: gl.getUniformLocation(program, 'u_chaosLevel') || undefined,
      scale: gl.getUniformLocation(program, 'u_scale') || undefined,
    }

    // Set the resolution
    if (uniformsRef.current.resolution) {
      gl.uniform2f(uniformsRef.current.resolution, canvas.width, canvas.height)
    }

    // Animation loop
    const startTime = performance.now()
    const render = (currentTime: number) => {
      const elapsedTime = (currentTime - startTime) / 1000 // Convert to seconds

      // Update time uniform
      if (uniformsRef.current.time) {
        gl.uniform1f(uniformsRef.current.time, elapsedTime)
      }

      // Update other uniforms from props
      if (uniformsRef.current.colorA) {
        gl.uniform3fv(uniformsRef.current.colorA, new Float32Array(colorA))
      }

      if (uniformsRef.current.colorB) {
        gl.uniform3fv(uniformsRef.current.colorB, new Float32Array(colorB))
      }

      if (uniformsRef.current.chaosLevel) {
        gl.uniform1f(uniformsRef.current.chaosLevel, chaosLevel)
      }

      if (uniformsRef.current.scale) {
        gl.uniform1f(uniformsRef.current.scale, scale)
      }

      // Draw the rectangle
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      // Request next frame
      animationRef.current = requestAnimationFrame(render)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(render)

    // Cleanup
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }

      window.removeEventListener('resize', resizeCanvas)

      if (gl) {
        if (program) gl.deleteProgram(program)
        if (vertexShader) gl.deleteShader(vertexShader)
        if (fragmentShader) gl.deleteShader(fragmentShader)
        if (positionBuffer) gl.deleteBuffer(positionBuffer)
      }
    }
  }, [colorA, colorB, chaosLevel, scale]) // Re-run effect if these props change

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}

export default GradientAnimation
