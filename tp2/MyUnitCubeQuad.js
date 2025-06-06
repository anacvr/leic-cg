import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.init();
	}
	
	init() {
        this.quad = new MyQuad(this.scene);
    }

    display() {
        this.scene.pushMatrix();

        //face y
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();

        //face -y
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        //face x
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.quad.display();
        this.scene.popMatrix();

        //face -x
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.quad.display();
        this.scene.popMatrix();

        //face z
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        //face -z
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    }
}

