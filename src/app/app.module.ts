import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RouterComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourComponent } from './child/four/four.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterComponents,
    FourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
