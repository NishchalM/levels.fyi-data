package com.levels.fyi.dataprocessing;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "CompensationInfo")
@AllArgsConstructor
@NoArgsConstructor
public class CompensationCollection {
    @Id
    private String uuid;
    private Long baseSalary;
}
