package com.revature.project2.services;

import com.revature.project2.models.Events;
import com.revature.project2.models.Players;

import java.util.List;

public interface BracketService {
    Events finalResults();
    List<Players> singleElim(List<Players> pList);
    List<Players> doubleElim();
    List<Players> manualMatch(Players p1, Players p2);
    List<Players> autoMatch(List<Players> pList);
    void cull(List<Players> pList1, List<Players> pList2, int check);
    void freeWin(Players p);
    void freewinReset(List<Players> pList);
    void wonRound(Players p);
    void autoOddResolver(List<Players> pList);
    void matchResults(Players p1, Players p2);
}
