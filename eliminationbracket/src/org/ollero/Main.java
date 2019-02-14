package org.ollero;

import org.ollero.model.Loser;
import org.ollero.model.participant;

import java.util.ArrayList;
import java.util.List;

public class Main {
    //when left with an odd number of players, one random person is given a free win.

    public static void main(String[] args) {


        //find a way to use Hibernate to pull names from there.
        participant p1 = new participant("James");
        participant p2 = new participant("Chris");
        participant p3 = new participant("Star");
        participant p4 = new participant("Joe");
        participant p5 = new participant("Christian");
        participant p6 = new participant("Steve");
        participant p7 = new participant("Alex");
        participant p8 = new participant("Lonnie");
        //use this to call on the winner
        String winner="";

        List<participant> participants = new ArrayList<>();
        List<participant> winners = new ArrayList<>();
        List<participant> eliminated = new ArrayList<>();
        //only used in double elimination
        List<participant> losers = new ArrayList<>();


        //Find a more efficient way to add participants to the collection.
        participants.add(p1);
        participants.add(p2);
        participants.add(p3);
        participants.add(p4);
        participants.add(p5);
        participants.add(p6);
        participants.add(p7);

        //upon starting the tournament
        winners.addAll(participants);
//        System.out.println(winners.toString());
//        System.out.println(participants.toString());
        int match = 1;
        //note: turn this while loop into a method to be called
        //while (winners.size() + losers.size() > 2) {
        //Remember to replace tourney with a manual means of choosing a winner
            matchmaking(losers);
            matchmaking(winners);
            //Somewhere over here, you can add wins/losses in a best of x as matches progress
            tourney(losers);
            tourney(winners);
            //I think this will be staying
            cull(losers, eliminated,1);
            cull(winners, losers, 0);
            System.out.println("Match" + match);
//            System.out.println();
//            System.out.println(winners.toString());
//            System.out.println(losers.toString());
//            System.out.println();
            System.out.println(participants.toString());
            roundReset(participants);
            match++;

//        }
//        System.out.println("Winner: " + winners.get(0).username);
//        System.out.println("Loser's bracket winner: " + losers.get(0).username);

        //if (winners.size()+losers.size() ==2){
        //losers.add(winners.get(0));
        ////Run finals until someone gets culled from losers.
        //}
        //Turn this to a method to be called when winners+losers==2
//        while(winners.size()+losers.size()>1){
//            if(winners.size() > 0){
//                losers.get(0).compete(winners.get(0));
//            }else{
//                losers.get(0).compete(losers.get(1));
//            }
//            cull(winners, losers, 0);
//            cull(losers, eliminated, 1);
//        }
//
//        for(int i=0; i < participants.size(); i++){
//            if(participants.get(i).wld < 2){
//                winner=participants.get(i).username;
//            }
//        }
//        System.out.println();
//        System.out.println("Tournament winner: "+winner);
  }


    //methods
    public static void doubleElimFinals(List<participant> p1, List<participant>p2, List<participant> dropoff, int threshold){
        p2.add(p1.get(0));
        manual(p2.get(0), p2.get(0));
        participant winner;
        while(p2.size() > 1){
            tourney(p2);
            cull(p2, dropoff, threshold);
        }
        winner = p2.get(0);
        System.out.println("Winner: "+winner);
    }

    public static void cull(List<participant> p1, List<participant>p2, int threshold){
        for (int i = 0; i < p1.size(); i++) {
            if (p1.get(i).getWld() > threshold) {
                p2.add(p1.get(i));
            }
        }
        p1.removeAll(p2);
    }
    public static void roundReset(List<participant> participants){
        for(int i = 0; i < participants.size();i++){
            participants.get(i).setOpponentname(" ");
//            participants.get(i).score=(int)(Math.random()*1000);
        }
    }

    public static void manual(participant p1, participant p2){
        p1.setOpponentname(p2.getUsername());
        p2.setOpponentname(p1.getUsername());
    }

    public static void autowin(participant p){
        p.setOpponentname("freewin");
    }
    public static void freewinReset(List<participant> participants){
        boolean isFull = true;
        for(participant p: participants){
            if(p.isFreewin()==false){
                isFull=false;
                break;
            }
        }if(isFull=true){
            for(participant p: participants){
                p.setFreewin(false);
            }
        }
    }

    public static void matchmaking(List<participant> participants){
        oddResolver(participants);
        if(participants.size() > 1) {
            for (int i = 0; i < participants.size(); i++) {
                //Prevent opponent reassignment and
                while (participants.get(i).getOpponentname() == " ") {
                    for(int j = i+1; j < participants.size(); j++){
                        if(participants.get(j).getOpponentname()==" "){
                            participants.get(j).setOpponentname(participants.get(i).getUsername());
                            participants.get(i).setOpponentname(participants.get(j).getUsername());
                            break;
                        }
                    }
                }
            }
        }
    }

    //To be replaced by a manual means of choosing a winner
    public static void tourney(List<participant>participants){
        for (int i = 0; i < participants.size(); i++) {
            for (int j = i + 1; j < participants.size(); j++) {
                if (participants.get(i).getOpponentname() == participants.get(j).getUsername()) {
                    results(participants.get(i), participants.get(j));
                }
            }
        }
    }

    //call on this once a round finishes
    public static void wonRound(participant p){
        p.setScore(p.getScore()+1);
    }

    //add a condition that this only runs once one of the two meets the best of, or once both register their scores
    public static void results(participant p1, participant p2){
        if (p1.getScore() > p2.getScore()){
            p2.setWld(p2.getWld()+1);
        }else{
            p1.setWld(p1.getWld()+1);
        }
    }

    //ensures that a bracket with an odd number of participants will have a random guy get the in
    public static void oddResolver(List<participant>participants){
        int rand = (int) (Math.random() * participants.size());
        boolean freeSet = false;
        if(participants.size() > 1 && participants.size()%2==1){
            while(freeSet==false){
                //prevents a person from getting a free win twice in a tournament
                if(participants.get(rand).isFreewin()==false){
                    participants.get(rand).setOpponentname("freewin");
                    participants.get(rand).setFreewin(true);
                    freeSet=true;
                }rand=(int)(Math.random()*participants.size());
            }
        }
    }
}
