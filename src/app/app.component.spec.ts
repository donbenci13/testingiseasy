import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SampletestService } from './services/sampletest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SampletestServiceMock } from './services/mock/sample.service.mock';
import {RouterTestingModule} from '@angular/router/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[SampletestService],
      imports:[HttpClientModule,HttpClientTestingModule,RouterTestingModule]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`CLASS: should have as title 'Hello'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Hello');
  // }));
  // it('DOM: should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Hello!');
  // }));
  // it('DOM: should render 3 item on list', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   console.log(compiled.querySelectorAll('#menu > li').length)
  //   expect(compiled.querySelectorAll('#menu > li').length).toEqual(3);
  // }));
  
});

// describe('fake service test',()=>{
//   let comp : AppComponent
//   let fixture: ComponentFixture<AppComponent>
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//       providers:[{provide:SampletestService,useClass:SampletestServiceMock}],
//       imports:[HttpClientModule,HttpClientTestingModule]
//     }).compileComponents().then(()=>{
//       fixture = TestBed.createComponent(AppComponent);
//       comp = fixture.debugElement.componentInstance;
//     });
//   }));
//   it(`Class: Should get 10 responses`, async(()=>{
    
//     const fakedFetchedList = [
//      1,2,3,4,5,6,7,8,9,0
//     ];
//     const sampletestService = fixture.debugElement.injector.get(SampletestService);
//     let spy = spyOn(sampletestService, "returnJsonPlaceHolder").and.returnValue(
//       Promise.resolve(fakedFetchedList)
//     );
//     comp.callService()
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       expect(comp.posts.length).toEqual(10);
//     });
//   }))
// })
