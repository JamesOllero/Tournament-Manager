package com.revature.project2.controllers;

import com.revature.project2.models.Players;
import com.revature.project2.services.PlayersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/player")
public class PlayersController {

    private PlayersService playersService;

    @Autowired
    public PlayersController (PlayersService playersService){
        this.playersService = playersService;
    }

    @GetMapping("/players")
    @ResponseBody
    public List<Players> findAll(){
        return playersService.FindAllPlayers();
    }

    @GetMapping("/players/{id}")
    @ResponseBody
    public Players findPlayersById(@PathVariable("id") int id){
    Players players = playersService.FindPlayers(id);
        if (players == null){
            throw new RuntimeException("player ID not found -" + id);
        }
        return players;
    }

    @PostMapping(path ="/addplayer",
            consumes= MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Players addplayer(@RequestBody Players players){
        players.setPlayer_Id(0);
        playersService.CreatePlayers(players);

        return players;
    }

    @DeleteMapping("/deleteplayers/{id}")
    @ResponseBody
    public String deleteplayers(@PathVariable("id")int id){
        Players players = playersService.FindPlayers(id);
        playersService.deletePlayers(players.getPlayer_Id());

        if (players == null){
            throw new RuntimeException ("players ID not found -" + id);
        }
        return "Deleted User ID -" + id;
    }
}
    
