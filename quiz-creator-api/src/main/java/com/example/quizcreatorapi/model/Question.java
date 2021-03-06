package com.example.quizcreatorapi.model;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.awt.*;
import java.util.Set;

@NoArgsConstructor @Entity @Data
public class Question{

    @Id
    @GeneratedValue
    private Integer id;
    private String question;
    private String type;
    private int points;

    @OneToMany(cascade = {CascadeType.ALL})
    Set<Choice> choices;
}