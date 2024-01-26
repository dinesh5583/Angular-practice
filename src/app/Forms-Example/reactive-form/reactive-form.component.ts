import { Component, OnInit } from '@angular/core';
import { AsyncValidator, AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  constructor() {}
  forbiddenUserNames=['dinesh','govind'] // this username will be not enter in input field
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData:new FormGroup({
        username: new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        email: new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails as AsyncValidatorFn),
      }),
      gender: new FormControl('male'),
      hobbies:new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value); //return forms value
    // })
    // this.signupForm.statusChanges.subscribe((status)=>{
    //   console.log(status); //PENDING VALID INVALID
    // })
    this.signupForm.setValue({
      userData:{
        username: 'Dinesh SIngh Mehra',
        email: 'dinesh@gmail.com',
      },
      gender: 'male',
      hobbies:[]
    })
    this.signupForm.patchValue({
      userData:{
        username: 'David',
      },
    })
  }
  onAddHobby(){
    const control=new FormControl(null, Validators.required);
    (<FormArray> this.signupForm.get('hobbies')).push(control)
  }

  get formControl(){
    return this.signupForm.get('hobbies') as FormArray
  }
  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset({
      userData:{
        username: '',
        email: '',
      },
      gender: 'male',
      hobbies:[]
    })
  }

  forbiddenNames(control:FormControl){
    if(this.forbiddenUserNames.indexOf(control.value)!==-1){
      return {'nameIsForbidden':true}
    }
    return null
  }

  //Reactive creating a custom async validator
  //takes 1500ms to check validation ---ng Pending --ngInvalid
  forbiddenEmails(control:FormControl):Promise<any> | Observable<any>{
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='test@test.com'){
          resolve({'emailIsForbidden':true})
        }else{
          resolve(null)
        }
      },1500)
    })
    return promise
  }
}
