import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, topTexture, frontTexture, rightTexture, leftTexture, backTexture, bottomTexture) {
		super(scene);
        this.init(topTexture, frontTexture, rightTexture, leftTexture, backTexture, bottomTexture);
	}
	
	init(topTexture, frontTexture, rightTexture, leftTexture, backTexture, bottomTexture) {
        this.quad = new MyQuad(this.scene);

        // Material top
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture(topTexture);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // Material front
        this.frontMaterial = new CGFappearance(this.scene);
        this.frontMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.frontMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.frontMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.frontMaterial.setShininess(10.0);
        this.frontMaterial.loadTexture(frontTexture);
        this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        // Material right
        this.rightMaterial = new CGFappearance(this.scene);
        this.rightMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.rightMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rightMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.rightMaterial.setShininess(10.0);
        this.rightMaterial.loadTexture(rightTexture);
        this.rightMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        // Material left
        this.leftMaterial = new CGFappearance(this.scene);
        this.leftMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.leftMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.leftMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.leftMaterial.setShininess(10.0);
        this.leftMaterial.loadTexture(leftTexture);
        this.leftMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // Material back
        this.backMaterial = new CGFappearance(this.scene);
        this.backMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.backMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.backMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.backMaterial.setShininess(10.0);
        this.backMaterial.loadTexture(backTexture);
        this.backMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // Material bottom
        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture(bottomTexture);
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        //face y
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.topMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //face -y
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bottomMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //face x
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.rightMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //face -x
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.leftMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //face z
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.frontMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //face -z
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.backMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();
    }
}

