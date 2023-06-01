import {CGFobject} from '../lib/CGF.js';
/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	}
	
	initBuffers() {
		
		// vertices

		this.vertices = [];
		var angle = 0;

		for(var n = 0; n < 2; n++) { // iterates normals
			var height = 1;
			var z = 0;
			for(var j=0; j < this.stacks + 1; j++){
				for(var i=0; i < this.slices; i++){
					this.vertices.push(Math.cos(angle), Math.sin(angle), z);
					angle += (2*Math.PI) / this.slices;
				}
			z += height / this.stacks;
			}
		}

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
		var j = 0
		var k = 0;
		var height = 1;
		var z = 0;
		
		// first normal of the same side
		for(var i = 0; i < this.stacks + 1; i++){
			var og = 3 * i * this.slices; // first point
			for(j = 0; j < this.slices - 1; j++){
				k = og + (j * 3);
				var nx = (this.vertices[k] + this.vertices[k+3])/2;
				var ny = (this.vertices[k+1] + this.vertices[k+3+1])/2;
				var nz = (this.vertices[k+2] + this.vertices[k+3+2])/2;
				nz -= z;
				var distance = Math.sqrt((nx*nx) + (ny*ny) + (nz*nz));
				this.normals.push(nx/distance, ny/distance, nz/distance);
			}
			k = og + (j * 3);
			var nx = (this.vertices[k] + this.vertices[og])/2;
			var ny = (this.vertices[k+1] + this.vertices[og+1])/2;
			var nz = (this.vertices[k+2] + this.vertices[og+2])/2;
			nz -= z;
			var distance = Math.sqrt((nx*nx) + (ny*ny) + (nz*nz));
			this.normals.push(nx/distance, ny/distance, nz/distance);

			z += height / this.stacks;
		}

		var j = 0
		var k = 0;
		var height = 1;
		var z = 0;

		// second normal of the same side
		for(var i = 0; i < this.stacks + 1; i++){
			var og = 3 * i * this.slices; // first point

			k = og + ((this.slices - 1) * 3); // last point

			var nx = (this.vertices[k] + this.vertices[og])/2;
			var ny = (this.vertices[k+1] + this.vertices[og+1])/2;
			var nz = (this.vertices[k+2] + this.vertices[og+2])/2;
			nz -= z;
			var distance = Math.sqrt((nx*nx) + (ny*ny) + (nz*nz));
			this.normals.push(nx/distance, ny/distance, nz/distance);

			for(j = 0; j < this.slices - 1; j++){
				k = og + (j * 3);
				var nx = (this.vertices[k] + this.vertices[k+3])/2;
				var ny = (this.vertices[k+1] + this.vertices[k+3+1])/2;
				var nz = (this.vertices[k+2] + this.vertices[k+3+2])/2;
				nz -= z;
				var distance = Math.sqrt((nx*nx) + (ny*ny) + (nz*nz));
				this.normals.push(nx/distance, ny/distance, nz/distance);
			}

			z += height / this.stacks;
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

