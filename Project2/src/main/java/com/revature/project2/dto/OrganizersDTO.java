package com.revature.project2.dto;

import com.revature.project2.models.Organizers;
import com.revature.project2.services.OrganizersService;

public class OrganizersDTO {
//    OrganizersService organizersService = null;
//    Organizers organizer = null;
//    OrganizersDTO organizersDTO;
    int ManagerId;

    public int getManagerId() {
        return ManagerId;
    }

    public void setManagerId(int managerId) {
        ManagerId = managerId;
    }

//    public OrganizersDTO OrganizersTo (Organizers organizer) {
//
//        this.organizersDTO.setManagerId(organizer.getManagerId());
//        OrganizersDTO organizersDTO = new OrganizersDTO();
//        return this.organizersDTO;
//    }

    @Override
    public String toString() {
        return "OrganizersDTO{" +
                "ManagerId=" + ManagerId +
                '}';
    }
//    public Organizers OrganizersTo (Organizers organizer){
//        this.organizer=organizer;
//        OrganizersDTO organizersDTO = new OrganizersDTO();
//        this.organizer= organizersDTO.proxy(this.organizer);
//        return this.organizer;
//
//    }
//
//    public Organizers OrganizersFrom (Organizers organizer){
//        this.organizer=organizer;
//            return organizersService.getOrganizersByCredential(organizer).get(0);
//    }



//    public Organizers proxy(Organizers organizer) {
//        organizer.setPassword(null);
//        organizer.setEmail(null);
//        organizer.setUsername(null);
//
//        return organizer;
//    }


}
