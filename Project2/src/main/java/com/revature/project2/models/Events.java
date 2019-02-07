package com.revature.project2.models;

import javax.persistence.*;

@Entity
@Table (name = "EVENTS",schema = "PROJECT_2")
public class Events {

    public Events() {
    }



    @Id
    @Column(name = "ID" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "ID",insertable=false, updatable=false)
    private Organizers organizer;


    @Column(name = "PLAYER_COUNT")
    private int playerNum;

    @Column(name = "EVENT_TYPE")
    private String EventType;

    @Column(name = "EVENT_DESC")
    private String Description;

    @Column(name = "IN_PROGRESS")
    private boolean in_Progress;

    public Events(Organizers organizer, int playerNum, String eventType, String description, boolean in_Progress) {
        this.organizer = organizer;
        this.playerNum = playerNum;
        EventType = eventType;
        Description = description;
        this.in_Progress = in_Progress;
    }

    @Override
    public String toString() {
        return "Events{" +
                "id=" + id +
                ", organizer=" + organizer +
                ", playerNum=" + playerNum +
                ", EventType='" + EventType + '\'' +
                ", Description='" + Description + '\'' +
                ", in_Progress=" + in_Progress +
                '}';
    }
}



