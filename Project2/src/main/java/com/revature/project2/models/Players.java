package com.revature.project2.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table (name = "PLAYERS",schema = "PROJECT_2")
public class Players {
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int player_Id;

    @Column(name="FIRSTNAME")
    private String firstName;

    @Column(name="LASTNAME")
    private String lastName;

    @Column(name="CAREER_WINS")
    private int wins;

    @Column(name="CAREER_LOSSES")
    private int losses;

    @Column(name="CAREER_DRAWS")
    private int draws;


    public Players(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

//    @ManyToMany(cascade= CascadeType.ALL, fetch=FetchType.EAGER)
//    @JoinTable(name="ROSTER",
//            joinColumns = @JoinColumn(name="ID", referencedColumnName = "ID"),
//            inverseJoinColumns = @JoinColumn(name="ID", referencedColumnName = "ID"))
//    private Set <Events> events;

//    private Set<Players> playerRoster;

    public Players() {
    }

    @Override
    public String toString() {
        return "Players{" +
                "player_Id=" + player_Id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
