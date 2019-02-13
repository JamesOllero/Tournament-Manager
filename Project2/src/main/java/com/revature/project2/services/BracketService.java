package com.revature.project2.services;

import com.revature.project2.models.Events;
import com.revature.project2.models.LocalResults;
import com.revature.project2.models.Organizers;
import com.revature.project2.models.Players;

import java.util.List;

public interface BracketService {
    List<LocalResults> tourneySetup();
    Events tourneyStart(String description, Organizers organizer, List<LocalResults> participantList);
    List<LocalResults> singleElim(List<LocalResults> participantList);
    List<LocalResults> doubleElim();
    List<LocalResults> manualMatch(LocalResults participant1, LocalResults participant2);
    List<LocalResults> autoMatch(List<Players> participantList);
    void cull(List<LocalResults> participantList1, List<LocalResults> participantList2, int check);
    void freeWin(LocalResults participant);
    void freewinReset(List<LocalResults> participantList);
    void wonRound(LocalResults participant);
    void autoOddResolver(List<Players> pList);
    void matchResults(Players p1, Players p2);
}
