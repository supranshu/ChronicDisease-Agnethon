
import { Component } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI("AIzaSyBboXOV-pXbZEL3LLkfoISXCvPKbpXjPns");
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
  
  // Replace with your actual API key and model parameters
  apiKey = 'AIzaSyBboXOV-pXbZEL3LLkfoISXCvPKbpXjPns';
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
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = this.userInput;
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
