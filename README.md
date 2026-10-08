# Harmonisasi Tata Tulis Aksara Jawa

Panduan interaktif untuk pengetikan dan harmonisasi tata tulis Aksara Jawa — membandingkan berbagai sistem penulisan dari Sriwedari/KBJ, Simplified, Cara Kawi, hingga Tradisional dalam satu tabel terpadu.

> **Live Demo:** [`https://www.kandangjago.com`](https://www.kandangjago.com)

[Aksara Jawa](https://img.shields.io/badge/Aksara-Jawa-%230056b3?style=for-the-badge)
[Harmonisasi Aksara](https://img.shields.io/badge/Harmonisasi-Aksara-%230056b3?style=for-the-badge)
[License](https://img.shields.io/badge/license-KANDANGJAGO-green?style=flat-square)
[Made in Yogyakarta](https://img.shields.io/badge/Made%20in-Yogyakarta-red?style=flat-square)

---

### ✨ Fitur Utama

Tabel ini bukan sekadar tabel statis, ini adalah alat riset:

**1. 8 Kolom Pemetaan Lengkap**
- `Input Latin` - Input keyboard latin
- `Sriwedari / KBJ` - Kongres Bahasa Jawa / Sriwedari
- `Simplified` - Bentuk sederhana modern
- `Cara Kawi` - Varian Kawi / Jawa Kuno
- `Tradisional` - Bentuk tradisional
- `Unicode` - Kode Unicode Javanese (U+A984 – U+A9B3)
- `IPA` - Pelafalan International Phonetic Alphabet
- `JGST` - Sistem transliterasi Javanese General System of Transliteration

**2. Preset View**
Dropdown untuk fokus riset cepat:
- `View Semua` - Tampilkan semua kolom
- `View Aksara Jawa` - Hanya Sriwedari, Simplified, Kawi, Tradisional
- `View IPA & JGST` - Fokus fonetik & transliterasi
- `View Jawa Baru` - Sriwedari + Simplified
- `View Jawa Kuno` - Cara Kawi + Tradisional

**3. Filter Kolom Dinamis**
Custom multiselect dropdown untuk hide/show kolom individual tanpa reload.

**4. Sorting Cerdas (Urutan)**
- `Berdasarkan Kategori` - Wyanjana, Murda, Mahaprana, Rekan, Swara
- `Alfabet Latin (A-Z)` - Sorting `lat`
- `Urutan Hanacaraka` - Urutan `ha-na-ca-ra-ka` (field `hana`)
- `Warga Aksara` - Ka-Kha-Ga-Gha-Nga (field `warga`)
- `Kode Unicode` - U+A984 s.d U+A9B3

**5. Font Mode**
- `Font Default`:
  - `Ngayogyan New` untuk Sriwedari & Simplified
  - `Ngayogyan Old` untuk Kawi & Tradisional
  - `Charis` untuk IPA
  - `Gentium` untuk JGST (merah, bold)
- `Noto Sans Javanese` - Mode komparasi universal Google Noto

**6. Ukuran IPA & JGST Adjustable**
Slider 1.0rem – 2.0rem untuk riset diakritik yang presisi.

---

### 📁 Struktur File

Untuk GitHub Pages, pastikan struktur repo seperti ini:

```
/ (root)
├── index.html              # file yang kamu upload ini
├── README.md               # file ini
├── ngayogyan.ttf           # Font Kawi & Tradisional
├── ngayogyann.ttf          # Font Sriwedari/KBJ & Simplified
├── charis.ttf              # Font IPA (Charis SIL)
└── gentium.ttf             # Font JGST (Gentium)
```

> **Penting:** Keempat file `.ttf` harus ada di root folder yang sama dengan `index.html`, sesuai deklarasi `@font-face` di CSS. Tanpa itu, aksara akan fallback ke Noto Sans Javanese.

### 🚀 Cara Deploy ke GitHub Pages

1.  Buat repo baru, misal `harmonisasi-aksara-jawa`
2.  Upload `index.html` + 4 file font `.ttf` + `README.md` ini
3.  Masuk ke **Settings > Pages**
4.  Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
5.  Save. Tunggu 1-2 menit, link demo kamu akan jadi: `https://username.github.io/harmonisasi-aksara-jawa/`

### 🧩 Data yang Dicakup

Saat ini `aksaraData` di dalam `index.html` mencakup:

- **Wyanjana (Nglegena):** h, n, c, r, k, d, t, s, w, l, p, dh, j, y, ny, m, g, b, th, ng
- **Murda (Kapital):** N, K, T, S, P, D, C, R, DH
- **Mahaprana & Varian:** kh (ꦑ), gh (ꦓ), ch, Th/thh, Dh/dhh, dH, sy (ꦯ), sh (ꦰ)
- **Rekan (Arab & Serapan):** f, v, z, dz, q, hh, xng, ts, shh, xsy, dl, tth, zh, x
- **Swara (Vokal Mandiri):** A, AA, I, II, Ix, U, UU, E Pepet, É/È Taling, O, AI, AU, RE Pa Cerek, REE, LE Nga Lelet, LEE

Setiap baris menyimpan: `cat, id, lat, kbj, simp, mk, trad, uni, ipa, jgst, hana, warga`

### 🛠️ Teknologi

- Pure HTML5 + CSS3 + Vanilla JavaScript (tanpa framework)
- `position: sticky` header untuk tabel panjang
- Custom dropdown multiselect tanpa library
- Responsive controls dengan `flex-wrap`
- Import `Noto Sans` dari Google Fonts sebagai fallback

### 🎯 Rencana Pengembangan

- [ ] Tambah Pasangan, Sandhangan Swara & Panyigeg
- [ ] Search/filter baris berdasarkan input latin
- [ ] Tombol copy aksara & copy unicode
- [ ] Export ke CSV / JSON
- [ ] Mode gelap (dark mode)

### 🤝 Kontribusi

Sangat terbuka! Aksara Jawa adalah warisan bersama. Jika ada koreksi penulisan, tambahan aksara, atau perbaikan transliterasi IPA/JGST, silakan:

1. Fork repo ini
2. Edit array `aksaraData` di `index.html`
3. Buat Pull Request dengan sumber rujukan (misal: Kamus KBJ, Unicode 15.0 Javanese block)

### 📜 Lisensi & Atribusi Font

- Kode `index.html` ini: **MIT License** - bebas pakai untuk edukasi & pengembangan
- Font:
  - `Ngayogyan` & `NgayogyanN` - karya komunitas Aksara Jawa
  - `Charis SIL` & `Gentium` - SIL International (SIL Open Font License)
  - `Noto Sans Javanese` - Google (OFL)

---

**Matur nuwun** — Dibuat dengan ❤️ dari Sewon, Yogyakarta untuk pelestarian Aksara Jawa di era digital.

> Jika kamu menggunakan project ini untuk skripsi, workshop, atau muatan lokal sekolah, jangan lupa cantumkan link repo ini ya!
