import { Component,ElementRef, Input, Renderer } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isUploadBtn= true ;
  public TheFileContents:any;
   items: FirebaseListObservable<any[]>;
constructor(
  public af:AngularFire,
  public el:ElementRef
){
  this.items = af.database.list('/items');
}
fileChange(event:any){

let filelist :FileList = event.target.files;
if(filelist.length>0){
      var metadata = {
      contentType: 'image/jpeg'
    };
    let file : File = filelist[0];
    console.log(file.name);
    var storageRef = firebase.storage().ref();
     var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.message) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;


    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  var downloadURL = uploadTask.snapshot.downloadURL;

});
  
}
window.location.reload();
}
}
