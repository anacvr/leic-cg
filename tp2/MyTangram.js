import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.init();
	}
	
	init() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
    }

    display() {
        var angle45 = -Math.PI/4;
        var matrixRotate = [
        Math.cos(angle45), Math.sin(angle45), 0, 0,
        -Math.sin(angle45), Math.cos(angle45), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1 
        ];

        var matrixTranslate = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        2+Math.sqrt(2)-(1/5), 1/5, 0, 1
        ];

        this.scene.pushMatrix();
        this.scene.multMatrix(matrixTranslate);
        this.scene.multMatrix(matrixRotate);
        if(this.scene.displayDiamond) this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2 * Math.cos(Math.PI/4), (2 * Math.cos(Math.PI/4)) - 4/5, 0);
        this.scene.rotate(-(3*Math.PI)/4, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3, -9/5, 0);
        if(this.scene.displayParallelogram) this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1/5, -3 + 1/5, 0);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3/2, 1/2, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        if(this.scene.displayTriangle) this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2+Math.sqrt(2)-(1/5), -29/24, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }
}

