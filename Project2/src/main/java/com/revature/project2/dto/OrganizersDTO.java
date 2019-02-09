package com.revature.project2.dto;

import com.revature.project2.models.Organizers;

public class OrganizersDTO {

    Organizers organizer = null;
    OrganizersDTO organizersDTO = new OrganizersDTO();

    public Organizers OrganizersTo (Organizers organizer){
        this.organizer=organizer;
        organizersDTO.proxy(this.organizer);

        return this.organizer;

    }

//    public Organizers OrganizersFrom (Organizers organizer){
//        this.organizer=organizer;
////        orga
//    }



    public void proxy(Organizers organizer) {
        organizer.setPassword(null);
        organizer.setEmail(null);
        organizer.setUsername(null);
    }
}
