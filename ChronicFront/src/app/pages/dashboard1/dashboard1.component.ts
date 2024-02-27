import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import baseUrl from '../../services/helper';


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

  localMail=localStorage.getItem("email");



  

  constructor(private http:HttpClient, private snack:MatSnackBar, private router:Router) { }

  submitForm(): void {
    // Determine which disease is selected and save relevant data in localStorage
    switch (this.selectedDisease) {
      case 'diabetes':
        localStorage.setItem("disease","diabetes")
        localStorage.setItem('diabetesSugarLevel', this.sugarLevel);
        localStorage.setItem('diabetesHba1c', this.hba1c);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('height', this.height);
        this.submitBack();
        break;
      case 'asthma':
        localStorage.setItem("disease","asthma")
        localStorage.setItem('asthmaPefr', this.pefr);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('height', this.height);
        this.submitBack();
        break;
      case 'hypertension':
        localStorage.setItem("disease","hypertension")
        localStorage.setItem('hypertensionBloodPressure', this.bloodPressure);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('height', this.height);
        this.submitBack();
        break;
      default:
        
        break;

        

    }

    
    }
    public diseaseData={
      email:this.localMail,
      disease:this.selectedDisease,
      height:this.height,
      weight:this.weight,
      bloodPressure:this.bloodPressure,
      sugar:this.sugarLevel,
      hba1c:this.hba1c,
      bmi:this.bmi,
      pefr:this.pefr
  
    }
    submitBack(){
      
    this.http.post(`${baseUrl}/disease`,this.diseaseData).subscribe(
      (response)=>{
        console.log(response)
        this.snack.open("Disease Info updated!!!",'', {duration:3000})
        this.router.navigateByUrl("/dashbaord2")
      },
      (error)=>{
        console.log(error)
        this.snack.open("Something Went Wrong!!!",'', {duration:3000})
      }
    )
  }
  }
  
