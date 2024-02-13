package com.antonybresolin.backend.controller;


import com.antonybresolin.backend.model.User;
import com.antonybresolin.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user){

        if (user.getFirstName() == null || user.getFirstName().isEmpty() || user.getLastName() == null || user.getLastName().isEmpty() || user.getParticipation() == null || user.getParticipation().isNaN()) {
            return new ResponseEntity<>("Please fill in all fields", HttpStatus.BAD_REQUEST);
        }

        try {
            userService.createUser(user);
            return new ResponseEntity<>("User ("+user.getFirstName()+") created", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> getAllUsers(){
        try {
            return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.BAD_REQUEST);
        }
    }
}
