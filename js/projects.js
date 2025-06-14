// js/projects.js
const GAS_URL = BASE_URL;

// Ambil seluruh data project
export async function getProjects() {
  const res = await fetch(`${GAS_URL}?action=getProjects`);
  const json = await res.json();
  return json.data || [];
}

// Tambah project baru
export async function addProject(data) {
  // data: {code, name, start_date, end_date}
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'addProject',
      payload: data
    })
  });
  return await res.json();
}

// Update project
export async function updateProject(id, data) {
  // data: {code, name, start_date, end_date}
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'updateProject',
      payload: { id, ...data }
    })
  });
  return await res.json();
}

// Hapus project
export async function deleteProject(id) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'deleteProject',
      payload: { id }
    })
  });
  return await res.json();
}
