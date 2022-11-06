import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Message } from '../services/data.service';
import { concatMap, map, merge, switchMap} from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  profiles: Message[] = [];
  constructor(private http: HttpClient) {

    this.http.get('http://127.0.0.1:8000/candidate/api/profile?format=json').subscribe((profiles: Message[]) => {
      // console.log(JSON.stringify(result));
      console.log(JSON.stringify(profiles));
      let k = JSON.stringify(profiles);
      let final = JSON.parse(k);
      console.log("Parsered "+ final)
      this.profiles = final;
  })
};
   
    
    
  
//   loadCandidate(): Message[] {
//     // this.http.get('http://127.0.0.1:8000/candidate/api/profile?format=json').subscribe((profiles: Message[]) => {
//     //   // console.log(JSON.stringify(result));
//     //   console.log(JSON.stringify(profiles));
//     //   let k = JSON.stringify(profiles);
//     //   let final = JSON.parse(k);
//     //   console.log("Parsered "+ final)
//     //   this.profiles = final;
//   });
//   return []
// }

//   getMessages(): Message[] {
//     this.loadCandidate();
//     console.log("====================="+this.profiles);
//     return this.profiles;
  
//   };
    

    
  }


