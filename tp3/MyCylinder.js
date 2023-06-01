import {CGFobject} from '../lib/CGF.js';
/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCylinder extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	}
	
	initBuffers() {

		// height of solid
		var height = 1;
		
		// vertices

		this.vertices = [];

		var angle = 0;
		var z = 0;

		for(var j=0; j < this.stacks + 1; j++){
			for(var i=0; i < this.slices; i++){
				this.vertices.push(Math.cos(angle), Math.sin(angle), z);
				angle += (2*Math.PI) / this.slices;
			}
			z += height / this.stacks;
		}
		

        console.log(this.vertices);

		// indices

		this.indices = [];
		var j = 0;
		var k = 0;
		for(var i = 0; i < this.stacks; i++){
			var og = i * this.slices; // first point
			for(j = 0; j < this.slices - 1; j++){
				k = og + j;
				this.indices.push(k, (k + 1), k + this.slices);
				this.indices.push((k + 1), (k + 1) + this.slices, k + this.slices);
			}
			// The last side
			k = og + j;
			this.indices.push(k, og, k + this.slices);
			this.indices.push(og, og + this.slices, k + this.slices);
		}
		
		
		// normals

		this.normals = [];
		var j = 0;
		
		for(var i = 0; i < this.stacks + 1; i++){
			var og = i * this.slices; // first point
			for(j = 0; j < this.slices - 1; j++){
				this.normals.push(Math.cos(((2*Math.PI)/this.slices)*j), Math.sin(((2*Math.PI)/this.slices)*j), 0);
			}
			this.normals.push(Math.cos(((2*Math.PI)/this.slices)*j), Math.sin(((2*Math.PI)/this.slices)*j), 0);
		}
		
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	updateBuffers(complexity){
		this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

		// reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    
	updateBuffersStacks(prismStackNumber) {
		this.stacks = Math.round(prismStackNumber);

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
	}
    
}

