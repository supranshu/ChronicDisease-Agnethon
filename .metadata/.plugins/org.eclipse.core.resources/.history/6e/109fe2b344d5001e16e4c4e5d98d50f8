package com.chronic.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronic.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

	User findByUsername(String username);
	User findByCity(String city);
	User findByState(String state);
}
