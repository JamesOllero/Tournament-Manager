package com.revature.project2.dao;

import com.revature.project2.models.Organizers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface OrganizersDao  extends JpaRepository<Organizers, Integer> {
    }

