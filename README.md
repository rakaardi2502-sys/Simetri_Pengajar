# SIMETRI 2026: Panduan Pembuatan Modul

> **Build Your Personal Website From Zero to Hero.**
> Dokumen ini adalah brief untuk mentor yang menulis modul SIMETRI 2026 dan penjelasan website final yang menjadi tujuan semua modul.

---

## 1. Tentang SIMETRI 2026

SIMETRI (Sistem Informasi Mengajar Teknologi Informasi) adalah program pengabdian masyarakat Departemen Social Development HMSI ITS. Bentuknya bootcamp 4 hari untuk siswa SMA/SMK sederajat, dengan fokus dasar pengembangan website.

Peserta berperan sebagai petualang dari 10 kerajaan di dunia **Arksivara** yang mencari harta karun legendaris **SIMETRI**. Peti itu hanya bisa dibuka dengan sebuah **Code**. Tiap materi yang dipelajari menjadi satu potongan Code (Hero Code) untuk melawan naga **Codevorous**.

| Hari | Tanggal | Tema |
|---|---|---|
| Day 1 | Sabtu, 17 Oktober 2026 | THE AWAKENING |
| Day 2 | Minggu, 18 Oktober 2026 | THE FORGE |
| Day 3 | Sabtu, 24 Oktober 2026 | THE TEMPERING |
| Day 4 | Minggu, 25 Oktober 2026 | THE VERDICT |

---

## 2. Tujuan Modul

Modul adalah **walkthrough step by step** menuju satu final project: website **"My Portofolio"** (lihat bagian 4).

Prinsipnya:

- Isinya **langkah praktik**, bukan penjelasan teori panjang. Konsep cukup 1 sampai 2 kalimat.
- Peserta harus bisa mengikuti modul **sendiri tanpa bantuan mentor**. Jadi tiap langkah harus spesifik.
- Satu langkah = satu aksi + satu hasil yang bisa dicek.
- Bahasa santai, singkat, cocok untuk anak SMA/SMK.
- Fokus ke hands-on goal modul masing-masing. Jangan melebar ke modul lain.

---

## 3. Pembagian Modul

**Deadline: Rabu, 14 Oktober 2026, pukul 23.59 WIB.**

| # | Modul | Tim | Goals hands-on |
|---|---|---|---|
| 1 | HTML & CSS | Alfian, Najwalina, Eka, Luna | Semantic HTML + CSS original (tanpa navbar dan footer) |
| 2 | Tailwind | Sulthan, Netta, Galang, Privthy | Ubah CSS original ke Tailwind |
| 3 | Flexbox / Slicing | Faizan, Vero, Izzuni, Zihni | Navbar |
| 4 | Parent & Child / Image | Bomantara, Ratu, Esam, Navita | Footer |
| 5 | Responsive | Fikir, Syafirah, Ulya, Asma | Navbar + footer jadi mobile |
| 6 | JavaScript | Gibran, Raka, Ghadiza, Jalu | Hamburger button |

### Alur antarmodul

```
HTML+CSS → Tailwind → Flexbox/Slicing (navbar) → Parent-Child/Image (footer) → Responsive → JavaScript (hamburger)
```

**Hasil akhir modul sebelumnya = starting point modul sesudahnya.** Tim yang bersebelahan wajib sinkron soal struktur file, nama class, dan penamaan aset. Tiap tim sebaiknya menyiapkan kode akhir modulnya dalam satu file dan membagikannya ke tim berikutnya lebih awal.

---

## 4. Tentang Website Final

### 4.1 Gambaran

Website one-page berjudul **My Portofolio** dengan tema game bergaya fantasi (papan kayu, gulungan kertas, kartu karakter). Peserta membuat versi personalnya selama bootcamp.

Teknologi: HTML, Tailwind CSS **v4 via CDN** (`@tailwindcss/browser@4`), dan JavaScript. Peserta tidak perlu install apa pun.

### 4.2 Struktur halaman (semantic)

