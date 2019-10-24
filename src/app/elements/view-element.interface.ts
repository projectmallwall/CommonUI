import { EventEmitter } from '@angular/core';

export interface ViewElement {
    //A viewElement will always be a DumbComponent, similar to pure functions. 
    //It will display UI purely based on the inputs given to it and not on basis of any global state. 
    data: any;  //Input: Data to be passed to the element for display. Needs two way binding 
    span: Number;   //Input: Indicates size of the field. One way binded
    editMode: Boolean;  //Input
    dataChange(): EventEmitter<any>; //Output: Function to be executed on change of data.
}
