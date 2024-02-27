package com.chronic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronic.model.Doctor;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long> {

	Doctor findByEmail(String email);
	List<Doctor> findByCity(String city);
	List<Doctor> findByState(String state);
	List<Doctor> findByCountry(String country);
}
