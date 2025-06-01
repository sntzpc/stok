// -------------------------------------------------------------
// main.js
// Skrip global/helper untuk seluruh halaman
// -------------------------------------------------------------

/**
 * fetchGET: wrapper fetch GET JSON dari GAS (atau Google Sheets API).
 * @param {string} url    ‒ URL endpoint (lengkap, sudah termasuk param ?).
 * @returns {Promise}     ‒ Promise dengan data hasil parse JSON.
 */
function fetchGET(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .catch(err => {
      console.error('fetchGET error:', err);
      throw err;
    });
}

/**
 * fetchPOST: wrapper fetch POST JSON ke GAS.
 * @param {string} url    ‒ URL endpoint (BASE_URL).
 * @param {object} data   ‒ Object data yang akan dikirim (akan di-JSON.stringify).
 * @returns {Promise}     ‒ Promise dengan data hasil parse JSON.
 */
function fetchPOST(url, data) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .catch(err => {
      console.error('fetchPOST error:', err);
      throw err;
    });
}

/**
 * showAlert: menampilkan alert Bootstrap dinamis di atas halaman.
 * @param {string} type    ‒ 'success' | 'danger' | 'warning' | 'info'
 * @param {string} message ‒ teks pesan yang ditampilkan
 */
function showAlert(type, message) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  document.body.prepend(wrapper);
  // Otomatis hilangkan setelah 5 detik
  setTimeout(() => {
    wrapper.querySelector('.alert').classList.remove('show');
    wrapper.querySelector('.alert').classList.add('fade');
    setTimeout(() => wrapper.remove(), 500);
  }, 5000);
}

/**
 * formatDate: format objek Date ke string 'YYYY-MM-DD HH:mm:ss'.
 * @param {Date} dt
 * @returns {string}
 */
function formatDate(dt) {
  const pad = n => (n < 10 ? '0' + n : n);
  const Y = dt.getFullYear();
  const M = pad(dt.getMonth() + 1);
  const D = pad(dt.getDate());
  const h = pad(dt.getHours());
  const m = pad(dt.getMinutes());
  const s = pad(dt.getSeconds());
  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}

/**
 * getCurrentUser: ambil data user tersimpan di localStorage (setelah login).
 * Struktur localStorage: { userId, username, role }
 */
function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
}

/**
 * requireLogin: helper untuk redirect ke login.html jika belum ada user di localStorage.
 
function requireLogin() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'pages/login.html';
    return false;
  }
  return true;
}
*/
/**
 * logout: hapus data login dan redirect.
 */
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'pages/login.html';
}

function fetchJSONP(action, callback) {
  // Jika action sudah berisi param (mis "getUsers&foo=bar"), pisah dulu
  var url  = BASE_URL + '?action=' + action;
  var cb   = 'cb' + Math.floor(Math.random() * 999999);
  // Buat nama fungsi callback di window
  window[cb] = function(res) {
    callback(res);
    // Hapus skrip JSONP setelah dijalankan
    document.body.removeChild(script);
    delete window[cb];
  };
  // Tambahkan parameter callback
  url += '&callback=' + cb;
  // Buat tag <script> untuk JSONP
  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// Jika halaman memanggil fungsi ini, cek sesi user
document.addEventListener('DOMContentLoaded', () => {
  // Contoh: jika bukan halaman login, langsung cek login
  if (!window.location.href.includes('login.html')) {
    requireLogin();
    const user = getCurrentUser();
    if (user) {
      document.getElementById('userWelcome').innerText = `Halo, ${user.username}`;
    }
  }
});
