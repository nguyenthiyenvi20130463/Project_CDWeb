package com.zosh.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zosh.exception.OrderException;
import com.zosh.model.Address;
import com.zosh.model.Order;
import com.zosh.model.User;
import com.zosh.repository.CartRepository;

@Service
public class OrderServiceImplementation implements OrderService{
	
	private CartRepository cartRepository;
	private CartService cartItemService;
	private ProductService productService;
	
	
	public OrderServiceImplementation(CartRepository cartRepository, CartService cartItemService,
			ProductService productService) {
		
		this.cartRepository = cartRepository;
		this.cartItemService = cartItemService;
		this.productService = productService;
	}

	@Override
	public Order createOrder(User user, Address shippingAdress) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order findOrderById(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> usersOrderHistory(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order confirmedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order cancledOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		
	}

}
