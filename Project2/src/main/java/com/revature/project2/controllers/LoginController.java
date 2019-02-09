package com.revature.project2.controllers;

import com.revature.project2.models.Organizers;
import com.revature.project2.services.OrganizersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
    private OrganizersService organizerService;

    @Autowired
    public LoginController(OrganizersService organizerService) {this.organizerService = organizerService;}

    @PostMapping(consumes= MediaType.APPLICATION_JSON_VALUE)
    public Organizers authenticate(@RequestBody Organizers organizerAttempt) {
//        Organizers fromDB = this.organizerService.findOrganizerByEmail(organizerAttempt.getEmail());
//        if(fromDB!=null) {
//            if (fromDB.getPassword().equals(organizerAttempt.getPassword())) {
//                fromDB.setPassword("");
//            } else {
//                fromDB = null;
//            }
//        }
//        return fromDB;
        return null;
    }
}
