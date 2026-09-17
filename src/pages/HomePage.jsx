import { Link } from 'react-router'

function HomePage({ products }) {
  const outOfStockCount = products.filter((product) => product.quantity === 0).length

  return (
    <section className="intro-section">
      <p className="eyebrow">React fundamentals</p>
      <h1>Product inventory, one small React idea at a time.</h1>
      <p className="intro-text">
        This practice project stores products in React state. Add a product, visit another route, and see the same list update.
      </p>
      <div className="summary-grid">
        <article><strong>{products.length}</strong><span>Products</span></article>
        <article><strong>{outOfStockCount}</strong><span>Out of stock</span></article>
      </div>
      <Link className="primary-link" to="/add-product">Add a product</Link>
    </section>
  )
}

export default HomePage
