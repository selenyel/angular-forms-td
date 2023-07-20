import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('f') signupForm : NgForm;

  defaultQuestion = 'pet'; //value of the option
  answer = ''
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQust: '',
    answer: '',
    gender: ''
  }
  submitted = false

  suggestUserName() {
    const suggestedName = 'Superuser';

    //This is not a feasible solution
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!',form)
  //   // If we didn't do #f="ngForm" in the HTML code
  //   // Like if it was just a #f 
  //   // We would write 
  //   // onSubmit(form: HTMLFormElement) { ... }
  // }

  onSubmit(){
    this.submitted = true
    //console.log(this.signupForm)
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.gender = this.signupForm.value.gender
    this.user.secretQust = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.questionAnswer
  }
}
