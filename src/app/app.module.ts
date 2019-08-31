import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RouterComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoComponent } from './child/two/two.component';



@NgModule({
  declarations: [
    AppComponent,
    RouterComponents,
    TwoComponent,
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
