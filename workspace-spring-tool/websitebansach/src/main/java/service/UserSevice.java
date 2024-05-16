package service;

import exception.UserException;
import model.User;

public interface UserSevice {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
