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
  update_profile_url = "http://localhost:8000/candidate/api/profile/update/";
  public profiles: Message[] = [];
  public profile_slected: Message = {
  first_name: "",
  last_name: "",
  email: "",
  job_id: "",
  stage: "",
  id: 0,
  resume: "",
}
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
    // this.http.get(this.url,{params:{id:id_passed},}).subscribe((profiles: Message[]) => {
    //   console.log(JSON.stringify(profiles));
    //   let k = JSON.stringify(profiles);
    //   let final = JSON.parse(k);
    //   console.log("Parsered "+ final[0])
    //   this.profile_slected = final[0];
    //   return this.profile_slected[0]
    // });
    // return this.profile_slected[0];
  }

  public updateProfileStatus(status: String, id_profile: number){
   if (id_profile  && status){
    const body = {"stage":status};
    const headers = {
      "access-control-allow-origin": "http://localhost:8000/",
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
    }
    this.http.put<any>(`${this.update_profile_url}`+id_profile, body, {headers})
        .subscribe({
            next: data => {
                console.log("success "+data);
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });

   }
    
  }
}
