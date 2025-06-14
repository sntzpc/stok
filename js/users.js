// js/users.js
const GAS_URL = BASE_URL;

// Ambil seluruh user (untuk list user & manajemen role)
export async function getUsers() {
  const res = await fetch(`${GAS_URL}?action=getUsers`);
  const json = await res.json();
  return json.data || [];
}

// Autentikasi user (login)
export async function authenticateUser(username, password) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'authenticateUser',
      payload: { username, password }
    })
  });
  return await res.json();
}

// Tambah user (opsional, jika diizinkan lewat GAS)
export async function addUser(data) {
  // data: {username, password, role, ...}
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'addUser',
      payload: data
    })
  });
  return await res.json();
}

// Update user
export async function updateUser(id, data) {
  // data: {username, password, role, ...}
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'updateUser',
      payload: { id, ...data }
    })
  });
  return await res.json();
}

// Hapus user
export async function deleteUser(id) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'deleteUser',
      payload: { id }
    })
  });
  return await res.json();
}
