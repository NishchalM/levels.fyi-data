package com.levels.fyi.dataprocessing;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FullCompensationRepo extends MongoRepository<FullCompensationInfo,String> {
}
