package com.myke.hexcolor.service;

import com.myke.hexcolor.model.Color;
import reactor.core.publisher.Mono;

public interface ColorService {

    Mono<Color> saveColor(Color color);

    Mono<Void> deleteColor(String id);

    Mono<Void> deleteAllColors();

}
