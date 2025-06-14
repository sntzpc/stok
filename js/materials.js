// js/materials.js
const GAS_URL = BASE_URL;

export async function getMaterials() {
  const res = await fetch(`${GAS_URL}?action=getMaterials`);
  const json = await res.json();
  return json.data || [];
}

export async function addMaterial(data) {
  // data: {code, name, category_id, unit_id, has_expiry}
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'addMaterial',
      payload: data
    })
  });
  return await res.json();
}

export async function updateMaterial(id, data) {
  // data: {code, name, category_id, unit_id, has_expiry}
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'updateMaterial',
      payload: { id, ...data }
    })
  });
  return await res.json();
}

export async function deleteMaterial(id) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'deleteMaterial',
      payload: { id }
    })
  });
  return await res.json();
}
