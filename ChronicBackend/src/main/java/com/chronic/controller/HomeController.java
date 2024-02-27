package com.chronic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chronic.model.Doctor;
import com.chronic.model.User;
import com.chronic.model.WeeklyAnalysis;
import com.chronic.service.HomeService;

@RestController
@RequestMapping("/chronic") 
@CrossOrigin("*")
public class HomeController {
	
	@Autowired
	private HomeService service;
	
	@PostMapping("/user-signup")
	public User postUserSign(@RequestBody User user) {
		
		return service.userSignup(user);
	}
	@PostMapping("/doctor-signup")
	public Doctor postDoctorSign(@RequestBody Doctor user) {
		
		return service.doctorSignup(user);
	}
	
	@GetMapping("/user-login/{email}/{password}")
	public User getUserLogin(@PathVariable("email")String  email,@PathVariable("password") String password) throws Exception {
		
		return service.userLogin(email, password);
		
	}
	@GetMapping("/doctor-login/{email}/{password}")
	public Doctor getDoctorLogin(@PathVariable("email")String  email,@PathVariable("password") String password) {
		
		return service.doctorLogin(email, password);
	}
	
	@PostMapping("/weekly")
	public WeeklyAnalysis postWeeklyAnalysis(@RequestBody WeeklyAnalysis analysis) {
		return service.putAnalysisOfUser(analysis);
	}
	
	@GetMapping("/weekly/{username}")
	public List<WeeklyAnalysis> getWeeklyAnalysis(@PathVariable("username")String username) {
		return service.analysisOfUser(username);
	}
	
	
	@PostMapping("/disease")
	public User postDisease(@RequestBody User user) {
		
		return service.disease(user);
	}
	
	@GetMapping("/match-location/{city}/{state}/{country}")
	public List<Doctor> getLocation(@PathVariable("city")String city,@PathVariable("state")String state,@PathVariable("country")String country) {
		
		return service.location(city,state,country);
		
	}
	
	@GetMapping("/all-users")
	public List<User> getAllUsers(){
		return service.allUsers();
	}
	

}
