import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, HttpClientModule],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class MessageComponentModule {}
