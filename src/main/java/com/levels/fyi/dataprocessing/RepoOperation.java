package com.levels.fyi.dataprocessing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RepoOperation {

    @Autowired
    private FullCompensationRepo fullCompensationRepo;
    public void saveOperation(FullCompensationInfo compensationCollection) {
        fullCompensationRepo.save(compensationCollection);
    }

    public void saveAllOperation(List<FullCompensationInfo> fullCompensationInfoList) {
        fullCompensationRepo.saveAll(fullCompensationInfoList);
    }
}
