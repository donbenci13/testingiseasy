import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { componentFactoryName } from '@angular/compiler';
import { SampletestServiceMock } from '../../services/mock/sample.service.mock';
import { SampletestService } from '../../services/sampletest.service';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from '../home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent,HomeComponent],
      imports: [RouterTestingModule.withRoutes([{
          path: 'home',
          component: HomeComponent
      }]), ReactiveFormsModule, HttpClientTestingModule],
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
        email: 'test@test.gov',
        password: 'aaa098@#_BB'
      },
      {
        email: 'aa098@gmail.net',
        password: 'test739ef@mailinAtor.com'
      }
    ]

    accounts.map(({ email, password }) => {
      loginSubmit(email, password);
      console.log({ email, isValid: component.formValid })
      expect(component.formValid).toBeTruthy();
    })
  })

  it("Login Failed due to Invalid Emails", () => {

    const accounts = [
      {
        email: 'test',
      },
      {
        email: 'test@gmail'
      },
      {
        email: 'testgmail!'
      },
      {
        email: 'testgmail!.com'
      },

    ]

    accounts.map(({ email }) => {
      loginSubmit(email, "P@ssword123");
      console.log({ email, isValid: component.formValid })
      expect(component.formValid).toBeFalsy();
    })
  })

  it("Login Failed due to Invalid Passwords", () => {
    // atleast 1 numbers
    // atleast 1 capitals
    // atleast 1 lower letters
    // atleast 1 any special character
    // min 8 characters
    const accounts = [
      {
        password: 'P@sswo1', // less than 8 char
      },
      {
        password: 'P@ssword', // no number
      },
      {
        password: 'Pssword123' // no special char
      },
      {
        password: 'p@ssword123' // no upper case
      },
      {
        password: 'P@SSWORD123' // no small case
      },
    ]

    accounts.map(({ password }) => {
      loginSubmit("test@gmail.com", password);
      console.log({ password, isValid: component.formValid })
      expect(component.formValid).toBeFalsy();
    })
  })

  it("submits with email and password", () => {
    // spyOn(component, 'onSubmit');
    loginSubmit("test@gmail.com", "P@ssword123");
    component.onSubmit()
    // expect(component.onSubmit).toHaveBeenCalled();
    console.log(component.user)
    expect(component.user).toEqual({
      email:"test@gmail.com", password:"P@ssword123"
    })
  })

  it("Successful login will redirect to home page",()=>{
     spyOn(component, 'redirectToHome');

     loginSubmit("test@gmail.com", "P@ssword123");
     component.onSubmit()
     expect(component.redirectToHome).toHaveBeenCalled()
  })

});







