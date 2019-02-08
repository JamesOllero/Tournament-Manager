package com.revature.project2.dao;

import com.revature.project2.models.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EventDao extends JpaRepository<Events, Integer> {
}

