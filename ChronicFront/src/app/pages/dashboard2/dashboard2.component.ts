
import { Component } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI("AIzaSyDAxDhxSjjAmTE4a9Xuxl6cnDOs7y8gaws");
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
  
  // Replace with your actual API key and model parameters
  apiKey = 'AIzaSyDAxDhxSjjAmTE4a9Xuxl6cnDOs7y8gaws';
  model = 'gemini-pro';
  parameters = {
    safetySettings: 'MEDIUM',
    temperature: 0.7,
    top_p: 0.9,
    top_k: 20,
    maxOutputTokens: 100
  };

  // Create a variable to store user input and response
  userInput = '';
  response = '';
  rexp='';
  
  name = localStorage.getItem('username');
  disease = localStorage.getItem('disease');
  diabetesSugarLevel = localStorage.getItem('diabetesSugarLevel');
  diabetesHbA1c = localStorage.getItem('diabetesHbA1c');
  height =  localStorage.getItem('height');
  weight =  localStorage.getItem('weight');
  asthmaPefr = localStorage.getItem('asthmaPefr');
  hypertensionBloodPressure = localStorage.getItem('hypertensionBloodPressure');
  chatCommand = '';

  getCurrentTime(): string {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const meridian = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Convert single-digit hours to 2-digit format
    const hoursStr = hours.toString().padStart(2, '0');

    return `${hoursStr}:${minutes} ${meridian}`;
  }

  async sendRequest(): Promise<void> {
    if (!this.userInput) {
      return; // Handle empty input scenarios
    }

    try {

      if (this.disease === 'diabetes') {
        this.chatCommand = `${this.name} Patient has diabetes. Sugar level: ${this.diabetesSugarLevel}, HbA1c: ${this.diabetesHbA1c}. Height: ${this.height}, Weight: ${this.weight}. what precautions need to be taken? give info in bullet points in english`;
      } else if (this.disease === 'hypertension') {
        this.chatCommand = `${this.name} Patient has hypertension. Blood pressure: ${this.hypertensionBloodPressure}. Height: ${this.height}, Weight: ${this.weight}. what precautions need to be taken? give info in bullet points in english`;
      } else if (this.disease === 'asthma') {
        this.chatCommand = `${this.name} Patient has asthma. PEFR: ${this.asthmaPefr}. Height: ${this.height}, Weight: ${this.weight}. what precautions need to be taken? give info in bullet points in english`;
      }
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = this.chatCommand;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    this.rexp = text;
    console.log(text);
    } catch (error) {
      console.error('Error sending request to Gemini:', error);
      // Update response with error message or default text
      this.response = 'Error: Unable to process your request.';
    } finally {
      // Update response even if request fails
      this.response = 'Sending request...'; // Or provide interim message
    }
  }

  async run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = this.userInput;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    this.rexp = text;
    console.log(text);
  }
  
  ngOnInit() {
    this.run();
  }
}
