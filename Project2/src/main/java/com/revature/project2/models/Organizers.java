package com.revature.project2.models;

import javax.persistence.*;

@Entity
@Table (name = "ORGANIZERS",schema = "PROJECT_2")

public class Organizers {

    public Organizers() {
    }

    public Organizers(String username, String password, String email) {
        Username = username;
        this.password = password;
        this.email = email;
    }

    @Id
    @Column(name ="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int ManagerId;

    @Column (name ="USERNAME",nullable=false)
    String Username;

    @Column (name ="PASSWORD",nullable=false)
    String password;

    @Column (name ="EMAIL",nullable=false)
    String email;

    @Override
    public String toString() {
        return "Organizers{" +
                "ManagerId=" + ManagerId +
                ", Username='" + Username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
