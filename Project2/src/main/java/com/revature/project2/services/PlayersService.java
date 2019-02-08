package com.revature.project2.services;

import com.revature.project2.models.Players;

import java.util.List;

public interface PlayersService {

    public void CreatePlayers(Players players);
    public List<Players> FindAllPlayers();
    public Players FindPlayers(int id);
    public void deletePlayers(int id);

}
