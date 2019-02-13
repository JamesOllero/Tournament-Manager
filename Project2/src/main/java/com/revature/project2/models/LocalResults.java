package com.revature.project2.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "LOCAL_RESULTS",schema = "PROJECT_2")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LocalResults {
    @Id
    @Column(name = "lr_id" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int participantId;
    @Column(name = "evt_id" )
    private int eventId;
    @Column(name = "plr_id" )
    private int playerId;
    @Column(name = "local_wins" )
    private int local_wins=0;
    @Column(name = "local_losses" )
    private int local_losses=0;
    @Column(name = "local_draws")
    private int local_draws=0;

    @Override
    public String toString() {
        return "LocalResults{" +
                "participantId=" + participantId +
                ", playerId=" + playerId +
                ", local_wins=" + local_wins +
                ", local_losses=" + local_losses +
                ", local_draws=" + local_draws +
                '}';
    }

    public LocalResults(int eventId, int playerId) {
        this.eventId = eventId;
        this.playerId = playerId;
    }

    public int getParticipantId() {
        return participantId;
    }

    public void setParticipantId(int participantId) {
        this.participantId = participantId;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public int getLocal_wins() {
        return local_wins;
    }

    public void setLocal_wins(int local_wins) {
        this.local_wins = local_wins;
    }

    public int getLocal_losses() {
        return local_losses;
    }

    public void setLocal_losses(int local_losses) {
        this.local_losses = local_losses;
    }

    public int getLocal_draws() {
        return local_draws;
    }

    public void setLocal_draws(int local_draws) {
        this.local_draws = local_draws;
    }
}
