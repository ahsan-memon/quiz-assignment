package com.example.quizcreatorapi.service;

import com.example.quizcreatorapi.model.Question;
import com.example.quizcreatorapi.repo.RepoAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceController {
    @Autowired
    RepoAccess ra;

    public Question save(Question q){

        return ra.save(q);
    }
}
