package com.myke.hexcolor.controller;

import com.myke.hexcolor.model.Color;
import com.myke.hexcolor.model.ColorDTO;
import com.myke.hexcolor.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.context.support.UiApplicationContextUtils;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.joining;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/color")
public class ColorController {

    @Autowired
    private ColorService colorService;

    @GetMapping("")
    public Flux<Color> getColors() {
        return this.colorService.getColors();
    }

    @PostMapping("")
    public Mono<Color> saveColor() {
        Random rand = new Random();
        String values = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        List<String> listValues = List.of(values.split(","));
        String hex = "#,0,0,0,0,0,0";
        List<String> listhex = List.of(hex.split(","));

        String randomHex = listhex.stream()
                .map(e -> e.equals("#") ? e : listValues.get(rand.nextInt(listValues.size())))
                .collect(Collectors.joining());

        //No funciona por ser un proceso bloqueante
        /*Mono<String> randomHex = Flux.fromIterable(listhex)
                .map(e -> e.equals("#") ? e : listValues.get(rand.nextInt(listValues.size())))
                .collect(joining(""));*/


        return Mono.just(new Color())
                .map(color -> {
                    color.setDateTime(LocalDateTime.now());
                    color.setColor(randomHex);
                    return color;
                })
                .flatMap(color -> this.colorService.saveColor(color));
                //.flatMap(colorService::saveColor);

    }

    @DeleteMapping(path = "/delete")
    public Mono<Void> deleteColors() {
        return this.colorService.deleteAllColors();
    }



}
