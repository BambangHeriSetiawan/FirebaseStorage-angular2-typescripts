import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
export const firebaseConfig = {
apiKey: "AIzaSyBc0mNgKNFhP-flnnOT3wPw7Vvv-cMrgtg",
    authDomain: "xxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxxx"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
