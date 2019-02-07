package com.revature.project2.services;

import com.revature.project2.models.Events;

import java.util.List;

public interface EventService {
    public void CreateEvent(Events events);
    public List<Events> FindAllEvent();
    public Events FindEvent(int id);
    public void deleteEvent(int id);


}
