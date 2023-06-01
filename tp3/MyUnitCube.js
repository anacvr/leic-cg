import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [];

		/*
		A 0.5 -0.5 0.5
		B 0.5 -0.5 -0.5
		C 0.5 0.5 0.5
		D 0.5 0.5 -0.5

		E -0.5 -0.5 -0.5
		F -0.5 -0.5 0.5
		G -0.5 0.5 -0.5
		H -0.5 0.5 0.5
		*/
		var coords = 0.5;
		var x = 1;
		var y = 1;
		var z = 1;

		for(var i = 0; i < 3; i++) {
			for(var k = 0; k < 8; k++) {
				if(k % 4 == 0) x *= (-1);
				if(k % 2 == 0) y *= (-1);
				z *= (-1);
				this.vertices.push(coords * x, coords * y, coords * z);
			}
		}
		
		//console.log(this.vertices);

		//Counter-clockwise reference of vertices
		this.indices = [];

		var temp = 0;
		for(var j = 0; j < 3; j++) {
			this.indices.push(
				0 + temp, 1 + temp, 2 + temp,
				1 + temp, 3 + temp, 2 + temp,
				5 + temp, 4 + temp, 6 + temp,
				7 + temp, 5 + temp, 6 + temp,
				3 + temp, 5 + temp, 7 + temp,
				1 + temp, 5 + temp, 3 + temp,
				6 + temp, 4 + temp, 2 + temp,
				2 + temp, 4 + temp, 0 + temp,
				2 + temp, 7 + temp, 6 + temp,
				2 + temp, 3 + temp, 7 + temp,
				4 + temp, 5 + temp, 0 + temp,
				5 + temp, 1 + temp, 0 + temp
			);
			temp += 8;
		}

		this.normals = [];
		
		var temp = -1;
		for(var j = 0; j < 2; j++){
			for(var k = 0; k < 4; k++) {
				this.normals.push(1 * temp, 0, 0);
			}
			temp *= -1;
		}

		var temp = -1;
		for(var j = 0; j < 4; j++){
			for(var k = 0; k < 2; k++) {
				this.normals.push(0, 1 * temp, 0);
			}
			temp *= -1;
		}

		var temp = -1;
		for(var j = 0; j < 8; j++){
			this.normals.push(0, 0, 1* temp);
			temp *= -1;
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

