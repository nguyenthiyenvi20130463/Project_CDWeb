package com.zosh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.exception.UserException;
import com.zosh.model.User;
import com.zosh.service.UserSevice;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserSevice userSevice;

	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws UserException {
		User user = userSevice.findUserProfileByJwt(jwt);
		return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
	}
}
