import ProductCard from '../components/ProductCard.jsx'

function ProductsPage({ products }) {
  return (
    <section>
      <p className="eyebrow">Reusable component</p>
      <h1>Products</h1>
      <p className="page-description">Each card is one ProductCard component. React repeats it with a different product prop.</p>
      {products.length === 0 ? (
        <p className="empty-message">There are no products yet.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </section>
  )
}

export default ProductsPage
