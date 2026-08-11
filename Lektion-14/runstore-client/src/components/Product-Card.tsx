import type { Product } from '../models/Product';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <section className='product-item'>
      <h4>{product.name}</h4>
      <p>{product.price.toFixed(2)} Kr</p>
    </section>
  );
}

export default ProductCard;
