package com.revature.project2.services;

import com.revature.project2.models.Events;
import com.revature.project2.models.LocalResults;
import com.revature.project2.models.Organizers;

import java.util.List;

public interface RoundRobinService {
    List<LocalResults> tourneySetup();
    Events tourneyStart(String description, Organizers organizer, List<LocalResults> participantList);
    List<LocalResults> manualMatch(LocalResults participant1, LocalResults participant2);
    void matchResults(LocalResults participant, int wins, int losses);
    void finalResults(Events robin);
}


