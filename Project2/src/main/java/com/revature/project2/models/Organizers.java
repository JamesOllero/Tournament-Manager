package com.revature.project2.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table (name = "ORGANIZERS",schema = "PROJECT_2")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Organizers {

    public Organizers() {
    }

    public Organizers(String username, String password, String email) {
        Username = username;
        this.password = password;
        this.email = email;
    }

    public int getManagerId() {
        return ManagerId;
    }

    public void setManagerId(int managerId) {
        ManagerId = managerId;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
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
