package com.chronic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronic.model.WeeklyAnalysis;

@Repository
public interface WeeklyAnalysisRepo extends JpaRepository<WeeklyAnalysis, Long> {
	
	List<WeeklyAnalysis> findByUsername(String username);

}
