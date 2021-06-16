package com.example.quizcreatorapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor @Entity @Data
public class Quiz {
    @Id @GeneratedValue
    private Integer id;
    private String title;
    private int points;
    private int time;
    private String deadline;

    @OneToMany(cascade = {CascadeType.ALL})
    Set<Question> questions;

}
