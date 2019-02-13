package com.revature.project2.services;

import com.revature.project2.models.Events;
import com.revature.project2.models.LocalResults;
import com.revature.project2.models.Organizers;
import com.revature.project2.models.Players;

import java.util.ArrayList;
import java.util.List;

public class BracketServiceImpl implements BracketService{
    @Override
    public List<LocalResults> tourneySetup() {
        return null;
    }

    @Override
    public Events tourneyStart(String description, Organizers organizer, List<LocalResults> participantList) {
        Events elimination = new Events(organizer, participantList.size(), "Elimination", description, true);
        return elimination;
    }

    @Override
    public List<LocalResults> singleElim(List<LocalResults> participantList, Events elimination) {
        List<LocalResults> winners= new ArrayList<>();
        winners.addAll(participantList);
        elimination.setEventType("Single elimination");
        return winners;
    }

    @Override
    public List<LocalResults> doubleElim(Events elimination) {
        List<LocalResults> losers = new ArrayList<>();
        elimination.setEventType("Double Elimination");
        return losers;
    }

    @Override
    public List<LocalResults> manualMatch(LocalResults participant1, LocalResults participant2) {
        return null;
    }

//    @Override
//    public List<LocalResults> autoMatch(List<Players> participantList) {
//        return null;
//    }

    @Override
    public void cull(List<LocalResults> participantList1, List<LocalResults> participantList2, int check) {
        for (LocalResults p:participantList1){
            if(p.getLocal_losses() >= check){
                participantList2.add(p);
            }
            participantList1.removeAll(participantList2);
        }
    }

//    @Override
//    public void freeWin(LocalResults participant) {
//
//    }
//
//    @Override
//    public void freewinReset(List<LocalResults> participantList) {
//
//    }
//
//    @Override
//    public void wonRound(LocalResults participant) {
//
//    }
//
//    @Override
//    public void autoOddResolver(List<Players> pList) {
//
//    }

    @Override
    public void matchResults(LocalResults participant, int wins, int losses) {
        participant.setLocal_wins(wins);
        participant.setLocal_losses(losses);
    }


    @Override
    public void finalResults(Events elimination){
        elimination.setIn_Progress(false);
    }
}
