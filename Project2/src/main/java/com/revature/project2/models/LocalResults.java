package com.revature.project2.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "LOCAL_RESULTS",schema = "PROJECT_2")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LocalResults {
    
}
