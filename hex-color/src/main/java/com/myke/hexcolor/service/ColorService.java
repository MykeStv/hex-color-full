package com.myke.hexcolor.service;

import com.myke.hexcolor.model.Color;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ColorService {

    Flux<Color> getColors();

    Mono<Color> saveColor(Color color);

    Mono<Void> deleteColor(String id);

    Mono<Void> deleteAllColors();

}
