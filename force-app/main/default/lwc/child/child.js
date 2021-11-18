import { LightningElement, api, track } from 'lwc';

export default class Child extends LightningElement {
    
    _primitiveVar;

    @api get primitiveVar(){
        return this._primitiveVar;
    }

    set primitiveVar(value){
        this._primitiveVar = value;
    }

    


    _obj;

    @api get obj(){
        return this._obj;
    }

    set obj(value){
        this._obj = value;
    }
}