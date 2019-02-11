package org.ollero.model;

public class participant {
    public String username;
    public String opponentname=" ";
    public participant(String username){
        this.username=username;
    }
    public participant(){ }
    //Replace the random stuff with something you can implement.
    public int score = (int)(Math.random() * 1000);
    public int wld = 0;
    public int wins = 0;
    //shows whether a participant already had a free win this tournament
    public boolean freewin=false;

    @Override
    public String toString() {
        return ("\n{username='" + username + '\'' +
                ", opponentname='" + opponentname + '\'' +
                '}'+"");
    }


    public void compete(participant p){
        if (this.score > p.score){
            p.wld ++;
        }else{
            this.wld ++;
        }
    }

}
