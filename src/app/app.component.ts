import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-forms';
 

  rForm: FormGroup;
  rForm2: FormGroup;
  post:any;
  post2:any;
  name: string='';
  lname: string='';
  email: string='';
  phone: string;
  password : string='';
  description:string ='';
  checkin: Date;
  checkout: Date;
  bankName: string='';
  holderName:string='';
  cardNo:string;
  cvv:string;
  exDate: Date;



  constructor(private fb: FormBuilder)
  {
    this.rForm =fb.group({
      'name':[null, [Validators.required,Validators.minLength(2)]],
    'lname': [null, [Validators.required,Validators.minLength(2)]],
    'email': [null, Validators.required,Validators.minLength(2),Validators.required],
    'phone': [null, [Validators.required,Validators.minLength(10)]],
    'password': [null, Validators.required],
    'description':[null, Validators.compose([Validators.required, Validators.minLength(30),Validators.maxLength(200)])],
    'validate' : '',
    'checkin':[null, this.expiryDateValidator],
    'checkout':[null, Validators.required],

    'bankName':[null,Validators.required],
    'holderName':[null,Validators.required],
    'cardNo':[null, Validators.compose([Validators.required, Validators.minLength(16),Validators.maxLength(16)])],
    'cvv':[null, Validators.compose([Validators.required, Validators.minLength(1),Validators.maxLength(3)])],
    'exDate':[null,Validators.required]

    });

  }
  


  expiryDateValidator( control: AbstractControl )
    {
      if(control)
      {
       const group= <FormGroup> control.root.get('rForm');
       if(group){
         const addControl = group.controls.checkin;
          if(addControl)
          {
            if(addControl.value ==='checkin')
            {
              if(control.value ==null || control.value === undefined ||control.value === '')
              {
                return {'date error': 'Date can not be blank!'}
              }
            }

          }
       }
      }
      return null;
    }

    addPost(post)
    {
      this.name =post.name;
      this.lname =post.lname;
      this.email = post.email;
      this.phone = post.phone;
      this.password = post.password;
      this.description= post.description;
      this.bankName=post.bankName;
      this.cvv=post.cvv;
      this.holderName=post.holderName;
      this.cardNo=post.cardNo;
      this.exDate=post.exDate;
      this.checkin=post.checkin;
      this.checkout=post.checkout;
    }
    
}

