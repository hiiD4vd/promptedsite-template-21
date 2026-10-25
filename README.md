# promptedsite-template-21

## PROMPTED SITE AI - 100% Offline WebGL & 3D Interactive Mirror

> Karya WebGL mutakhir berstandar global yang telah direkayasa ulang (*autonomous reverse-engineering & asset localization*) dan direbranding secara menyeluruh menjadi **PROMPTED SITE**, beroperasi 100% mandiri secara offline tanpa ketergantungan iframe eksternal, tracker, atau CDN pihak ketiga.

---

## 🌟 Fitur Utama & Arsitektur Teknis

1. **100% Asset Sovereignty & Zero External Dependencies**:
   - **Bebas Iframe**: Video modal reel yang sebelumnya memuat iframe Vimeo telah digantikan dengan **Native HTML5 Offline Video Player Adapter** (`/images/hero_reel.mp4`) dengan kontrol volume, play/pause, dan custom cursor 100% lokal.
   - **Zero Tracker**: Tracker eksternal Cloudflare Insights beacon (`static.cloudflareinsights.com`) telah dibuang bersih.
   - **Local WASM & Binary Assets**: Semua model 3D biner (`.buf`), animasi Rive (`.riv`), WebAssembly modules (`.wasm`), MSDF font atlas (`Inter.json`, `Inter.webp`), dan tekstur PBR tersimpan di `public/`.

2. **Rebranding Penuh: PROMPTED SITE**:
   - **Typography & Vector Wordmark**: Logo SVG `#logo-tmpl` dirender dengan tipografi geometris tebal **PROMPTED SITE** yang tersinkronisasi dinamis dari posisi Hero ke navigation bar.
   - **Smart Flip Encryption**: Nilai default enkripsi 3D coaster diperbarui menjadi **PROMPTED** dan dirender langsung di atas material cork dengan font 3D MSDF.
   - **Copywriting**: Semua salinan narasi, card, badge produk (`PROMPTED`, `PROMPTED Pro`, `PROMPTED Pro Max`), model badge (`PROMPTED-1 MODEL`), hingga footer dan sitasi telah diperbarui ke identitas Prompted Site.

3. **Mesin WebGL & 3D Binary Geometries**:
   - Geometri biner ArrayBuffer kustom (`coaster.buf`, `coaster_hero_animation.buf`, `hand.buf`, `hand_animation.buf`, `CAMERA_ANIM.buf`, dll.).
   - Post-processing pipeline dengan BRDF lookups, SMAA antialiasing, gobo lighting, dan depth-of-field.
   - Interaksi gesekan cork (*Grip Friction Simulator*), galeri wearable interaktif, dan simulasi fisika termal.

---

## 📁 Struktur Direktori

```
oryzo/
├── index.html                   # HTML utama (bebas iframe, tracker, & rebranding PROMPTED SITE)
├── package.json                 # Konfigurasi dependensi Vite
├── vite.config.ts               # Konfigurasi build & dev server
├── .gitignore                   # Ignore node_modules & dist
├── README.md                    # Dokumentasi arsitektur proyek
└── public/
    ├── _astro/                  # Bundle JS & CSS (OfflineVideoPlayer & PROMPTED constants)
    ├── api/                     # Local API mocks (oembed.json)
    ├── fonts/                   # Font lokal (Halyard Variable, Literata, DM Mono, MSDF Inter)
    ├── images/                  # Aset gambar & video (hero_reel.mp4, wearable-gallery, testimonies)
    ├── meta/                    # Favicon, Apple Touch Icon, Manifest & OpenGraph images
    ├── models/                  # Binary geometries & animation buffers (.buf)
    ├── rive/                    # Rive WebAssembly engine (.wasm) & vector animations (.riv)
    └── textures/                # PBR normal/roughness/height textures, gobo maps & lighting
```

---

## 🚀 Cara Menjalankan

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser di: `http://localhost:5176/`

### 3. Build Produksi
```bash
npm run build
```
Hasil build mandiri siap di-deploy langsung ke direktori `dist/`.

### 4. Menjalankan Preview Hasil Build
```bash
npm run preview
```
