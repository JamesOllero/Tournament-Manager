package com.revature.project2.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

public class EventsDTO {

    public EventsDTO() {
    }

    public EventsDTO(OrganizersDTO organizers, int playerNum, String eventType, String description, boolean in_Progress) {
        this.organizers = organizers;
        this.playerNum = playerNum;
        EventType = eventType;
        Description = description;
        this.in_Progress = in_Progress;
    }

    @Override
    public String toString() {
        return "EventsDTO{" +
                "id=" + id +
                ", organizers=" + organizers +
                ", playerNum=" + playerNum +
                ", EventType='" + EventType + '\'' +
                ", Description='" + Description + '\'' +
                ", in_Progress=" + in_Progress +
                '}';
    }

    private int id;

    private OrganizersDTO organizers;

    private int playerNum;

    private String EventType;

    private String Description;

    private boolean in_Progress;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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


}



