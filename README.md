# SIMETRI 2026: Panduan Pembuatan Modul

Brief untuk mentor penulis modul · Departemen Social Development HMSI ITS

## 1. Tentang SIMETRI 2026

SIMETRI (Sistem Informasi Mengajar Teknologi Informasi) adalah program pengabdian masyarakat Departemen Social Development HMSI ITS. Bentuknya bootcamp 4 hari untuk siswa SMA/SMK sederajat, dengan fokus dasar pengembangan website. Tema besarnya: **Build Your Personal Website From Zero to Hero.**

| Hari | Tanggal | Ruang |
| --- | --- | --- |
| Day 1 | Sabtu, 17 Oktober 2026 | 2208-2209 |
| Day 2 | Minggu, 18 Oktober 2026 | 2208-2209 |
| Day 3 | Sabtu, 24 Oktober 2026 | 2208-2209 |
| Day 4 | Minggu, 25 Oktober 2026 | 2208-2209 |

## 2. Tujuan Modul

Modul adalah **walkthrough step by step** menuju satu final project: website My Portofolio (lihat bagian 4). Prinsipnya:

- Isinya langkah praktik, bukan penjelasan teori panjang. Konsep cukup 1 sampai 2 kalimat.
- Tiap langkah harus spesifik.
- Satu langkah = satu aksi + satu hasil yang bisa dicek.
- Bahasa santai, singkat, cocok untuk anak SMA/SMK.
- Fokus ke hands-on goal modul masing-masing. Jangan melebar ke modul lain.

## 3. Pembagian Modul

**Deadline: Rabu, 14 Oktober 2026, pukul 23.59 WIB.**

| # | Modul | Tim | Goals hands-on |
| --- | --- | --- | --- |
| 1 | HTML & CSS | Alfian, Najwalina, Eka, Luna | Semantic HTML + CSS original (tanpa navbar dan footer) dan (tanpa image samsek, no bg, no kertas, no card, kecuali section My experience) |
| 2 | Tailwind | Sulthan, Netta, Galang, Privthy | Ubah CSS original ke Tailwind |
| 3 | Flexbox / Slicing | Faizan, Vero, Izzuni, Zihni | Navbar |
| 4 | Parent & Child / Image | Bomantara, Ratu, Esam, Navita | Footer |
| 5 | Responsive | Fikir, Syafirah, Ulya, Asma | Footer jadi mobile |
| 6 | JavaScript | Gibran, Raka, Ghadiza, Jalu | Navbar mobile dan Hamburger button |

### Alur antarmodul

HTML+CSS → Tailwind → Flexbox/Slicing (navbar) → Parent-Child/Image (footer) → Responsive → JavaScript (hamburger)

Hasil akhir modul sebelumnya = starting point modul sesudahnya. Tim yang bersebelahan wajib sinkron soal struktur file, nama class, dan penamaan aset. Tiap tim sebaiknya menyiapkan kode akhir modulnya dalam satu file dan membagikannya ke tim berikutnya lebih awal.

## 4. Tentang Website Final

### 4.1 Gambaran

Website one-page berjudul **My Portofolio** dengan tema game bergaya fantasi (papan kayu, gulungan kertas, kartu karakter). Peserta membuat versi personalnya selama bootcamp.

Teknologi: HTML, Tailwind CSS v4 via CDN (`@tailwindcss/browser@4`), dan JavaScript. Peserta tidak perlu install apa pun.

### 4.2 Struktur halaman (semantic)

| Bagian | Elemen utama | Isi | Modul |
| --- | --- | --- | --- |
| Navbar | header + nav | Logo, menu (Home, About me, My Skills, My Experience), ikon sosmed, tombol hamburger | 3, 5, 6 |
| Hero | section #hero | Judul My Portofolio, nama peserta di gulungan kertas, tombol Explore More | 1, 2, + Sesi PKF |
| About Me | section #aboutme | Kartu karakter (foto, nama, sekolah, tombol Contact Me) dan paragraf perkenalan | 1, 2, + Sesi PKF |
| My Skills | section #myskills | Papan kayu berisi daftar skill dan tombol ke My Experience | 1, 2 + Sesi PKF |
| My Experience | section #experience | Judul dan 4 foto (grid 2x2) | 1, 2 + Sesi PKF |
| Footer | footer | Menu navigasi dan hak cipta dalam frame | 4, 5 |

Hierarki heading: satu h1 untuk judul halaman (hero), dan h2 untuk judul tiap section.

