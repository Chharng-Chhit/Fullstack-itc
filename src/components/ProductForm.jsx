import { useState } from 'react'

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '' || category.trim() === '' || quantity === '') {
      setMessage('Please complete every field.')
      return
    }

    onAddProduct({
      id: Date.now(),
      name: name.trim(),
      category: category.trim(),
      quantity: Number(quantity),
    })

    setName('')
    setCategory('')
    setQuantity('')
    setMessage('Product added. Open Products to see it.')
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product-name">Product name</label>
        <input id="product-name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="product-category">Category</label>
        <input id="product-category" value={category} onChange={(event) => setCategory(event.target.value)} />
      </div>
      <div>
        <label htmlFor="product-quantity">Quantity</label>
        <input id="product-quantity" type="number" min="0" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      </div>
      <button type="submit">Save product</button>
      <p className="form-message" aria-live="polite">{message}</p>
    </form>
  )
}

export default ProductForm
