import { NavLink } from 'react-router-dom';
import type { Product } from '../models/Product';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <section className='product-item'>
      <h4>{product.name}</h4>
      <NavLink to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} />
      </NavLink>
      <p>{parseInt(product.price.toString()).toFixed(2)} Kr</p>
    </section>
  );
}

export default ProductCard;
