import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { componentFactoryName } from '@angular/compiler';
import { SampletestServiceMock } from '../../services/mock/sample.service.mock';
import { SampletestService } from '../../services/sampletest.service';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[RouterTestingModule,ReactiveFormsModule,HttpClientTestingModule],
      providers:[ 
        { provide: FormBuilder, useValue: formBuilder },
        { provide:SampletestService , useValue: SampletestServiceMock }
      ]
    })
    .overrideComponent(LoginComponent, {
      set: {
        providers: [
          { provide: SampletestService, useClass: SampletestServiceMock },
        ]
      }
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        
      });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it("Email format validation",()=>testEmailValidation(component))

  // it("Password format validation : [8 to 20 char] [at least one lowercase and uppercase letter] [one number] [one special char]",()=>{
  //   testPasswordValidation(component)
  // })
  it("Submits login form",()=>loginSubmit(component))
});

const testEmailValidation = (component) => {
  // test cases - testing for success
  const validEmails = [
    'test@test.com',
    'test@test.co.uk',
    'test734ltylytkliytkryety9ef@jb-fe.com'
  ];

  // test cases - testing for failure
  const invalidEmails = [
    'test@testcom',
    'test@ test.co.uk',
    'ghgf@fe.com.co.',
    'tes@t@test.com',
    'test.com',
    ''
  ];
  for (let i in validEmails) {
    console.info(validEmails[i] + " " + component.emailValidation(validEmails[i]))
    expect(component.emailValidation(validEmails[i])).toBeTruthy()
  }
  for (let i in invalidEmails) {
    console.info(invalidEmails[i] + " " + component.emailValidation(invalidEmails[i]))
    expect(component.emailValidation(invalidEmails[i])).toBeFalsy()
  }
}

const testPasswordValidation = (component)=>{
  //To check a password between 8 to 20 characters which contain 
  //at least one lowercase letter, one uppercase letter, one numeric digit, 
  //and one special character
 
  // test cases - testing for success
  const validPassword = [
    'PassWord00!!', // 12 char
    'aaa098@#_BB', // 10 char
    'aa098@#_B'   //  8 char
  ];

  // test cases - testing for failure
  const invalidPassword = [
    'test@testcomB', // no number
    'test@ test.co.uk', // no uppercase
    'AAA@.', // no lowercase
    'tesAAAaaa2133214', // no special char
    'test.com000000000000000', // more than 20 char
    '1234!Aa', // 7 chars only
    '', //empty string
  ];

  for (let i in validPassword) {
    console.info(validPassword[i] + " " + component.passwordValidation(validPassword[i]))
    expect(component.passwordValidation(validPassword[i])).toBeTruthy()
  }
  for (let i in invalidPassword) {
    console.info(invalidPassword[i] + " " + component.passwordValidation(invalidPassword[i]))
    expect(component.passwordValidation(invalidPassword[i])).toBeFalsy()
  }

}

const loginSubmit = (component)=>{
  component.loginForm.controls.email.setValue("test@test.com")
  component.loginForm.controls.password.setValue("PassWord00!!")
  
  
  expect(component.onSubmit()).toBeTruthy()
}




