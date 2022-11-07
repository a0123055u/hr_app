import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';

export interface Message {
  first_name: string;
  last_name: string;
  email: string;
  job_id: string;
  stage: string;
  id: number;
  resume: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://127.0.0.1:8000/candidate/api/profile?format=json';
  public profiles: Message[] = [];
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((profiles: Message[]) => {
      console.log(JSON.stringify(profiles));
      let k = JSON.stringify(profiles);
      let final = JSON.parse(k);
      console.log("Parsered "+ final)
      this.profiles = final;
    });
   }
   public getMessages(): Message[] {
        return this.profiles;
   }
 
  public getMessageById(id_passed: number): Message {
    console.log("===========", this.profiles, id_passed)
    for (let i = 0; i <  this.profiles.length; i++) {
      console.log ("Block statement execution no." + this.profiles[i].id);
      if(Number(this.profiles[i].id)==id_passed){
        console.log("Matched"+id_passed)
        return this.profiles[i];
      }
    }
    return this.profiles[0];
  }
}
