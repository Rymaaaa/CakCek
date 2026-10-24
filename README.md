# Cakcek — Landing Page UMKM

Landing page berbasis arsitektur visual editorial kontras tinggi, dirancang khusus untuk memandu calon pelanggan langsung ke transaksi WhatsApp tanpa formulir berbelit.

## Tech Stack
- **Framework:** Vite 8 (Vanilla HTML + Handlebars partials)
- **Styling:** Tailwind CSS v4
- **Interaktivitas:** Alpine.js & AOS (Animate on Scroll)
- **Tipografi:** Inter (Sans-serif) & Playfair Display (Serif Italic)

---

## Memulai di Lokal

### 1. Prasyarat
Pastikan Node.js (versi 18+) sudah terpasang di komputer Anda.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Lokal
```bash
npm run dev
```
Buka browser dan akses `http://localhost:3000`.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil kompilasi akan tersimpan di direktori `dist/`. Anda dapat memverifikasinya secara lokal menggunakan:
```bash
npm run preview
```

---

## Struktur Direktori
```text
├── demos/              # Halaman demo siap pakai (Kuliner, Jasa, Retail)
├── public/             # File statis publik (logo, gambar produk)
├── src/
│   ├── components/     # Modul parsial HTML (navbar, hero, portofolio, dll.)
│   ├── main.js         # Titik masuk script utama (Alpine & AOS)
│   └── style.css       # Konfigurasi Tailwind CSS & gaya kustom
├── index.html          # Halaman utama landing page
├── vite.config.js      # Konfigurasi server Vite & Handlebars
└── package.json        # Dependensi dan script project
```

---

## Panduan Deployment ke Web Publik

### Opsi 1: Vercel (Paling Mudah & Otomatis)
1. Push project ini ke repository GitHub Anda.
2. Masuk ke [vercel.com](https://vercel.com) dan hubungkan akun GitHub Anda.
3. Klik **"Add New Project"**, lalu pilih repository ini.
4. Framework preset akan otomatis terdeteksi sebagai **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Klik **Deploy**. Website akan langsung aktif dengan domain `.vercel.app` gratis beserta SSL/HTTPS otomatis.

### Opsi 2: Netlify
1. Masuk ke [netlify.com](https://netlify.com) dan klik **"Import from Git"**.
2. Pilih repository GitHub project ini.
3. Atur konfigurasi build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Klik **Deploy site**.

### Opsi 3: Cloudflare Pages
1. Masuk ke Cloudflare Dashboard > **Workers & Pages**.
2. Buat project baru dari Git repository.
3. Pilih framework preset **Vite**.
4. Klik **Save and Deploy**.
