package com.revature.project2.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table (name = "PLAYERS",schema = "PROJECT_2")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Players {


    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int player_Id;

    @Column(name="FIRST_NAME")
    private String firstName;

    @Column(name="LAST_NAME")
    private String lastName;

    @Column(name="CAREER_WINS")
    private int wins;

    @Column(name="CAREER_LOSSES")
    private int losses;

    @Column(name="CAREER_DRAWS")
    private int draws;

    public Players(String firstName, String lastName, int wins, int losses, int draws) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wins = wins;
        this.losses = losses;
        this.draws = draws;
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

    public int getPlayer_Id() {
        return player_Id;
    }

    public void setPlayer_Id(int player_Id) {
        this.player_Id = player_Id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getLosses() {
        return losses;
    }

    public void setLosses(int losses) {
        this.losses = losses;
    }

    public int getDraws() {
        return draws;
    }

    public void setDraws(int draws) {
        this.draws = draws;
    }
}
