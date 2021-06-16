package com.example.quizcreatorapi.control;

import com.example.quizcreatorapi.model.Quiz;
import com.example.quizcreatorapi.service.ServiceController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {

    @Autowired
    ServiceController sc;
    @PostMapping("/Quiz")
    public Quiz saveQuiz(@RequestBody Quiz q){
        return sc.save(q);
    }

}
