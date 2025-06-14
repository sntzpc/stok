// js/categories.js
const GAS_URL = BASE_URL;

export async function getCategories() {
  const res = await fetch(`${GAS_URL}?action=getCategories`);
  const json = await res.json();
  return json.data || [];
}

export async function addCategory(name) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'addCategory',
      payload: { name }
    })
  });
  return await res.json();
}

export async function updateCategory(id, name) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'updateCategory',
      payload: { id, name }
    })
  });
  return await res.json();
}

export async function deleteCategory(id) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'deleteCategory',
      payload: { id }
    })
  });
  return await res.json();
}
