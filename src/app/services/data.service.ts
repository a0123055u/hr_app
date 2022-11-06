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
  
  public messages: Message[] = [
    // {id: 1,first_name:"Ravi",last_name:"Teja","email":"ravi_teja@mailinator.com",stage:"rejected",job_id:"045dbe33-0ea9-47b1-9e49-2a91caf15327"},{id:2,first_name:"Shu",last_name:"fong","email":"shu_fong@mailinator.com",stage:"rejected",job_id:"045dbe33-0ea9-47b1-9e49-2a91caf15327"},{id:3,first_name:"Rajeev",last_name:"Sekar","email":"rajeev_sekar@mailinator.com",stage:"rejected",job_id:"f69d784f-1b1c-40b5-a8ca-e976fe316821"},{id:4,first_name:"thiru",last_name:"valluva","email":"thiru@mailinator.com",stage:"rejected",job_id:"f69d784f-1b1c-40b5-a8ca-e976fe316821"},{id:7,first_name:"Akshaya Baalan",last_name:"Thiruvalluvan","email":"m.thiruvalluvar@gmail.com",stage:"rejected_by_candidate",job_id:"045dbe33-0ea9-47b1-9e49-2a91caf15327"},{id:8,first_name:"Gowtham",last_name:"Renganathan","email":"gutz@mailinator.com",stage:"rejected_by_candidate",job_id:"f69d784f-1b1c-40b5-a8ca-e976fe316821"},{id:9,first_name:"test applicant",last_name:"test test","email":"test@mailinator.com",stage:"rejected_by_candidate",job_id:"045dbe33-0ea9-47b1-9e49-2a91caf15327"},{id:10,first_name:"ramesh",last_name:"kumar","email":"ramesh_kumar@gmail.com",stage:"rejected_by_candidate",job_id:"045dbe33-0ea9-47b1-9e49-2a91caf15327"},{id:11,first_name:"gajaraj",last_name:"sekar","email":"gj@yahoo.com.sh",stage:"rejected_by_candidate",job_id:"f69d784f-1b1c-40b5-a8ca-e976fe316821"},{id:12,first_name:"Thiruvalluvan",last_name:"Murugesan","email":"m.thiruvalluvar@gmail.com",stage:"rejected_by_company",job_id:"1d27b396-3467-4680-88c5-d139a29c3abb"}
    // {
    //   first_name: 'Matt Chorsey',
    //   subject: 'New event: Trip to Vegas',
    //   date: '9:32 AM',
    //   id: 0,
    //   read: false
    // },
    // {
    //   fromName: 'Lauren Ruthford',
    //   subject: 'Long time no chat',
    //   date: '6:12 AM',
    //   id: 1,
    //   read: false
    // },
    // {
    //   fromName: 'Jordan Firth',
    //   subject: 'Report Results',
    //   date: '4:55 AM',
    //   id: 2,
    //   read: false
    // },
    // {
    //   fromName: 'Bill Thomas',
    //   subject: 'The situation',
    //   date: 'Yesterday',
    //   id: 3,
    //   read: false
    // },
    // {
    //   fromName: 'Joanne Pollan',
    //   subject: 'Updated invitation: Swim lessons',
    //   date: 'Yesterday',
    //   id: 4,
    //   read: false
    // },
    // {
    //   fromName: 'Andrea Cornerston',
    //   subject: 'Last minute ask',
    //   date: 'Yesterday',
    //   id: 5,
    //   read: false
    // },
    // {
    //   fromName: 'Moe Chamont',
    //   subject: 'Family Calendar - Version 1',
    //   date: 'Last Week',
    //   id: 6,
    //   read: false
    // },
    // {
    //   fromName: 'Kelly Richardson',
    //   subject: 'Placeholder Headhots',
    //   date: 'Last Week',
    //   id: 7,
    //   read: false
    // }
  ];

  constructor(private http: HttpClient) { }

  public searchData(){

  //  return this.http.get(`${this.url}`);
   this.http.get(`${this.url}`).subscribe(result => {
      console.log(JSON.stringify(result));
      return JSON.stringify(result);
    // console.log(x);
});
  }
  getDetails(id: any) {
    return this.http.get(`${this.url}&id=${id}`);
  }

  public getMessages() {
    console.log(this.searchData())
    return this.searchData();    
  }
 
  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
