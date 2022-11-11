import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: Message;
  public statusSelected:any; 
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Testing==========="+id);
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
  currentStatus = undefined;
  statuses = [
    {
      id: 1,
      name: 'PENDING',
      type: 'status',
      value: 'pending',
    },
    {
      id: 2,
      name: 'REVIEWING',
      type: 'status',
      value: 'reviewing',
    },
    {
      id: 3,
      name: 'SHORTLISTED',
      type: 'status',
      value: 'shortlisted',
    },
    {
      id: 4,
      name: 'INTERVIEWING',
      type: 'status',
      value: 'interviewing'
    },
    {
      id: 5,
      name: 'ADVANCED INTERVIEWING',
      type: 'status',
      value: 'advanced_interviewing'
    },
    {
      id: 6,
      name: 'REJECTED BY COMPANY',
      type: 'status',
      value: 'rejected_by_company'
    },
    {
      id: 7,
      name: 'OFFERED',
      type: 'status',
      value: 'offered'
    },
    {
      id: 8,
      name: 'HIRED',
      type: 'status',
      value: 'hired'
    },
    {
      id: 9,
      name: 'ON HOLD',
      type: 'status',
      value: 'on_hold'
    },

  ];

  compareWith(o1, o2) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.currentStatus = ev.target.value;
    let status_payload = JSON.stringify(ev.target.value);
    console.log("ev.target.value"+status_payload);
    //TODO - put request of value from json 
    this.data.updateProfileStatus("on_hold", 17);
    
  }
}

  // 

  

