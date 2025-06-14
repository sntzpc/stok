// js/locations.js
const GAS_URL = BASE_URL;

export async function getLocations() {
  const res = await fetch(`${GAS_URL}?action=getLocations`);
  const json = await res.json();
  return json.data || [];
}

export async function addLocation(name) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'addLocation',
      payload: { name }
    })
  });
  return await res.json();
}

export async function updateLocation(id, name) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'updateLocation',
      payload: { id, name }
    })
  });
  return await res.json();
}

export async function deleteLocation(id) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'deleteLocation',
      payload: { id }
    })
  });
  return await res.json();
}
