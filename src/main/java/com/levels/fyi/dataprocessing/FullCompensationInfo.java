package com.levels.fyi.dataprocessing;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "FullCompensationInfo")
@AllArgsConstructor
@NoArgsConstructor
public class FullCompensationInfo {
    @Id
    private String uuid;
    private Long totalYearlyCompensation;
    private String gender;
    private String level;
    private Long stockGrantValue;
    private Long bonus;
    private Long demaid;
    private Long cityId;
    private String title;
    private String otherDetails;
    private Long yearsOfExperience;
    private Long baseSalary;
    private Company company;
    private String location;
    private String tag;
    private Long yearsAtCompany;
    private String timeStamp;
}
