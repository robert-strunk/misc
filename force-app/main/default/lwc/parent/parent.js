import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {

    primitiveVar = 100;   
    objVar = { innerObj:{prop:100}};

    handleClick(){
        this.primitiveVar += 1;
        this.objVar.innerObj.prop += 1;
    }
}