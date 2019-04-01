import { Component } from '@angular/core';
import { SampletestService } from './services/sampletest.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts;
  constructor(private sampletestService : SampletestService){
    this.title = this.sampletestService.firstService()
  }

  public callService(){
    this.sampletestService.returnJsonPlaceHolder()
        .then(data=>{
          this.posts = data
        })
  }
}