> ***UNTUK RESPONSIVE 4 SECTION UTAMA DAN FINISHIING 4 SECTION UTAMA (GAMBAR******,****** BG******,****** DLL) AKAN DISELESAIKAN WAKTU PKF****** ******(******D******AY****** 3******)******,****** ****** JADI ITU DILUAR MODUL***

### 4.3 Yang SAMA untuk semua kelompok

- Susunan elemen semantic (header, nav, main, section, footer)
- ID section (hero, aboutme, myskills, experience)
- Urutan section dan isi teks
- Nama file aset dan nama folder
- Nama class dan struktur Tailwind

### 4.4 Yang BERBEDA per kerajaan

Tiap kelompok mewakili satu kerajaan Arksivara. **Yang diganti hanya warna dan gambar.**

1. Pallete Warna
2. Background
3. Card (about me)
4. Button&#32;

**Yang TIDAK diganti:** struktur HTML, teks, ID, nama class, dan nama file aset (gambar baru ditimpa dengan nama file yang sama).

### 4.5 Struktur folder yang disepakati

```
simetri-portfolio/
├── index.html
├── css/
│   └── global.css          (font font-zelda dan font-times didefinisikan di sini)
├── js/
│   ├── mobileNav.js        (hamburger menu, modul 6)
│   └── bgScrollEffect.js   (efek overlay saat scroll)
└── images/
    ├── navbar/    (navbar-logo, x-logo, tiktok-logo, ig-logo, yt-logo, menu, exit)
    ├── hero/      (bg-hero, paper-scroll-hero-mobile, paper-scroll-hero-desktop)
    ├── about/     (foto-peserta, card)
    ├── My Skills/ (wood plank, wood plank - mobile)
    ├── fotoku/    (foto1, foto2, foto3, foto4)
    └── footer/    (bg-footer, frame-footer-mobile, frame-footer-desktop)
```

Catatan: path aset memakai /images/... (absolut), jadi website harus dibuka lewat Live Server (VS Code), bukan dengan klik dua kali file HTML.

## 5. Struktur Wajib Tiap Modul

1. **Goals**: apa yang jadi di akhir modul (sertakan screenshot hasil akhir)
2. **Persiapan**: tools, file/aset yang dibutuhkan, dan starting point (kode dari modul sebelumnya)
3. **Langkah-langkah** (bernomor)
   - Tiap langkah: instruksi + potongan kode + hasil yang diharapkan (screenshoot)
   - Dikelompokkan per sub-bagian (misal: Bagian Hero, Bagian About Me)&#32;
4. **Checkpoint**: daftar cek singkat (Kalau benar, tampilanmu seperti ini) berupa screenshoot
5. **Troubleshooting** (opsional): 2 sampai 3 error yang paling sering muncul

### Contoh format satu langkah

> **Langkah 3: Buat judul Hero**
>
> Di dalam section hero, tambahkan judul:
>
> ```
> <h1>My Portofolio</h1>
> ```
>
> Tag `<h1>` dalam HTML adalah **elemen heading atau judul tingkat tertinggi yang digunakan untuk mendefinisikan judul utama atau subjek penting dari suatu halaman web**.
>
> **Hasil:** di browser muncul tulisan My Portofolio di bagian atas halaman. (screenshot)

## 6. Aturan Kerja

- Final HTML jadi acuan. Hasil akhir semua modul harus mengarah ke sana.
- Pakai aset dan struktur folder yang sama (bagian 4.5).
- Setiap langkah dites sendiri dulu oleh pembuat modul sebelum dikumpulkan.
- Satu tim, satu modul. Bagi kerja per sub-bagian dalam tim, lalu satu orang jadi PIC yang menyatukan.
- Format dokumen(make a copy): <https://docs.google.com/document/d/1OcsZLATzbwoenc_vVvS3LE6NRqnX6HerbntHlM7AHqA/edit?usp=sharing>
- Bahasa: Indonesia,

## 7. Checklist Sebelum Mengumpulkan Modul

- ☐ Ada screenshot hasil akhir di bagian Goals
- ☐ Starting point jelas dan kodenya disertakan
- ☐ Tiap langkah: satu aksi, satu hasil
- ☐ Sudah dicoba dari nol oleh orang lain di tim
- ☐ Nama class dan aset sama dengan final HTML
- ☐ Kode akhir lengkap di akhir modul
- ☐ Sudah dicek sinkron dengan tim modul sebelum dan sesudahnya
- ☐ Dikumpulkan sebelum Rabu, 14 Oktober 2026, 23.59 WIB

© SIMETRI HMSI ITS 2026