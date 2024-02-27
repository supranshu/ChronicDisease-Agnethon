import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {
  selectedDisease: string = 'diabetes';
  sugarLevel: string = '';
  hba1c: string = '';
  pefr: string = ''; 
  bloodPressure: string = '';
  weight: string = '';
  height: string = '';

  constructor() { }

  submitForm(): void {
    // Use the form values here for Gemini API call or any other operation
    console.log('Form submitted');
    console.log('Selected Disease:', this.selectedDisease);
    console.log('Sugar Level:', this.sugarLevel);
    console.log('HbA1c:', this.hba1c);
    console.log('PEFR:', this.pefr);
    console.log('Blood Pressure:', this.bloodPressure);
    console.log('Weight:', this.weight);
    console.log('Height:', this.height);
  }
}
