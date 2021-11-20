package com.levels.fyi.dataprocessing.controller;

import com.levels.fyi.dataprocessing.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/salary")
public class SalaryController {

    @Autowired
    private SalaryService salaryService;

    @GetMapping("")
    public ResponseEntity<Boolean> list() {
        salaryService.pullAlltoDb();
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);

    }

}
