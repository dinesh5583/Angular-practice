import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('templateform') signupForm!: NgForm;
  defaultQuestion = 'pet';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secret:'',
    questionAnswer:'',
    gender:''
  }
  submitted=false;
  constructor() {}

  suggestUserName(){
    const suggestedName='Superuser';
    // NOT BEST APPROACH Because it will override our exist data
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  ngOnInit(): void {}

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted=true
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secret=this.signupForm.value.secret;
    this.user.questionAnswer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;
    this.signupForm.reset()
  }
}
