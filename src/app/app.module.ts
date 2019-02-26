import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { ReminderComponent } from './reminder/reminder.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [ /// dich: khai bao
    AppComponent,
    HeaderComponent,
    NoteComponent,
    ReminderComponent,
    HeroesComponent
  ],
  imports: [ /// khai nhap
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 