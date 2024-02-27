import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html', // Correct file name and path
  styleUrls: ['./dashboard1.component.css']
})

export class Dashboard1Component {
  selectedCondition: string = '';
  additionalInfo: any = {}; // Customize types later

  onSubmit(form: any) {
    // Access form values and additionalInfo properties
    const email = form.value.email;
    const password = form.value.password;
    const healthCondition = this.selectedCondition;
    const additionalData = this.additionalInfo;

    // Process the data (e.g., validation, store in service, send to server)
    console.log(email, password, healthCondition, additionalData);

    // Reset form and additional information
    form.reset();
    this.selectedCondition = '';
    this.additionalInfo = {};
  }
}
