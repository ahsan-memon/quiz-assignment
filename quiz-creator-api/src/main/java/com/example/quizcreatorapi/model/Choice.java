package com.example.quizcreatorapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor @Entity @Data
public class Choice {
    @Id
    @GeneratedValue
    private Integer id;
    private String choice;
    private Boolean isCorrect;
}
