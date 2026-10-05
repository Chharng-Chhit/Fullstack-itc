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

// Fetch all sales with search, cashier filter, status filter, and pagination
export async function getSales(params = {}) {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/sales${query ? `?${query}` : ''}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch sales (${response.status})`);
  }
  return await response.json();
}

export async function getSaleDatas(search = '') {
  const response = await fetch(`${API_BASE_URL}/sales?search=${encodeURIComponent(search)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// Fetch single sale with user, saleItems, and payments
export async function getSaleById(id) {
  const response = await fetch(`${API_BASE_URL}/sales/${id}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch sale #${id}`);
  }
  return await response.json();
}

// Create new sale
export async function createSale(saleData) {
  const response = await fetch(`${API_BASE_URL}/sales`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(saleData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to create sale';
    throw new Error(message);
  }
  return data;
}

// Update existing sale
export async function updateSale(id, saleData) {
  const response = await fetch(`${API_BASE_URL}/sales/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(saleData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to update sale';
    throw new Error(message);
  }
  return data;
}

// Delete sale by ID
export async function deleteSale(id) {
  const response = await fetch(`${API_BASE_URL}/sales/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || `Failed to delete sale #${id}`);
  }
  return response.status === 204 ? null : await response.json();
}
