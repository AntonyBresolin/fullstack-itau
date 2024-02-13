package com.antonybresolin.backend.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotNull
    @Column(name = "first_name")
    private String firstName;

    @NotNull
    @Column(name = "last_name")
    private String lastName;

    @NotNull
    @Column(name = "participation")
    private Double participation;

    public User() {
    }

    public User(String firstName, String lastName, Double participation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.participation = participation;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Double getParticipation() {
        return participation;
    }
}
