package com.zosh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jmx.export.annotation.ManagedOperation;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.exception.CartItemException;
import com.zosh.exception.UserException;
import com.zosh.model.CartItem;
import com.zosh.model.User;
import com.zosh.request.AddItemRequest;
import com.zosh.response.ApiResponse;
import com.zosh.service.CartItemService;
import com.zosh.service.CartService;
import com.zosh.service.UserSevice;

@RestController
@RequestMapping("/api/cartItem")
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;

	@Autowired
	private UserSevice userSevice;

	@DeleteMapping("/{cartItemId}")
//	@Operation(description ="Remove Cart Item From cart")
//	@io.swagger.v3.oas.annotations.response.ApiResponse(description =  "Delete Item")
	public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId,
			@RequestHeader("Authorization") String jwt) throws UserException, CartItemException {
		User user = userSevice.findUserProfileByJwt(jwt);
		cartItemService.removeCartItem(user.getId(), cartItemId);

		ApiResponse res = new ApiResponse();
		res.setMessage("Xóa mặt hàng khỏi giỏ hàng");
		res.setStatus(true);
		return new ResponseEntity<>(res, HttpStatus.OK);
	}

	@PutMapping("/cartItemId")
//	@Operation(description = "Update item to cart")
	public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartItem, @PathVariable Long cartItemd,
			@RequestHeader("Authorization") String jwt) throws UserException, CartItemException {
		User user = userSevice.findUserProfileByJwt(jwt);
		CartItem updateCartItem = cartItemService.updateCartItem(user.getId(), cartItemd, cartItem);

		return new ResponseEntity<>(updateCartItem, HttpStatus.OK);

	}

}