#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSamplerTex;
uniform sampler2D uSamplerMap;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSamplerTex, vTextureCoord + vec2(timeFactor*0.001,timeFactor*0.001));

	vec4 filter = texture2D(uSamplerMap, vTextureCoord)*0.2;
	
	gl_FragColor = color - filter;
}