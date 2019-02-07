package com.revature.project2.dao;

import com.revature.project2.models.Players;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayersDao extends JpaRepository<Players, Integer> {
}
