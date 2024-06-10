package com.zosh.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.zosh.exception.CartItemException;
import com.zosh.exception.UserException;
import com.zosh.model.Cart;
import com.zosh.model.CartItem;
import com.zosh.model.Product;
import com.zosh.model.User;
import com.zosh.repository.CartItemRepository;
import com.zosh.repository.CartRepository;

@Service
public class CartItemServiceImplementation implements CartItemService {

	private CartItemRepository cartItemRepository;
	private UserSevice userSevice;
	private CartRepository cartRepository;
	
	public CartItemServiceImplementation(CartItemRepository cartItemRepository, UserSevice userSevice,
			CartRepository cartRepository) {
		
		this.cartItemRepository = cartItemRepository;
		this.userSevice = userSevice;
		this.cartRepository = cartRepository;
	}

	@Override
	public CartItem createCartItem(CartItem cartItem) {
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());
		
		CartItem createCartItem = cartItemRepository.save(cartItem);
		
		return createCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		CartItem item = findCartItemById(id);
		User user = userSevice.findUserById(item.getUserId());
		
		if(user.getId().equals(userId)) {
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity()*item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
		}
		return cartItemRepository.save(item);
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		
		CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, size, userId);
		return cartItem;
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		CartItem cartItem= findCartItemById(cartItemId);
		
		User user = userSevice.findUserById(cartItem.getUserId());
		
		User reqUser = userSevice.findUserById(userId);
		
		if(user.getId().equals(reqUser.getId())) {
			cartItemRepository.deleteById(cartItemId);
		}
		else {
			throw new UserException("Bạn không thể xóa mục người dùng khác");
		}
		
	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		Optional<CartItem> opt = cartItemRepository.findById(cartItemId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new CartItemException("Không tìm thấy mục giỏ hàng có id: "+ cartItemId);
	}

}
