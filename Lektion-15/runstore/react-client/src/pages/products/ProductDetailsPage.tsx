import { useParams } from 'react-router-dom';
import PageTitle from '../../components/ui/PageTitle';
import { useEffect, useState } from 'react';
import type { Product } from '../../models/Product';

import './product-details.css';

function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>();
  const params = useParams();
  const api_url: string = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   fetch(`${api_url}/${params.id}`)
  //     .then((response) => response.json())
  //     .then((result) => setProduct(result));
  // }, [params.id, api_url]);

  // Change to this when we are ready with our node api...
  useEffect(() => {
    fetch(`${api_url}/${params.id}`)
      .then((response) => response.json())
      .then((result) => setProduct(result.data));
  }, [params.id, api_url]);

  return (
    <>
      <PageTitle text={product?.name} />
      <div id='product-details'>
        <article>
          <div>
            <img src={product?.imageUrl} alt={product?.name} />
            <button id='addToCart' title='Lägg i kundvagn'>
              <i className='fa-thin fa-basket-shopping'></i>
            </button>
          </div>
          <section>
            <p>{product?.description}</p>
          </section>
          <p>
            {product?.price.toLocaleString('se-SV', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            Kr
          </p>
        </article>
      </div>
    </>
  );
}

export default ProductDetailsPage;
