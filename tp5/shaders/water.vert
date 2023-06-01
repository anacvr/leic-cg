attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSamplerMap;

uniform float normScale;

void main() {
    vec3 offset=vec3(0.0,0.0,0.0);

    vTextureCoord = aTextureCoord + vec2(timeFactor*0.01,timeFactor*0.01);
  
	offset=aVertexNormal*normScale*texture2D(uSamplerMap, vec2(0.0,0.1)+vTextureCoord).b * 0.05;


	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}