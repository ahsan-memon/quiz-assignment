package com.example.quizcreatorapi.repo;

import com.example.quizcreatorapi.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoAccess extends JpaRepository<Quiz, Integer> {

}
