import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import baseUrl from '../../services/helper';
import { error } from 'console';

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
  bmi:number= this.bmiGet();
  public bmiGet(){
    const weightInKg = parseFloat(this.weight);
    const heightInCm = parseFloat(this.height);
    const heightInM = heightInCm / 100; 
    return weightInKg / (heightInM * heightInM);
  }

  localMail:any=localStorage.getItem("userData");
  localMail1=this.localMail.email;


  public diseaseData={
    email:this.localMail1,
    disease:this.selectedDisease,
    height:this.height,
    weight:this.weight,
    bloodPressure:this.bloodPressure,
    sugar:this.sugarLevel,
    hba1c:this.hba1c,
    bmi:this.bmi,
    pefr:this.pefr

  }

  constructor(private http:HttpClient, private snack:MatSnackBar, private router:Router) { }

  submitForm(): void {

    this.http.post(`${baseUrl}/disease`,this.diseaseData).subscribe(
      (response)=>{
        console.log(response)
        this.snack.open("Disease Info updated!!!",'', {duration:3000})
      },
      (error)=>{
        console.log(error)
        this.snack.open("Something Went Wrong!!!",'', {duration:3000})
      }
    )
    
    // Determine which disease is selected and save relevant data in localStorage
    switch (this.selectedDisease) {
      case 'diabetes':
        localStorage.setItem('diabetesSugarLevel', this.sugarLevel);
        localStorage.setItem('diabetesHba1c', this.hba1c);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('height', this.height);
        break;
      case 'asthma':
        localStorage.setItem('asthmaPefr', this.pefr);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('height', this.height);
        break;
      case 'hypertension':
        localStorage.setItem('hypertensionBloodPressure', this.bloodPressure);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('height', this.height);
        break;
      default:
        break;


    }
    

    
  }
}
