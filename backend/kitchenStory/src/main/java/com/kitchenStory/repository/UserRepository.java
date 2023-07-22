package com.kitchenStory.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kitchenStory.model.User;



public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String name);
}