// -------------------------------------------------------------
// config.js
// Simpan konfigurasi global untuk aplikasi (URL GAS, API_KEY, dsb.)
// -------------------------------------------------------------

// 1. Google Apps Script Web App URL (deploy sebagai Web App dengan akses PUBLIC)
const BASE_URL = 'https://script.google.com/macros/s/AKfycbyRNQ0Ge99pvYrU7HPqZs1nctNz0Syt3TDK7ydQGgtxQPHsLM-QIMw7pgFt4Tp-V7Po/exec';

// 2. Google Sheets API Key (hanya untuk GET data)
const GOOGLE_API_KEY = 'AIzaSyBf3LLK72GTjY-m4Wzh8vd0BBIujgyH5t0';

// 3. Nama‐nama Sheet (sesuai yang dibuat di GAS)
const SHEET_ROLES          = 'Roles';
const SHEET_USERS          = 'Users';
const SHEET_CATEGORIES     = 'Categories';
const SHEET_UNITS          = 'Units';
const SHEET_LOCATIONS      = 'Locations';
const SHEET_MATERIALS      = 'Materials';
const SHEET_PRICEDATA      = 'PriceData';
const SHEET_STOCK          = 'Stock';
const SHEET_STOCKTRANSFER  = 'StockTransfer';
const SHEET_PROJECTS       = 'Projects';
const SHEET_REQUESTS       = 'Requests';
const SHEET_REQUESTITEMS   = 'RequestItems';
const SHEET_GOODSRECEIPT   = 'GoodsReceipt';
const SHEET_GOODSRECEIPTITEMS = 'GoodsReceiptItems';
const SHEET_RETURNS        = 'Returns';
const SHEET_STOCKADJUST    = 'StockAdjustments';
const SHEET_ISSUES         = 'Issues';
const SHEET_ISSUEITEMS     = 'IssueItems';
const SHEET_AUDITLOGS      = 'AuditLogs';
const SHEET_EXPIRYBATCHES  = 'ExpiryBatches';
const SHEET_BARCODES       = 'Barcodes';

// 4. Telegram (opsional, request notifikasi dari GAS)
const TELEGRAM_BOT_TOKEN = '7244201868:AAE6zM03GbpvTmUR4XcCUz-nNObFwpSYTyc';
const TELEGRAM_CHAT_ID   = '968137878';

// 5. Timeout / Pengaturan AJAX
const AJX_TIMEOUT = 15000; // dalam milidetik (15 detik)

// 6. Role‐based Access (kode statis, nanti ambil dari sheet Users)
const ROLE_ADMIN        = 'admin';
const ROLE_KERANI       = 'kerani';
const ROLE_STAFF_TRAIN  = 'staff_training';
