const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9000/api';

function buildQuery(params = {}) {
  if (typeof params === 'string') {
    return params ? `search=${encodeURIComponent(params)}` : '';
  }
  const filtered = Object.entries(params).filter(
    ([_, val]) => val !== undefined && val !== null && val !== ''
  );
  return new URLSearchParams(filtered).toString();
}

// Fetch all products with search, pagination, and filters
export async function getProducts(params = {}) {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/products${query ? `?${query}` : ''}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch products (${response.status})`);
  }
  return await response.json();
}

export async function getProductDatas(search = '') {
  const response = await fetch(`${API_BASE_URL}/products?search=${encodeURIComponent(search)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// Fetch single product by ID
export async function getProductById(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch product #${id}`);
  }
  return await response.json();
}

// Create new product
export async function createProduct(productData) {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(productData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to create product';
    throw new Error(message);
  }
  return data;
}

// Update existing product
export async function updateProduct(id, productData) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(productData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to update product';
    throw new Error(message);
  }
  return data;
}

// Delete product by ID
export async function deleteProduct(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || `Failed to delete product #${id}`);
  }
  return response.status === 204 ? null : await response.json();
}
