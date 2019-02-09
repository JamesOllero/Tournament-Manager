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

        while (winners.size() + losers.size() > 2) {
            int random = (int) (Math.random() * winners.size());
            int random2 = (int) (Math.random() * losers.size());
            if (winners.size() % 2 == 1) {
                winners.get(random).opponentname = "freewin";
            }

            if (losers.size() % 2 == 1) {
                losers.get(random).opponentname = "freewin";
            }

            for (int i = 0; i < winners.size(); i++) {
                if (winners.get(i).opponentname == "") {
                    if (winners.get(i + 1).opponentname == "freewin") {
                        winners.get(i).opponentname = winners.get(i + 2).username;
                        winners.get(i + 2).opponentname = winners.get(i).username;
                    } else {
                        winners.get(i + 1).opponentname = winners.get(i).username;
                        winners.get(i).opponentname = winners.get(i + 1).username;
                    }
                }
            }

            for (int i = 0; i < losers.size(); i++) {
                if (losers.get(i).opponentname == "") {
                    if (losers.get(i + 1).opponentname == "freewin") {
                        losers.get(i).opponentname = losers.get(i + 2).username;
                        losers.get(i + 2).opponentname = losers.get(i).username;
                    } else {
                        losers.get(i + 1).opponentname = losers.get(i).username;
                        losers.get(i).opponentname = losers.get(i + 1).username;
                    }
                }
            }

            for (int i = 0; i < winners.size(); i++) {
                for (int j = i + 1; j < winners.size(); j++) {
                    if (winners.get(i).opponentname == winners.get(j).username) {
                        winners.get(i).compete(winners.get(j));
                    }
                }
            }

            for (int i = 0; i < losers.size(); i++) {
                for (int j = i + 1; j < losers.size(); j++) {
                    if (losers.get(i).opponentname == losers.get(j).username) {
                        losers.get(i).compete(losers.get(j));
                    }
                }
            }

            for (int i = 0; i < winners.size(); i++) {
                if (winners.get(i).wld > 0) {
                    losers.add(winners.get(i));
                }
            }

            for (int i = 0; i < losers.size(); i++) {
                if (losers.get(i).wld > 1) {
                    eliminated.add(losers.get(i));
                }
            }

            winners.removeAll(losers);
            losers.removeAll(eliminated);

            System.out.println("Round" + round);
            System.out.println("Winners: " + winners.toString());
            System.out.println("Losers: " + losers.toString());
            System.out.println("Eliminated: " + eliminated.toString());
            System.out.println();

            for (int i = 0; i < participants.size(); i++) {
                participants.get(i).opponentname = "";
                participants.get(i).score= (int)(Math.random() * 1000);
            }
            round++;

        }
    }
}
