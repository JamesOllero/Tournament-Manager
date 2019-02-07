package com.revature.project2.services;

import com.revature.project2.dao.EventDao;
import com.revature.project2.models.Events;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    private EventDao eventDao;

    @Autowired
    public EventServiceImpl(EventDao eventDao) {
        this.eventDao = eventDao;
    }

    @Override
    @Transactional
    public void CreateEvent(Events events) {
        eventDao.save(events);
    }

    @Override
    @Transactional
    public List<Events> FindAllEvent() {
        return eventDao.findAll();
    }

    @Override
    @Transactional
    public Events FindEvent(int id) {
        return eventDao.getOne(id);
    }

    @Override
    @Transactional
    public void deleteEvent(int id) { eventDao.deleteById(id);

    }
}
