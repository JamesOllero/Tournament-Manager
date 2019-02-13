package com.revature.project2.services;

import com.revature.project2.models.Events;
import com.revature.project2.models.Players;

import java.util.ArrayList;
import java.util.List;

public class BracketServiceImpl implements BracketService{
    @Override
    public Events finalResults() {
        return null;
    }

    @Override
    public List<Players> singleElim(List<Players> pList) {
        List<Players> winners = new ArrayList<>();
        winners.addAll(pList);
        return winners;
    }

    @Override
    public List<Players> doubleElim() {
        List<Players> losers = new ArrayList<>();
        return losers;
    }

    @Override
    public List<Players> manualMatch(Players p1, Players p2) {
        return null;
    }

    @Override
    public List<Players> autoMatch(List<Players> pList) {
        return null;
    }

    @Override
    public void cull(List<Players> pList1, List<Players> pList2, int check) {

    }

    @Override
    public void freeWin(Players p) {

    }

    @Override
    public void freewinReset(List<Players> pList) {

    }

    @Override
    public void wonRound(Players p) {

    }

    @Override
    public void autoOddResolver(List<Players> pList) {

    }

    @Override
    public void matchResults(Players p1, Players p2) {

    }
}
