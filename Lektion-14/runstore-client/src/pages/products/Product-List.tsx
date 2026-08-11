import { useEffect, useState } from 'react';
import type { Product } from '../../models/Product';
import './products.css';
import ProductCard from '../../components/Product-Card';
import PageTitle from '../../components/ui/PageTitle';

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Anrop till vårt api...
    console.log('Calling useEffect');
    fetch('http://localhost:5001/products')
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <main className='container'>
      <PageTitle text='Våra produkter' />
      <article id='product-list'>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </article>
    </main>
  );
}

export default ProductList;
