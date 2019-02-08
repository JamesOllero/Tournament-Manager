package com.revature.project2.services;
import com.revature.project2.models.Organizers;

import java.util.List;

public interface OrganizersService {
    public void CreateOrganizer(Organizers organizers);
    public List<Organizers> FindAllOrganizer();
    public Organizers FindOrganizer(int id);
    public void deleteOrganizer(int id);
    Organizers findOrganizerByEmail(String email);

}
