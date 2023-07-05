import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onFormSubmit(formData: any) {
    // Process the form data here, e.g., send it to the server or display it
    console.log(formData);
  }
}
