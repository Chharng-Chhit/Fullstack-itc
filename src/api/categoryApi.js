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

// Fetch all categories with optional search, pagination, etc.
export async function getCategories(params = {}) {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/categories${query ? `?${query}` : ''}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch categories (${response.status})`);
  }
  return await response.json();
}

export async function getCategoryDatas(search = '') {
  const response = await fetch(`${API_BASE_URL}/categories?search=${encodeURIComponent(search)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// Fetch single category by ID
export async function getCategoryById(id) {
  const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch category #${id}`);
  }
  return await response.json();
}

// Create new category
export async function createCategory(categoryData) {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to create category';
    throw new Error(message);
  }
  return data;
}

// Update existing category
export async function updateCategory(id, categoryData) {
  const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to update category';
    throw new Error(message);
  }
  return data;
}

// Delete category by ID
export async function deleteCategory(id) {
  const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || `Failed to delete category #${id}`);
  }
  return response.status === 204 ? null : await response.json();
}
