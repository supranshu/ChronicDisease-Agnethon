package com.chronic.service;
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
    
    public WeeklyAnalysis analysisOfUser(String username) {
    	WeeklyAnalysis report=analysisRepo.findByUsername(username);
    	return report;
    }

	
}
