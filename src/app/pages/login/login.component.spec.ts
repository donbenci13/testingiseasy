import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { componentFactoryName } from '@angular/compiler';
import { SampletestServiceMock } from '../../services/mock/sample.service.mock';
import { SampletestService } from '../../services/sampletest.service';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: SampletestService, useValue: SampletestServiceMock }
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
  const loginSubmit = (email, password) => {
    component.loginForm.controls['email'].setValue(email);
    component.loginForm.controls['password'].setValue(password);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Valid Account", () => {

    const accounts = [
      {
        email: 'test@gmail.com',
        password: 'P@ssword123',
      },
      {
        email: 'test@test.com',
        password: 'aaa098@#_BB'
      },
      {
        email: 'aa098@gmail.com',
        password: 'test739ef@mailinator.com'
      }
    ]

    accounts.map(({ email, password }) => {
      loginSubmit(email, password);
      expect(component.formValid).toBeTruthy();
    })
  })

  it("Login Failed due to Invalid Emails", () => {

    const accounts = [
      {
        email: 'test',
        password: 'P@ssword123',
      },
      {
        email: 'test@gmail',
        password: 'P@ssword123'
      },
      {
        email: 'testgmail!',
        password: 'P@ssword123'
      },
      {
        email: 'testgmail!.com',
        password: 'P@ssword123'
      },
      
    ]

    accounts.map(({ email, password }) => {
      loginSubmit(email, password);
      console.log({email,isValid:component.formValid})
      expect(component.formValid).toBeFalsy();
    })
  })

});



// }

// const defaultprops = (component : LoginComponent) => {
//   expect(component.user).toEqual(blankUser);
// }

// const testEmailValidation = (component) => {
//   // test cases - testing for success
//   const validEmails = [
//     'test@test.com',
//     'test@test.co.uk',
//     'test734ltylytkliytkryety9ef@jb-fe.com'
//   ];

//   // test cases - testing for failure
//   const invalidEmails = [
//     'test@testcom',
//     'test@ test.co.uk',
//     'ghgf@fe.com.co.',
//     'tes@t@test.com',
//     'test.com',
//     ''
//   ];
//   for (let i in validEmails) {
//     console.info(validEmails[i] + " " + component.emailValidation(validEmails[i]))
//     expect(component.emailValidation(validEmails[i])).toBeTruthy()
//   }
//   for (let i in invalidEmails) {
//     console.info(invalidEmails[i] + " " + component.emailValidation(invalidEmails[i]))
//     expect(component.emailValidation(invalidEmails[i])).toBeFalsy()
//   }
// }

// const testPasswordValidation = (component)=>{
//   //To check a password between 8 to 20 characters which contain 
//   //at least one lowercase letter, one uppercase letter, one numeric digit, 
//   //and one special character

//   // test cases - testing for success
//   const validPassword = [
//     'PassWord00!!', // 12 char
//     'aaa098@#_BB', // 10 char
//     'aa098@#_B'   //  8 char
//   ];

//   // test cases - testing for failure
//   const invalidPassword = [
//     'test@testcomB', // no number
//     'test@ test.co.uk', // no uppercase
//     'AAA@.', // no lowercase
//     'tesAAAaaa2133214', // no special char
//     'test.com000000000000000', // more than 20 char
//     '1234!Aa', // 7 chars only
//     '', //empty string
//   ];

//   for (let i in validPassword) {
//     console.info(validPassword[i] + " " + component.passwordValidation(validPassword[i]))
//     expect(component.passwordValidation(validPassword[i])).toBeTruthy()
//   }
//   for (let i in invalidPassword) {
//     console.info(invalidPassword[i] + " " + component.passwordValidation(invalidPassword[i]))
//     expect(component.passwordValidation(invalidPassword[i])).toBeFalsy()
//   }

// }






