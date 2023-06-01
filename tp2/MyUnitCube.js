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
		this.vertices = [      
                                // face de baixo
			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			-0.5, -0.5, 0.5,	//2
			0.5, -0.5, 0.5,		//3
                                // face de cima
            -0.5, 0.5, -0.5,	//4
			0.5, 0.5, -0.5,	    //5
			-0.5, 0.5, 0.5,	    //6
			0.5, 0.5, 0.5		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //face y
			1, 3, 2,
            5, 4, 6, //face y-
            7, 5, 6,
            3, 5, 7, //face x
            1, 5, 3,
            6, 4, 2, //face -x
            2, 4, 0,
            2, 7, 6, //face z
            2, 3, 7,
            4, 5, 0, //face z-
            5, 1, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

