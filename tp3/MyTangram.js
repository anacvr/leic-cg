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
        this.initMaterials();
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

        this.scene.customMaterial.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(matrixTranslate);
        this.scene.multMatrix(matrixRotate);
        this.diamond.display();
        this.scene.popMatrix();

        this.orange.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.blue.apply();
        this.scene.pushMatrix();
        this.scene.translate(-2 * Math.cos(Math.PI/4), (2 * Math.cos(Math.PI/4)) - 4/5, 0);
        this.scene.rotate(-(3*Math.PI)/4, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.yellow.apply();
        this.scene.pushMatrix();
        this.scene.translate(-3, -9/5, 0);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.purple.apply();
        this.scene.pushMatrix();
        this.scene.translate(1/5, -3 + 1/5, 0);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.pink.apply();
        this.scene.pushMatrix();
        this.scene.translate(3/2, 1/2, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.red.apply();
        this.scene.pushMatrix();
        this.scene.translate(2+Math.sqrt(2)-(1/5), -29/24, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }

    updateBuffers(complexity){
        // reinitialize buffers
        this.diamond.initBuffers();
        this.triangleBig.initBuffers();
        this.triangleSmall.initBuffers();
        this.triangle.initBuffers();
        this.parallelogram.initBuffers();

        this.diamond.initNormalVizBuffers();
        this.triangleBig.initNormalVizBuffers();
        this.triangleSmall.initNormalVizBuffers();
        this.triangle.initNormalVizBuffers();
        this.parallelogram.initNormalVizBuffers();
    }

    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }

    initMaterials() {
		this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(1.0, 1.0, 0, 1.0);
        this.yellow.setDiffuse(1.0, 1.0, 0, 1.0);
        this.yellow.setSpecular(1.0, 1.0, 0, 1.0);
        this.yellow.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0, 0.5, 1.0, 1.0);
        this.blue.setDiffuse(0, 0.5, 1.0, 1.0);
        this.blue.setSpecular(0, 0.5, 1.0, 1.0);
        this.blue.setShininess(10.0);

        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(1.0, 0.64, 0, 1.0);
        this.orange.setDiffuse(1.0, 0.64, 0, 1.0);
        this.orange.setSpecular(1.0, 0.64, 0, 1.0);
        this.orange.setShininess(10.0);

        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(1.0, 0.5, 0.6, 1.0);
        this.pink.setDiffuse(1.0, 0.5, 0.6, 1.0);
        this.pink.setSpecular(1.0, 0.5, 0.6, 1.0);
        this.pink.setShininess(10.0);

        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0.63, 0.12, 0.94, 1.0);
        this.purple.setDiffuse(0.63, 0.12, 0.94, 1.0);
        this.purple.setSpecular(0.63, 0.12, 0.94, 1.0);
        this.purple.setShininess(10.0);

        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(1.0, 0, 0, 1.0);
        this.red.setDiffuse(1.0, 0, 0, 1.0);
        this.red.setSpecular(1.0, 0, 0, 1.0);
        this.red.setShininess(10.0);
	}
}

