import { ProductService } from './services/ProductService';
import { UserService } from './services/UserService';

// Initialize services
const productService = new ProductService();
const userService = new UserService();

// Sample data
const user = userService.createUser('John Doe', 'john@example.com');
const product1 = productService.createProduct('Laptop', 999.99, 'High-performance laptop');
const product2 = productService.createProduct('Smartphone', 599.99, 'Latest model smartphone');

// Display user and products
console.log('User:', user);
console.log('Products:', productService.getProducts());
