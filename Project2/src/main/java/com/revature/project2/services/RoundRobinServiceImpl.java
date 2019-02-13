package com.revature.project2.services;

import com.revature.project2.models.Events;
import com.revature.project2.models.LocalResults;
import com.revature.project2.models.Organizers;

import java.util.ArrayList;
import java.util.List;

public class RoundRobinServiceImpl implements RoundRobinService{
    @Override
    public List<LocalResults> tourneySetup() {
        return null;
    }

    @Override
    public Events tourneyStart(String description, Organizers organizer, List<LocalResults> participantList) {
        Events robin = new Events(organizer, participantList.size(), "Round Robin", description, true);
        return robin;
    }

    @Override
    public List<LocalResults> manualMatch(LocalResults participant1, LocalResults participant2) {
        List<LocalResults> matchup = new ArrayList<>();
        matchup.add(participant1);
        matchup.add(participant2);
        return matchup;
    }

    @Override
    public void matchResults(LocalResults participant, int wins, int losses) {
        participant.setLocal_wins(participant.getLocal_wins()+wins);
        participant.setLocal_losses(participant.getLocal_losses()+losses);
    }

    @Override
    public void finalResults(Events robin) {
        robin.setIn_Progress(false);
    }
}
