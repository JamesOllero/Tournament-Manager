package org.ollero.model;

//privatize and generate setters and getters
public class participant {
    private static int counter = 0;
    private int userId;
    private String username;
    private String opponentname=" ";
    public participant(String username){
        this.userId = counter;
        this.username=username;
        counter++;
    }
    public participant(){ }
    //Replace the random stuff with something you can implement.
    private int score = (int)(Math.random() * 1000);
    private int wld = 0;
    private int wins = 0;
    //shows whether a participant already had a free win this tournament
    private boolean freewin=false;

    @Override
    public String toString() {
        return ("\n{username='" + username + '\'' +
                ", userId='" + userId + '\'' +
                '}'+"");
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOpponentname() {
        return opponentname;
    }

    public void setOpponentname(String opponentname) {
        this.opponentname = opponentname;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getWld() {
        return wld;
    }

    public void setWld(int wld) {
        this.wld = wld;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public boolean isFreewin() {
        return freewin;
    }

    public void setFreewin(boolean freewin) {
        this.freewin = freewin;
    }

    public static int getCounter() {
        return counter;
    }

    public static void setCounter(int counter) {
        participant.counter = counter;
    }
}
