import { Component, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneListComponent implements OnChanges {
  ArrayList:any=[];
  @Input() simpleProperty: string;
  @Input() objectProperty: {value: string}

  @Output() changeDetected: EventEmitter<any> = new EventEmitter<any>()
  
  objectProp: {Nameoftask: string,taskDesc:string,Repeating:string,checked:boolean} = { Nameoftask: null ,taskDesc:null,Repeating:null,checked:false};
  
  constructor() { }
  ngOnChanges(objectProperty: any){
    if(objectProperty.objectProperty.currentValue.Nameoftask != null && objectProperty.objectProperty.currentValue.checked==true){
      this.ArrayList.push(objectProperty.objectProperty.currentValue);
  
      }
  }
  changeRememberme(event,int){
console.log(event.target.checked)
    this.ArrayList[int].checked=event.target.checked;
    this.ArrayList.splice(int, 1);
    this.objectProp = Object.assign({}, this.ArrayList[int]);

  }
}
