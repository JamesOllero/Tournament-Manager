package com.revature.project2.services;

import com.revature.project2.dao.PlayersDao;
import com.revature.project2.models.Players;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class PlayersServiceImpl implements PlayersService{
   private PlayersDao playersDao;

    @Autowired
    public PlayersServiceImpl(PlayersDao playersDao) {
        this.playersDao = playersDao;
    }

    @Override
    @Transactional
    public void CreatePlayers(Players players) {
        playersDao.save(players);
    }

    @Override
    @Transactional
    public List<Players> FindAllPlayers() {
        return playersDao.findAll();
    }

    @Override
    @Transactional
    public Players FindPlayers(int id) {
        return playersDao.getOne(id);
    }

    @Override
    @Transactional
    public void deletePlayers(int id) {
        playersDao.deleteById(id);
    }
}
