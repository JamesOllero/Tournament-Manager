package com.revature.project2.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Table (name = "events",schema = "PROJECT_2")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Events {

    public Events() {
    }

    public Events(Organizers organizers, int playerNum, String eventType, String description, boolean in_Progress) {
        this.organizers = organizers;
        this.playerNum = playerNum;
        EventType = eventType;
        Description = description;
        this.in_Progress = in_Progress;
    }

    @Override
    public String toString() {
        return "Events{" +
                "id=" + id +
                ", organizers=" + organizers +
                ", playerNum=" + playerNum +
                ", EventType='" + EventType + '\'' +
                ", Description='" + Description + '\'' +
                ", in_Progress=" + in_Progress +
                '}';
    }

    @Id
    @Column(name = "evt_id" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;



    //    @OnDelete(set = null)
    @ManyToOne
    @JoinColumn(name = "ORGANIZER_ID")
    private Organizers organizers;
//    @Column(name="organizer_id")


//    private int organizer;

    @Column(name = "player_count")
    private int playerNum;

    @Column(name = "evt_type")
    private String EventType;

    @Column(name = "evt_desc")
    private String Description;

    @Column(name = "in_progress")
    private boolean in_Progress;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
//
//    public int getOrganizer() {
//        return organizer;
//    }
//
//    public void setOrganizer(int organizer) {
//        this.organizer = organizer;
//    }

    public int
    getPlayerNum() {
        return playerNum;
    }

    public void setPlayerNum(int playerNum) {
        this.playerNum = playerNum;
    }

    public String getEventType() {
        return EventType;
    }

    public void setEventType(String eventType) {
        EventType = eventType;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public boolean isIn_Progress() {
        return in_Progress;
    }

    public void setIn_Progress(boolean in_Progress) {
        this.in_Progress = in_Progress;
    }

    public Organizers getOrganizers() {
        return organizers;
    }

    public void setOrganizers(Organizers organizers) {
        this.organizers = organizers;
    }
}



