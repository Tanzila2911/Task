import {Component, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListComponent implements OnChanges {
  ArrayList:any=[];
  @Input() simpleProperty: string;
  @Input() objectProperty: {value: string}

  @Output() changeDetected: EventEmitter<any> = new EventEmitter<any>()
  objectProp: {Nameoftask: string,taskDesc:string,Repeating:string,checked:boolean} = { Nameoftask: null ,taskDesc:null,Repeating:null,checked:false};
  
  constructor() { }
  ngOnChanges(objectProperty: any){
    if(objectProperty.objectProperty.currentValue.Nameoftask != null && objectProperty.objectProperty.currentValue.checked==false){
      this.ArrayList.push(objectProperty.objectProperty.currentValue);
  
      }
  }
  changeRememberme(event,int){
    this.ArrayList[int].checked=event.target.checked;
    // data.checked=event.terget.checked;
    this.ArrayList.splice(int, 1);
    this.objectProp = Object.assign({}, this.ArrayList[int]);

      }
    }
