package com.example.quizcreatorapi.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor @Entity @Data
public class Question{

    @Id
    @GeneratedValue
    private Integer id;
    private String description;
    private int marks;
    //0 for single choice. for multi-choice
    private Boolean type;
    //Remaining: choices
}