function ProductCard({ product }) {
  // "product" is a prop: data sent from a parent component.
  const stockMessage = product.quantity === 0 ? 'Out of stock' : `${product.quantity} in stock`

  return (
    <article className="product-card">
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className={product.quantity === 0 ? 'stock-status out-of-stock' : 'stock-status'}>
        {stockMessage}
      </p>
    </article>
  )
}

export default ProductCard
