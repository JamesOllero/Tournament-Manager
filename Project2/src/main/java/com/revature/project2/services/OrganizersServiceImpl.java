package com.revature.project2.services;

import com.revature.project2.dao.OrganizersDao;
import com.revature.project2.models.Organizers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
