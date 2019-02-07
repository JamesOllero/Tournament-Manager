package com.revature.project2.services;

import com.revature.project2.dao.ManagerCredentialDao;
import com.revature.project2.models.Organizers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ManagerCredentialServiceImpl implements ManagerCredentialService{

    private ManagerCredentialDao managerCredentialDao;

    @Autowired
    public ManagerCredentialServiceImpl(ManagerCredentialDao managerCredentialDao) {
        this.managerCredentialDao = managerCredentialDao;
    }

    @Override
    @Transactional
    public void CreateManagerCredential(Organizers organizers) {
        managerCredentialDao.save(organizers);
    }

    @Override
    @Transactional
    public List<Organizers> FindAllManagerCredential() {
        return managerCredentialDao.findAll();
    }

    @Override
    @Transactional
    public Organizers FindManagerCredential(int id) {
        return managerCredentialDao.getOne(id);
    }

    @Override
    @Transactional
    public void deleteManagerCredential(int id) {
        managerCredentialDao.deleteById(id);
    }
}