| Bagian | Elemen utama | Isi | Dikerjakan di modul |
|---|---|---|---|
| Navbar | `<header>` + `<nav>` | Logo, menu (Home, About me, My Skills, My Experience), ikon sosmed, tombol hamburger | 3, 5, 6 |
| Hero | `<section id="hero">` | Judul "My Portofolio", nama peserta di gulungan kertas, tombol "Explore More" | 1, 2 |
| About Me | `<section id="aboutme">` | Kartu karakter (foto, nama, sekolah, tombol Contact Me) dan paragraf perkenalan | 1, 2, 4 |
| My Skills | `<section id="myskills">` | Papan kayu berisi daftar skill dan tombol ke My Experience | 1, 2 |
| My Experience | `<section id="experience">` | Judul dan 4 foto (grid 2x2) | 1, 2 |
| Footer | `<footer>` | Menu navigasi dan hak cipta dalam frame | 4, 5 |

Hierarki heading yang dipakai: **satu `<h1>` untuk judul halaman (hero)**, dan `<h2>` untuk judul tiap section.

### 4.3 Yang SAMA untuk semua kelompok

Semua kelompok memakai **struktur HTML yang persis sama**:

- Susunan elemen semantic (header, nav, main, section, footer)
- ID section (`hero`, `aboutme`, `myskills`, `experience`)
- Urutan section dan isi teks
- Nama file aset dan nama folder
- Nama class dan struktur Tailwind

### 4.4 Yang BERBEDA per kerajaan

Tiap kelompok mewakili satu kerajaan Arksivara. **Yang diganti hanya warna dan gambar.**

| # | Kerajaan | Elemen | Warna utama |
|---|---|---|---|
| 1 | Ignis Realm 🔥 | Api | Merah · Oranye · Kuning |
| 2 | Aquaria Kingdom 💧 | Air | Biru Laut · Tosca · Putih |
| 3 | Terra Dominion 🪨 | Tanah | Cokelat · Hijau Lumut · Abu-abu |
| 4 | Ventura Empire 🌬️ | Angin | Putih · Abu-abu · Biru Langit |
| 5 | Fulgur Clans ⚡ | Petir | Kuning Terang · Biru Listrik · Hitam |
| 6 | Glacia Principality ❄️ | Es | Biru Es · Putih · Silver |
| 7 | Verdantwood 🌿 | Hutan | Hijau Daun · Cokelat · Hijau Muda |
| 8 | Candoria 🍬 | Candy | Pink · Merah Muda · Putih |
| 9 | Nocturna Enclave 🌑 | Bayangan | Hitam · Ungu Gelap · Silver |
| 10 | Mechaforge 🤖 | Mekanik | Perak · Biru Baja · Oranye |

**Yang diganti:**

- Warna: semua kode warna di class Tailwind (saat ini tema cokelat/oranye: `#7A3D21`, `#F3B641`, `#F36F41`, `#F39241`, `#592918`, `#F9DCB4`, `#C07E4E`, `#F2405F`, `#4C1C0E`)
- Gambar: background, gulungan kertas, kartu, papan kayu, frame footer, dan ikon bila perlu

**Yang TIDAK diganti:** struktur HTML, teks, ID, nama class, dan nama file aset (gambar baru ditimpa dengan nama file yang sama).

> **Saran untuk tim Tailwind:** supaya ganti warna cukup di satu tempat, kumpulkan warna jadi *theme token* (misalnya `--color-primary`, `--color-accent`) lewat `@theme` di Tailwind v4, lalu pakai class `text-primary`, `bg-accent`, dan seterusnya. Saat ini final HTML masih memakai kode warna langsung (`text-[#7A3D21]`), jadi ini perlu disepakati dulu antara tim modul 1, 2, dan 5.

### 4.5 Struktur folder yang disepakati

```
simetri-portfolio/
├── index.html
├── css/
│   └── global.css          ← font (font-zelda, font-times) didefinisikan di sini
├── js/
│   ├── mobileNav.js        ← hamburger menu (modul 6)
│   └── bgScrollEffect.js   ← efek overlay saat scroll
└── images/
    ├── navbar/   (navbar-logo, x-logo, tiktok-logo, ig-logo, yt-logo, menu, exit)
    ├── hero/     (bg-hero, paper-scroll-hero-mobile, paper-scroll-hero-desktop)
    ├── about/    (foto-peserta, card)
    ├── My Skills/ (wood plank, wood plank - mobile)
    ├── fotoku/   (foto1, foto2, foto3, foto4)
    └── footer/   (bg-footer, frame-footer-mobile, frame-footer-desktop)
```

