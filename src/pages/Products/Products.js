import React from 'react';
import usePorducts from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [products] = usePorducts([]);
    const limitedProducts = products.slice(0, 6);
    return (
        <div>
            <div>
                <h3>Our Porducts</h3>
            </div>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-10'>
                {
                    limitedProducts.map(product => <ProductCard
                        key={product._id}
                        product = {product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;