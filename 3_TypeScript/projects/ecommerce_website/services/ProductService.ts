// services/ProductService.ts

import { Product } from '../models/Product';

export class ProductService {
    private products: Product[] = [];
    private idCounter: number = 1;

    createProduct(name: string, price: number, description: string): Product {
        const newProduct = new Product(this.idCounter++, name, price, description);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts(): Product[] {
        return this.products;
    }
}
