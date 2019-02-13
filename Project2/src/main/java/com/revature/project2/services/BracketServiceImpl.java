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
        return null;
    }

    @Override
    public List<LocalResults> singleElim(List<LocalResults> participantList) {
        return null;
    }

    @Override
    public List<LocalResults> doubleElim() {
        return null;
    }

    @Override
    public List<LocalResults> manualMatch(LocalResults participant1, LocalResults participant2) {
        return null;
    }

    @Override
    public List<LocalResults> autoMatch(List<Players> participantList) {
        return null;
    }

    @Override
    public void cull(List<LocalResults> participantList1, List<LocalResults> participantList2, int check) {

    }

    @Override
    public void freeWin(LocalResults participant) {

    }

    @Override
    public void freewinReset(List<LocalResults> participantList) {

    }

    @Override
    public void wonRound(LocalResults participant) {

    }

    @Override
    public void autoOddResolver(List<Players> pList) {

    }

    @Override
    public void matchResults(Players p1, Players p2) {

    }
}
