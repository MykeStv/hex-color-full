package com.myke.hexcolor.service.impl;

import com.myke.hexcolor.model.Color;
import com.myke.hexcolor.repository.ColorRepository;
import com.myke.hexcolor.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ColorServiceImpl implements ColorService {

    @Autowired
    private ColorRepository colorRepository;

    @Override
    public Flux<Color> getColors() {
        return this.colorRepository.findAll();
    }

    @Override
    public Mono<Color> saveColor(Color color) {
        return this.colorRepository.save(color);
    }

    @Override
    public Mono<Void> deleteColor(String id) {
        return this.colorRepository.deleteById(id);
        /*return this.colorRepository.findById(id)
                .flatMap(c -> this.colorRepository.deleteById(c.getId()));*/
    }

    @Override
    public Mono<Void> deleteAllColors() {
        return this.colorRepository.deleteAll();
    }
}
