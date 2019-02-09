package org.ollero.model;

public class participant {
    public String username;
    public String opponentname="";
    public participant(String username){
        this.username=username;
    }
    public participant(){ }
    public int score = (int)(Math.random() * 1000);
    public int wld = 0;

    @Override
    public String toString() {
        return "{username='" + username + '\'' +
                ", opponentname='" + opponentname + '\'' +
                '}';
    }


    public void compete(participant p){
        if (this.score > p.score){
            p.wld ++;
        }else{
            this.wld ++;
        }
    }

}
