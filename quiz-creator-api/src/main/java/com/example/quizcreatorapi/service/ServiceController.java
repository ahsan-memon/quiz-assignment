package com.example.quizcreatorapi.service;

import com.example.quizcreatorapi.model.Quiz;
import com.example.quizcreatorapi.repo.RepoAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceController {
    @Autowired
    RepoAccess ra;

    public Quiz save(Quiz q){

        return ra.save(q);
    }
}
