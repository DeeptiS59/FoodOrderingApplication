package com.kitchenStory.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.kitchenStory.model.Cart;
import com.kitchenStory.model.FoodItem;
import com.kitchenStory.model.ResetPassword;
import com.kitchenStory.model.User;
import com.kitchenStory.repository.CartRepository;
import com.kitchenStory.repository.FoodItemRepository;
import com.kitchenStory.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FoodItemsController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	FoodItemRepository foodItemRepository;
	@Autowired
	CartRepository cartRepository;
	public static String uploadDir = System.getProperty("user.dir")+"/src/main/resources/static/productImages";
	
	@GetMapping("/foodItems")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<FoodItem> getAllFoodItems()
	{
		return foodItemRepository.findAll() ;
	}
	
	@PostMapping("/foodItems")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<FoodItem> createFoodItems(@RequestBody FoodItem foodItem)
	{
		FoodItem f= new FoodItem();
		f.setName(foodItem.getName());
		f.setPrice(foodItem.getPrice());
		foodItemRepository.save(f);
		return null; 
	}
	
	@GetMapping("/foodItems/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<FoodItem> getFoodItem(@PathVariable int id)
	{
		return foodItemRepository.findById(id) ;
	}
	
	@DeleteMapping("/foodItems/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteFoodItem(@PathVariable int id)
	{
		 foodItemRepository.deleteById(id);
	}
	@PostMapping("/users")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> createUser(@RequestBody User  user)
	{
		User u= new User();
		u.setUsername(user.getUsername());
		u.setPassword(user.getPassword());
		u.setRole("standard");
		userRepository.save(u);
		return null; 
	}
	@PostMapping("/userLogin")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User  user)
	{
		Optional<User> u= userRepository.findByUsername(user.getUsername());
		if(u.isPresent()) {
			boolean isCorrect= u.get().getPassword().equals(user.getPassword());
			if(isCorrect) {
				return u.get();
			}			
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}
	@PostMapping("/resetpwd")
	@CrossOrigin(origins = "http://localhost:4200")
	public void changePassword(@RequestBody ResetPassword  resetPassword) {
		Optional<User> u= userRepository.findByUsername("admin");
		if(u.isPresent()) {
			if(u.get().getPassword().equals(resetPassword.getOldPassword())) {
				u.get().setPassword(resetPassword.getNewPassword());
				userRepository.save(u.get());
				return;
			}
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/cart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Cart> getAllCartItems(@PathVariable int id) {
		List <Cart> cartItems= cartRepository.findAllByUser_Id(id);
		return cartItems;
	}
	@PostMapping("/addToCart/{userId}/{foodItemId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addCartItem(@PathVariable int userId,@PathVariable int foodItemId) {
		
		Optional<User> u= userRepository.findById(userId);
		Optional<FoodItem> f= foodItemRepository.findById(foodItemId);
		if(u.isPresent()&& f.isPresent()) {
			Cart c= new Cart();
			c.setUser(u.get());
			c.setFoodItem(f.get());
			cartRepository.save(c);	
		}

	}
	@DeleteMapping("/cart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteCartItem(@PathVariable int id)
	{
		cartRepository.deleteById(id);
	}
	@GetMapping("/emptyCart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void  emptyCartItems(@PathVariable int id) {
		List <Cart> cartItems= cartRepository.findAllByUser_Id(id);
		for(Cart item:cartItems) {
			cartRepository.deleteById(item.getId());
		}
	}
}