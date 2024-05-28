package com.zosh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.exception.ProductException;
import com.zosh.exception.UserException;
import com.zosh.model.Cart;
import com.zosh.model.User;
import com.zosh.request.AddItemRequest;
import com.zosh.response.ApiResponse;
import com.zosh.service.CartService;
import com.zosh.service.UserSevice;

@RestController
@RequestMapping("/api/cart")
//@Tag(name ="Cart Management", description = "Tìm giỏ hàng của người dùng, thêm mặt hàng vào giỏ hàng")
public class CartController {

	@Autowired
	private CartService cartService;

	@Autowired
	private UserSevice userSevice;

	@GetMapping("/")
//	@Operation(description ="Tìm giỏ hàng theo id người dùng")
	public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException {
		User user = userSevice.findUserProfileByJwt(jwt);
		Cart cart = cartService.findUserCart(user.getId());

		return new ResponseEntity<Cart>(cart, HttpStatus.OK);
	}

	@PutMapping("/add")
//	@Operation(description="Thêm mặt hàng vào giỏ hàng")
	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
			@RequestHeader("Authorization") String jwt) throws UserException, ProductException {
		User user = userSevice.findUserProfileByJwt(jwt);

		cartService.addCartItem(user.getId(), req);

		ApiResponse res = new ApiResponse();
		res.setMessage("Thêm mặt hàng vào giỏ hàng");
		res.setStatus(true);
		return new ResponseEntity<>(res, HttpStatus.OK);
	}

}
