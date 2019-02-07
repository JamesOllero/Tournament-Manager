package com.revature.project2.services;
import com.revature.project2.models.Organizers;

import java.util.List;

public interface ManagerCredentialService {
    public void CreateManagerCredential(Organizers organizers);
    public List<Organizers> FindAllManagerCredential();
    public Organizers FindManagerCredential(int id);
    public void deleteManagerCredential(int id);

}
