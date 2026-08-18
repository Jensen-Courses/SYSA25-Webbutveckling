import { useEffect, useState } from 'react';
import type { Product } from '../../models/Product';
import './products.css';
import ProductCard from '../../components/Product-Card';
import PageTitle from '../../components/ui/PageTitle';

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const api_url: string = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   fetch(api_url)
  //     .then((response) => response.json())
  //     .then((result) => setProducts(result));
  // }, [api_url]);

  // Change to this when we are ready with our node api...
  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((result) => setProducts(result.data));
  }, [api_url]);

  return (
    <>
      <PageTitle text='Våra produkter' />
      <article id='product-list'>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </article>
    </>
  );
}

export default ProductListPage;
