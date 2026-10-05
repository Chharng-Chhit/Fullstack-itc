const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9000/api'

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { Accept: 'application/json', ...options.headers },
  })

  if (response.status === 204) return null

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const validationMessage = Object.values(data.errors || {}).flat().join(' ')
    throw new Error(data.message || validationMessage || `User request failed (${response.status})`)
  }
  return data
}

export async function getUsers(search = '') {
  const query = typeof search === 'string'
    ? new URLSearchParams(search ? { search } : {}).toString()
    : new URLSearchParams(search).toString()
  return request(`${API_BASE_URL}/users${query ? `?${query}` : ''}`)
}

// Kept for existing callers that use this older function name.
export async function getUserDatas(search = '') {
  return getUsers(search)
}

export async function createUser(userData) {
  return request(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
}

export async function updateUser(id, userData) {
  return request(`${API_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
}

export async function deleteUser(id) {
  return request(`${API_BASE_URL}/users/${id}`, { method: 'DELETE' })
}
