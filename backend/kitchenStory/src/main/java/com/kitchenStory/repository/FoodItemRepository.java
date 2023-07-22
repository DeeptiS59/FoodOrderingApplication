package com.kitchenStory.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kitchenStory.model.FoodItem;

public interface FoodItemRepository extends JpaRepository<FoodItem, Integer>{
	Optional<FoodItem> findByName(String name);
}

