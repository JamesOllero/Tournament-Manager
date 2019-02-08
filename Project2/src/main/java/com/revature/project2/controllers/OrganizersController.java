package com.revature.project2.controllers;

import com.revature.project2.models.Organizers;
import com.revature.project2.services.OrganizersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/organizer")
public class OrganizersController {
    private OrganizersService organizerService;

    @Autowired
    public OrganizersController(OrganizersService organizerService) {
        this.organizerService = organizerService;
    }

    @GetMapping("/organizers")
    @ResponseBody
    public List<Organizers> findAllOrganizers(){
        return organizerService.FindAllOrganizer();
    }

    @GetMapping ("/organizers/{id}")
    @ResponseBody
    public Organizers findOrganizersById(@PathVariable("id") int id){
        Organizers organizers = organizerService.FindOrganizer(id);

        if (organizers == null){
            throw new RuntimeException("Organizer ID not found -" + id);
        }
        return organizers;
    }
    @PostMapping(path ="/addorganizer",
            consumes= MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Organizers addOrganizer(@RequestBody Organizers organizers){
        organizers.setManagerId(0);
        organizerService.CreateOrganizer(organizers);

        return organizers;
    }

    @DeleteMapping("/deleteorganizers/{id}")
    @ResponseBody
    public String deleteOrganizers(@PathVariable("id")int id){
        Organizers organizers = organizerService.FindOrganizer(id);
        organizerService.deleteOrganizer(organizers.getManagerId());

        if (organizers == null){
            throw new RuntimeException ("Organizers ID not found -" + id);
        }
        return "Deleted User ID -" + id;
    }
}

