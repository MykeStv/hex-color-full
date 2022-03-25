package com.myke.hexcolor.repository;

import com.myke.hexcolor.model.Color;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

//The reactiveMongoRepository requieres <Class, id-Type>
public interface ColorRepository extends ReactiveMongoRepository<Color, String> {
}
