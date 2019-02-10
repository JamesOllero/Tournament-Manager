package org.ollero;

import org.ollero.model.Loser;
import org.ollero.model.participant;

import java.util.ArrayList;
import java.util.List;

public class Main {
    //when left with an odd number of players, one random person is given a free win.

    public static void main(String[] args) {
        participant p1 = new participant("James");
        participant p2 = new participant("Chris");
        participant p3 = new participant("Star");
        participant p4 = new participant("Joe");
        participant p5 = new participant("Christian");
        //use this to call on the winner
        String winner="";

        List<participant> participants = new ArrayList<>();
        List<participant> losers = new ArrayList<>();
        List<participant> eliminated = new ArrayList<>();

        participants.add(p1);
        participants.add(p2);
        participants.add(p3);
        participants.add(p4);
        participants.add(p5);

        List<participant> winners = new ArrayList<>();
        winners.addAll(participants);
        int round = 1;

        //note: turn this while loop into a method to be called
        while (winners.size() + losers.size() > 2) {
            matchmaking(winners);
            matchmaking(losers);

            tourney(winners);
            tourney(losers);

            cull(winners, losers, 0);
            cull(losers, eliminated,1);

            System.out.println("Round" + round);
            System.out.println();

            roundReset(participants);

            round++;

        }
        System.out.println("Winner: " + winners.get(0).username);
        System.out.println("Loser's bracket winner: " + losers.get(0).username);

        //Turn this to a method to be called when winners+losers==2
        while(winners.size()+losers.size()>1){
            if(winners.size() > 0){
                losers.get(0).compete(winners.get(0));
            }else{
                losers.get(0).compete(losers.get(1));
            }
            cull(winners, losers, 0);
            cull(losers, eliminated, 1);
        }

        for(int i=0; i < participants.size(); i++){
            if(participants.get(i).wld < 2){
                winner=participants.get(i).username;
            }
        }
        System.out.println();
        System.out.println("Tournament winner: "+winner);
    }


    //methods
    public static void cull(List<participant> p1, List<participant>p2, int threshold){
        for (int i = 0; i < p1.size(); i++) {
            if (p1.get(i).wld > threshold) {
                p2.add(p1.get(i));
            }
        }
        p1.removeAll(p2);
    }
    public static void roundReset(List<participant> participants){
        for(int i = 0; i < participants.size();i++){
            participants.get(i).opponentname ="";
            participants.get(i).score=(int)(Math.random()*1000);
        }
    }
    public static void manual(participant p1, participant p2){
        p1.opponentname=p2.username;
        p2.opponentname=p1.username;
    }

    public static void autowin(participant p){
        p.opponentname="freewin";
    }
    public static void matchmaking(List<participant> participants){
        oddResolver(participants);
        for (int i = 0; i < participants.size(); i++) {
            //Prevent opponent reassignment
            if (participants.get(i).opponentname == "") {
                // If the opponent's name is "freewin", they get the bye
                if (participants.get(i + 1).opponentname == "freewin") {
                    participants.get(i).opponentname = participants.get(i + 2).username;
                    participants.get(i + 2).opponentname = participants.get(i).username;
                }
                // Normal case
                else {
                    participants.get(i + 1).opponentname = participants.get(i).username;
                    participants.get(i).opponentname = participants.get(i + 1).username;
                }
            }
        }
    }
    public static void tourney(List<participant>participants){
        for (int i = 0; i < participants.size(); i++) {
            for (int j = i + 1; j < participants.size(); j++) {
                if (participants.get(i).opponentname == participants.get(j).username) {
                    participants.get(i).compete(participants.get(j));
                }
            }
        }
    }
    public static void oddResolver(List<participant>participants){
        int rand = (int) (Math.random() * participants.size());
        boolean freeSet = false;
        if(participants.size() >1 &&participants.size()%2==1){
            while(freeSet=false){
                if(participants.get(rand).freewin==false){
                    participants.get(rand).opponentname="freewin";
                    participants.get(rand).freewin=true;
                    freeSet=true;
                }rand=(int)(Math.random()*participants.size());
            }
        }
    }
}
