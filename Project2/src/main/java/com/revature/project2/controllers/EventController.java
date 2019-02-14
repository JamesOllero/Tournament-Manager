package com.revature.project2.controllers;

import com.revature.project2.dto.EventsDTO;
import com.revature.project2.dto.OrganizersDTO;
import com.revature.project2.models.Events;
import com.revature.project2.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/event")

public class EventController {
    private EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/events")
    @ResponseBody
   public List<EventsDTO> findAllEvents(){
        List<Events> events = eventService.findAllEvent();
        List<EventsDTO> eventsDTO = new ArrayList<>();
        for(int i =0; i<events.size(); i++){
            Events event = events.get(i);
            OrganizersDTO organizersDTO = new OrganizersDTO();
            organizersDTO.setManagerId(event.getOrganizers().getManagerId());
            eventsDTO.add(new EventsDTO(event.getId(),organizersDTO.getManagerId(),
                    event.getPlayerNum(), event.getEventType(), event.getDescription(),
                    event.isIn_Progress()));
//            event.setOrganizers(organizersDTO.OrganizersTo(event.getOrganizers()));
        }
        return eventsDTO;
    }

    @GetMapping ("/events/{evt_id}")
    @ResponseBody
    public EventsDTO findEventsById(@PathVariable("evt_id") int id){
        Events events = eventService.FindEvent(id);
//        events.setOrganizers(organizersDTO.OrganizersTo(events.getOrganizers()));
        if (events == null){
            throw new RuntimeException("Event ID not found -" + id);
        }

        OrganizersDTO organizersDTO = new OrganizersDTO();
        organizersDTO.setManagerId(events.getOrganizers().getManagerId());
        EventsDTO eventsDTO = new EventsDTO(events.getId(),organizersDTO.getManagerId(),
                events.getPlayerNum(), events.getEventType(), events.getDescription(),
                events.isIn_Progress());
        return eventsDTO;
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
