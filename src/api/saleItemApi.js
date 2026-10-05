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

// Fetch all sale items with optional filters (sale_id, product_id, pagination)
export async function getSaleItems(params = {}) {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/sale-items${query ? `?${query}` : ''}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch sale items (${response.status})`);
  }
  return await response.json();
}

export async function getSaleItemDatas(search = '') {
  const response = await fetch(`${API_BASE_URL}/sale-items?search=${encodeURIComponent(search)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// Fetch single sale item by ID
export async function getSaleItemById(id) {
  const response = await fetch(`${API_BASE_URL}/sale-items/${id}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch sale item #${id}`);
  }
  return await response.json();
}

// Create new sale item
export async function createSaleItem(itemData) {
  const response = await fetch(`${API_BASE_URL}/sale-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to create sale item';
    throw new Error(message);
  }
  return data;
}

// Update existing sale item
export async function updateSaleItem(id, itemData) {
  const response = await fetch(`${API_BASE_URL}/sale-items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to update sale item';
    throw new Error(message);
  }
  return data;
}

// Delete sale item by ID
export async function deleteSaleItem(id) {
  const response = await fetch(`${API_BASE_URL}/sale-items/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || `Failed to delete sale item #${id}`);
  }
  return response.status === 204 ? null : await response.json();
}
