export const api = 'http://localhost:4000/api';

export const generate_products_public_url = (filename) => {
    return `http://localhost:4000/public/products/${filename}`;
}

export const generate_categories_public_url = (filename) => {
    return `http://localhost:4000/public/categories/${filename}`;
}