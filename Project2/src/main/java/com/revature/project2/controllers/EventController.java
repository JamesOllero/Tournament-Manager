package com.revature.project2.controllers;

import com.revature.project2.dto.OrganizersDTO;
import com.revature.project2.models.Events;
import com.revature.project2.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")

public class EventController {
    private OrganizersDTO organizersDTO = new OrganizersDTO();
    private EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/events")
    @ResponseBody
   public List<Events> findAllEvents(){
        List<Events> events = eventService.findAllEvent();
        for(int i =0; i<events.size(); i++){
            events.size();
            Events event = events.get(i);
            System.out.println(organizersDTO.OrganizersTo(event.getOrganizers())==null);
            event.setOrganizers(organizersDTO.OrganizersTo(event.getOrganizers()));
        }
        return events;
    }

    @GetMapping ("/events/{evt_id}")
    @ResponseBody
    public Events findEventsById(@PathVariable("evt_id") int id){
        Events events = eventService.FindEvent(id);
        events.setOrganizers(organizersDTO.OrganizersTo(events.getOrganizers()));
        if (events == null){
            throw new RuntimeException("Event ID not found -" + id);
        }
        return events;
    }
    @PostMapping(path ="/addevent",
            consumes= MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Events addEvent(@RequestBody Events events){
        events.setId(0);
        eventService.CreateEvent(events);

        return events;
    }

    @DeleteMapping("/deleteevents/{evt_id}")
    @ResponseBody
    public String deleteEvents(@PathVariable("evt_id")int id){
        Events events = eventService.FindEvent(id);
        eventService.deleteEvent(events.getId());

        if (events == null){
            throw new RuntimeException ("Events ID not found -" + id);
        }
        return "Deleted User ID -" + id;
    }
}
