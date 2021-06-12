package com.example.quizcreatorapi.control;

import com.example.quizcreatorapi.model.Question;
import com.example.quizcreatorapi.service.ServiceController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    ServiceController sc;
    @PostMapping("/Questions")
    public Question saveQuestion(@RequestBody Question q){
        return sc.save(q);
    }

}