Catatan: path aset memakai `/images/...` (absolut), jadi website **harus dibuka lewat Live Server** (VS Code), bukan dengan klik dua kali file HTML.

---

## 5. Struktur Wajib Tiap Modul

1. **Goals**: apa yang jadi di akhir modul (sertakan screenshot hasil akhir)
2. **Persiapan**: tools, file/aset yang dibutuhkan, dan *starting point* (kode dari modul sebelumnya)
3. **Langkah-langkah** (bernomor)
   - Tiap langkah: instruksi + potongan kode + hasil yang diharapkan
   - Dikelompokkan per sub-bagian (misal: "Bagian Hero", "Bagian About Me")
4. **Checkpoint**: daftar cek singkat ("Kalau benar, tampilanmu seperti ini")
5. **Hasil akhir**: kode lengkap di akhir modul, jadi starting point modul berikutnya
6. **Troubleshooting** (opsional): 2 sampai 3 error yang paling sering muncul

### Contoh format satu langkah

````markdown
### Langkah 3: Buat judul Hero

Di dalam `<section id="hero">`, tambahkan judul:

```html
<h1>My Portofolio</h1>
```

**Hasil:** di browser muncul tulisan "My Portofolio" di bagian atas halaman.
````

---

## 6. Aturan Kerja

- **Final HTML jadi acuan.** Hasil akhir semua modul harus mengarah ke sana.
- Pakai aset dan struktur folder yang sama (bagian 4.5).
- Setiap langkah **dites sendiri** dulu oleh pembuat modul sebelum dikumpulkan.
- Satu tim, satu modul. Bagi kerja per sub-bagian dalam tim, lalu **satu orang jadi PIC** yang menyatukan.
- Format pengumpulan: Google Docs, satu dokumen per modul.
- Bahasa: Indonesia, santai, hindari istilah teknis tanpa penjelasan singkat.

---

## 7. Hal yang Perlu Dirapikan di Final HTML

Sebelum kode disalin ke modul, perbaiki dulu:

| Masalah | Perbaikan |
|---|---|
| `lg:aspect[701/63]` | Seharusnya `lg:aspect-[701/63]` (kurang tanda `-`) |
| `lg:gap-[00px]` di footer | Kemungkinan typo, cek nilai yang dimaksud |
| Link Instagram `.../simetri.hmsiits/s` | Ada `/s` di ujung yang sepertinya nyasar |
| "My Portofolio" | Ejaan baku: "Portfolio" (putuskan, lalu samakan di semua modul) |
| Banyak `<h1>` | Hanya satu `<h1>`; judul section lain jadi `<h2>` (penting untuk modul semantic HTML) |
| `<a>` langsung di dalam `<ul>` pada navbar | Bungkus tiap link dengan `<li>` |
| Folder `My Skills` dan file `wood plank.svg` | Nama berspasi rawan error; sebaiknya `my-skills/wood-plank.svg` |
| Komentar `NOTE: hapus h-[10000px]` | Hapus komentar yang sudah tidak relevan |
| `global.css`, `mobileNav.js`, `bgScrollEffect.js` | Pastikan ikut dibagikan, karena font dan efek bergantung pada file ini |

---

## 8. Checklist Sebelum Mengumpulkan Modul

- [ ] Ada screenshot hasil akhir di bagian Goals
- [ ] Starting point jelas dan kodenya disertakan
- [ ] Tiap langkah: satu aksi, satu hasil
- [ ] Sudah dicoba dari nol oleh orang lain di tim
- [ ] Nama class dan aset sama dengan final HTML
- [ ] Kode akhir lengkap di akhir modul
- [ ] Sudah dicek sinkron dengan tim modul sebelum dan sesudahnya
- [ ] Dikumpulkan sebelum **Rabu, 14 Oktober 2026, 23.59 WIB**

---

*© SIMETRI HMSI ITS 2026*