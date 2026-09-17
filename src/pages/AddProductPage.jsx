import ProductForm from '../components/ProductForm.jsx'

function AddProductPage({ onAddProduct }) {
  return (
    <section className="form-section">
      <p className="eyebrow">useState and events</p>
      <h1>Add a product</h1>
      <p className="page-description">Type into each controlled input, then submit the form to update the product state in App.</p>
      <ProductForm onAddProduct={onAddProduct} />
    </section>
  )
}

export default AddProductPage
