package com.chronic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronic.model.Appoint;

@Repository
public interface AppointRepo extends JpaRepository<Appoint, Long> {
	
	List<Appoint> findByDocName(String docName);
	List<Appoint> findByUsername(String userame);

}
