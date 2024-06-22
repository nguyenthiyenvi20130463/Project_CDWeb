package com.zosh.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.zosh.exception.ProductException;
import com.zosh.model.Category;
import com.zosh.model.Product;
import com.zosh.repository.CategoryRepository;
import com.zosh.repository.ProductRepository;
import com.zosh.request.CreateProductRequest;

@Service
public class ProductServiceImplementation implements ProductService {

	private ProductRepository productRepository;
	private UserSevice userSevice;
	private CategoryRepository categoryRepository;

	public ProductServiceImplementation(ProductRepository productRepository, UserSevice userSevice,
			CategoryRepository categoryRepository) {

		this.productRepository = productRepository;
		this.userSevice = userSevice;
		this.categoryRepository = categoryRepository;
	}

	@Override
	public Product createProduct(CreateProductRequest req) {
		Category topLevel = categoryRepository.findByName(req.getTopLavelCategory());

		if (topLevel == null) {
			Category topLavelCategory = new Category();
			topLavelCategory.setName(req.getTopLavelCategory());
			topLavelCategory.setLevel(1);

			topLevel = categoryRepository.save(topLavelCategory);

		}

		Category secondLevel = categoryRepository.findByNameAndParant(req.getSecondLavelCategory(), topLevel.getName());

		if (secondLevel == null) {
			Category secondLavelCategory = new Category();
			secondLavelCategory.setName(req.getSecondLavelCategory());
			secondLavelCategory.setParentCategory(topLevel);
			secondLavelCategory.setLevel(2);

			secondLevel = categoryRepository.save(secondLavelCategory);

		}

		Category thirdLevel = categoryRepository.findByNameAndParant(req.getThirdLavelCategory(),
				secondLevel.getName());

		if (thirdLevel == null) {
			Category thirdLavelCategory = new Category();
			thirdLavelCategory.setName(req.getThirdLavelCategory());
			thirdLavelCategory.setParentCategory(secondLevel);
			thirdLavelCategory.setLevel(3);

			thirdLevel = categoryRepository.save(thirdLavelCategory);

		}

		Product product = new Product();
		product.setTitle(req.getTitle());
		product.setAuthor(req.getAuthor());
		product.setDescription(req.getDescription());
		product.setDiscountedPrice(req.getDiscountedPrice());
		product.setDiscountPercent(req.getDiscountPercent());
		product.setImageUrl(req.getImageUrl());
		product.setPublisher(req.getPublisher());
		product.setPrice(req.getPrice());
		product.setIsbn(req.getIsbn());
		product.setQuantity(req.getQuantity());
		product.setCategory(thirdLevel);
		product.setCreateAt(LocalDateTime.now());

		Product saveProduct = productRepository.save(product);

		return saveProduct;

	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {

		Product product = findProductById(productId);
		productRepository.delete(product);
		return "Sản phẩm đã được xóa thành công";
	}

	@Override
	public Product updateProduct(Long productId, CreateProductRequest req) throws ProductException {
	    Product product = findProductById(productId);

	    if (req.getTitle() != null) {
	        product.setTitle(req.getTitle());
	    }
	    if (req.getAuthor() != null) {
	        product.setAuthor(req.getAuthor());
	    }
	    if (req.getDescription() != null) {
	        product.setDescription(req.getDescription());
	    }
	    if (req.getDiscountedPrice() != null) {
	        product.setDiscountedPrice(req.getDiscountedPrice());
	    }
	    if (req.getDiscountPercent() != null) {
	        product.setDiscountPercent(req.getDiscountPercent());
	    }
	    if (req.getImageUrl() != null) {
	        product.setImageUrl(req.getImageUrl());
	    }
	    if (req.getPublisher() != null) {
	        product.setPublisher(req.getPublisher());
	    }
	    if (req.getPrice() != null) {
	        product.setPrice(req.getPrice());
	    }
	    if (req.getIsbn() != null) {
	        product.setIsbn(req.getIsbn());
	    }
	    if (req.getQuantity() != null) {
	        product.setQuantity(req.getQuantity());
	    }

	    product.setCreateAt(LocalDateTime.now());

	    return productRepository.save(product);
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		Optional<Product> opt = productRepository.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}
		throw new ProductException("Không tìm thấy sản phẩm có id-" + id);

	}

	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, Integer minPrice, Integer maxPrice, Integer minDiscount,
			String sort, String stock, Integer pageNumber, Integer pageSize) {

		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);

		System.out.println("Initial Products Size: " + products.size());

		if (products == null || products.isEmpty()) {
			return new PageImpl<>(List.of(), pageable, 0);
		}

		if (stock != null) {
			if (stock.equals("in_stock")) {
				products = products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
			} else if (stock.equals("out_of_stock")) {
				products = products.stream().filter(p -> p.getQuantity() < 1).collect(Collectors.toList());
			}
		}

		int startIndex = (int) pageable.getOffset();
		int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

		List<Product> pageContent = products.subList(startIndex, endIndex);

		System.out.println("Page Content Size: " + pageContent.size());

		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());

		return filteredProducts;
	}

	@Override
	public List<Product> findAllProducts() {
		return productRepository.findAll();
	}

}
