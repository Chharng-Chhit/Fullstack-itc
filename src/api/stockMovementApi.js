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

// Fetch all stock movements with search, filters (product_id, type), and pagination
export async function getStockMovements(params = {}) {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/stock-movements${query ? `?${query}` : ''}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch stock movements (${response.status})`);
  }
  return await response.json();
}

export async function getStockMovementDatas(search = '') {
  const response = await fetch(`${API_BASE_URL}/stock-movements?search=${encodeURIComponent(search)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// Fetch single stock movement by ID
export async function getStockMovementById(id) {
  const response = await fetch(`${API_BASE_URL}/stock-movements/${id}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch stock movement #${id}`);
  }
  return await response.json();
}

// Create new stock movement
export async function createStockMovement(movementData) {
  const response = await fetch(`${API_BASE_URL}/stock-movements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(movementData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to create stock movement';
    throw new Error(message);
  }
  return data;
}

// Update existing stock movement
export async function updateStockMovement(id, movementData) {
  const response = await fetch(`${API_BASE_URL}/stock-movements/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(movementData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to update stock movement';
    throw new Error(message);
  }
  return data;
}

// Delete stock movement by ID
export async function deleteStockMovement(id) {
  const response = await fetch(`${API_BASE_URL}/stock-movements/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || `Failed to delete stock movement #${id}`);
  }
  return response.status === 204 ? null : await response.json();
}
