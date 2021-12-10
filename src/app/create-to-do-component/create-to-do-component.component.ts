import { ThrowStmt } from '@angular/compiler';
import { Component, ChangeDetectionStrategy, 
   } from '@angular/core';

   import { FormGroup, AbstractControl, FormBuilder,  Validators,  FormControl} from '@angular/forms';
@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateToDoComponent {

  changeDetectedVal:any;
  showError:boolean=false;
  objectProp: {Nameoftask: string,taskDesc:string,Repeating:string,checked:boolean} = { Nameoftask: null ,taskDesc:null,Repeating:null,checked:false};
  selected='TodoList';
  form: FormGroup;
  private count = 0;
constructor(private formBuilder: FormBuilder){
  this.form = this.formBuilder.group({
     
    Nameoftask: ['', Validators.compose([ Validators.required,Validators.minLength(2),Validators.maxLength(500)])],
    taskDesc : ['',  Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(500)])],
    Repeating:['',Validators.compose([Validators.required])]
});
}
isselected(select){
this.selected=select;
}
  changeObjectWithRef(event) {
    if(this.form.valid){
      
      this.showError = false;
      this.objectProp = Object.assign({}, {Nameoftask: this.form.value.Nameoftask,taskDesc: this.form.value.taskDesc,Repeating: this.form.value.Repeating,checked:false});

      this.form.reset()
    }else{
      this.showError = true;
      setTimeout(()=>{
       this.showError = false;
      },5000);
    }
    }
}
