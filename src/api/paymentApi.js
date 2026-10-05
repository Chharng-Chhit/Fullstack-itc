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

// Fetch all payments with search, filters (sale_id, payment_method), and pagination
export async function getPayments(params = {}) {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/payments${query ? `?${query}` : ''}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch payments (${response.status})`);
  }
  return await response.json();
}

export async function getPaymentDatas(search = '') {
  const response = await fetch(`${API_BASE_URL}/payments?search=${encodeURIComponent(search)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// Fetch single payment by ID
export async function getPaymentById(id) {
  const response = await fetch(`${API_BASE_URL}/payments/${id}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch payment #${id}`);
  }
  return await response.json();
}

// Create new payment
export async function createPayment(paymentData) {
  const response = await fetch(`${API_BASE_URL}/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(paymentData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to create payment';
    throw new Error(message);
  }
  return data;
}

// Update existing payment
export async function updatePayment(id, paymentData) {
  const response = await fetch(`${API_BASE_URL}/payments/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(paymentData),
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || Object.values(data.errors || {}).flat().join(' ') || 'Failed to update payment';
    throw new Error(message);
  }
  return data;
}

// Delete payment by ID
export async function deletePayment(id) {
  const response = await fetch(`${API_BASE_URL}/payments/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || `Failed to delete payment #${id}`);
  }
  return response.status === 204 ? null : await response.json();
}
