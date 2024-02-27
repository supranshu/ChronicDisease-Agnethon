package com.chronic.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.chronic.model.Doctor;
import com.chronic.model.User;
import com.chronic.model.WeeklyAnalysis;
import com.chronic.repo.DoctorRepo;
import com.chronic.repo.UserRepo;
import com.chronic.repo.WeeklyAnalysisRepo;

@Service
public class HomeService {
    private final BCryptPasswordEncoder encoder;
    private final DoctorRepo doctorRepo;
    private final UserRepo userRepo;
    private final WeeklyAnalysisRepo analysisRepo;

    @Autowired
    public HomeService(BCryptPasswordEncoder encoder, DoctorRepo doctorRepo, UserRepo userRepo, WeeklyAnalysisRepo analysisRepo) {
        this.encoder = encoder;
        this.doctorRepo = doctorRepo;
        this.userRepo = userRepo;
        this.analysisRepo = analysisRepo;
    } 

    public User userSignup(User user) {
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        System.out.println(user.getPassword());
        return userRepo.save(user);
    }
    public Doctor doctorSignup(Doctor user) {
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        System.out.println(user.getPassword());
        return doctorRepo.save(user);
    }
    
    public User userLogin(String email, String password) throws Exception {
        User user = userRepo.findByEmail(email);
        if (user != null && encoder.matches(password, user.getPassword())) {
            return user;
        }
        	throw new Exception("User Not Found"); 
    }

    public Doctor doctorLogin(String email, String password) {
        Doctor doctor = doctorRepo.findByEmail(email);
        if (doctor != null && encoder.matches(password, doctor.getPassword())) {
            return doctor;
        }
        return null; 
    }
    
    public WeeklyAnalysis putAnalysisOfUser(WeeklyAnalysis analysis) {
		
		return analysisRepo.save(analysis);
	}
    
    public List<WeeklyAnalysis> analysisOfUser(String username) {
    	List<WeeklyAnalysis> findByUsername = analysisRepo.findByUsername(username);
    	return findByUsername;
    }
    
    public User disease(User user) {
    	User user1 = userRepo.findByEmail(user.getEmail());
    	
    	user1.setDisease(user.getDisease());
    	user1.setBmi(user.getBmi());
    	user1.setHba1c(user.getHba1c());
    	user1.setPefr(user.getPefr());
    	user1.setSugar(user.getSugar());
    	
    	return userRepo.save(user1);
    	
    	
    }

    public List<Doctor> location(String city, String state, String country) {
        // First, try to find a doctor in the user's city
        List<Doctor> doctorsInCity = doctorRepo.findByCity(city);
        if (!doctorsInCity.isEmpty()) {
            
            return doctorsInCity;
        }

    
        List<Doctor> doctorsInState = doctorRepo.findByState(state);
        if (!doctorsInState.isEmpty()) {
            
            return doctorsInState;
        }

        // If no doctors found in the user's state, try to find a doctor in the user's country
        List<Doctor> doctorsInCountry = doctorRepo.findByCountry(country);
        if (!doctorsInCountry.isEmpty()) {
           
            return doctorsInCountry;
        }

        
        return null;
    }

	
}
