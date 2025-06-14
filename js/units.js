// js/units.js
const GAS_URL = BASE_URL;

export async function getUnits() {
  const res = await fetch(`${GAS_URL}?action=getUnits`);
  const json = await res.json();
  return json.data || [];
}

export async function addUnit(name) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'addUnit',
      payload: { name }
    })
  });
  return await res.json();
}

export async function updateUnit(id, name) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'updateUnit',
      payload: { id, name }
    })
  });
  return await res.json();
}

export async function deleteUnit(id) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'deleteUnit',
      payload: { id }
    })
  });
  return await res.json();
}
