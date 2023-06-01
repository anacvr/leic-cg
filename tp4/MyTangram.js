import { CGFobject, CGFappearance } from '../lib/CGF.js';
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

        // material
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        this.tangramMaterial.apply();

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
        this.diamond.display();
        this.scene.popMatrix();

        var newCoords = [
            1, 1,
			0.5, 0.5,
			1, 0
        ];
        
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.triangleBig.updateTexCoords(newCoords);
        this.triangleBig.display();
        this.scene.popMatrix();
        
        var newCoords = [
            1, 0,
            0.5, 0.5,
            0.25, 0.25
        ];

        this.scene.pushMatrix();
        this.scene.translate(-2 * Math.cos(Math.PI/4), (2 * Math.cos(Math.PI/4)) - 4/5, 0);
        this.scene.rotate(-(3*Math.PI)/4, 0, 0, 1);
        this.triangleBig.updateTexCoords(newCoords);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3, -9/5, 0);
        this.parallelogram.display();
        this.scene.popMatrix();

        var newCoords = [
            0, 0,
            0.25, 0.25,
            0, 0.5
        ];
        
        this.scene.pushMatrix();
        this.scene.translate(1/5, -3 + 1/5, 0);
        this.triangleSmall.updateTexCoords(newCoords);
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(3/2, 1/2, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();
        
        var newCoords = [
            0.25, 0.75,
            0.5, 0.5,
            0.75, 0.75
        ];

        this.scene.pushMatrix();
        this.scene.translate(2+Math.sqrt(2)-(1/5), -29/24, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.triangleSmall.updateTexCoords(newCoords);
        this.triangleSmall.display();
        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }
}

