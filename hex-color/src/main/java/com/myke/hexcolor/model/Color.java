package com.myke.hexcolor.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "hexcolor")
public class Color {
    // ATTRIBUTES
    @Id
    private String id;
    private String color;

    private LocalDateTime dateTime;

    //CONSTRUCTOR
    public Color() {
    }

    public Color(String color) {
        this.color = color;
        this.dateTime = LocalDateTime.now();
    }

    //GETTER && SETTER
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
