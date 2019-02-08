package com.revature.project2.services;

import com.revature.project2.dao.OrganizersDao;
import com.revature.project2.models.Organizers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class OrganizersServiceImpl implements OrganizersService {

    private OrganizersDao organizersDao;

    @Autowired
    public OrganizersServiceImpl(OrganizersDao organizersDao) {
        this.organizersDao = organizersDao;
    }

    @Override
    @Transactional
    public void CreateOrganizer(Organizers organizers) {
        organizersDao.save(organizers);
    }

    @Override
    @Transactional
    public List<Organizers> FindAllOrganizer() {
        return organizersDao.findAll();
    }

    @Override
    @Transactional
    public Organizers FindOrganizer(int id) {
        return organizersDao.getOne(id);
    }

    @Override
    @Transactional
    public void deleteOrganizer(int id) {
        organizersDao.deleteById(id);
    }

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Organizers> getOrganizersByCredential(Organizers organizer) {
        String email =organizer.getEmail();
        String password = organizer.getPassword();
        Query query = entityManager.createNativeQuery("select * from project_2.organizers where email=? and \"password\"=?; ",Organizers.class );
        query.setParameter(1, email);
        query.setParameter(2, password);
        if(!query.getResultList().isEmpty()){
        Organizers organizers = (Organizers) query.getResultList().get(0);
        organizers.setPassword("");}
        return query.getResultList();
    }
}
