========================================================================
PROYEK PENGEMBANGAN WEB: TECH INNOVATION HUB
========================================================================

INFORMASI PENGEMBANG (AUTHOR)
-----------------------------
Nama        : [Bayu Fajar Pamungkas]
NIM / Kelas : [06025012]
Versi       : 1.0.0

DESKRIPSI PROYEK
----------------
Tech Innovation Hub adalah sebuah landing page modern yang dirancang untuk
merepresentasikan perusahaan teknologi masa depan. Website ini dibangun
menggunakan pendekatan Single Page Application (SPA) sederhana dimana
navigasi antar halaman dilakukan tanpa reload browser, memberikan pengalaman
pengguna (UX) yang mulus dan cepat.

TEKNOLOGI YANG DIGUNAKAN
------------------------
1. HTML5 (Semantic Structure)
   - Digunakan untuk kerangka struktur halaman yang aksesibel.
   - Penerapan form validation native.
   
2. CSS3 (Styling & Responsive Design)
   - Layout menggunakan Flexbox dan CSS Grid.
   - Desain Responsif (Mobile-First approach).
   - Efek Glassmorphism pada header.
   - Animasi transisi halus (hover effects).

3. JavaScript (Vanilla / Murni)
   - Manipulasi DOM untuk navigasi halaman (SPA logic).
   - Logika animasi penghitung angka (Counter Animation).
   - Penanganan event form (Form Handling).
   - Konfigurasi tema dinamis.

STRUKTUR FOLDER & FILE
----------------------
/ (Root Directory)
├── index.html      # File utama struktur halaman
├── style.css       # File stylesheet eksternal (menggantikan inline style)
├── script.js       # Logika pemrograman dan interaktivitas
├── readme.txt      # Dokumentasi proyek ini
└── /img            # (Opsional) Folder penyimpanan aset gambar/ikon

DETAIL PENGEMBANGAN & PERUBAHAN (CHANGELOG)
-------------------------------------------
Dalam proses pengembangan, dilakukan beberapa optimasi kode dari versi awal
(prototipe) menjadi versi final (production ready):

1. Separation of Concerns (Pemisahan Kode)
   - Memisahkan kode HTML, CSS, dan JS ke dalam file terpisah agar kode
     lebih bersih (Clean Code), mudah dibaca (Readable), dan mudah
     dikelola (Maintainable).

2. Penghapusan Inline Styles
   - Semua styling inline pada tag HTML dipindahkan ke file `style.css`
     untuk mematuhi standar performa dan praktik terbaik (Best Practices).

3. Optimasi Kompatibilitas Browser (Cross-Browser Compatibility)
   - Menambahkan prefix `-webkit-backdrop-filter` pada header agar efek
     blur/kaca berjalan lancar di browser Safari dan perangkat iOS.

4. Peningkatan Aksesibilitas (Accessibility/A11y)
   - Menambahkan atribut `aria-label`, `for`, dan `id` pada elemen Form
     (terutama pada Dropdown Select) agar ramah terhadap pembaca layar
     (Screen Readers) dan memenuhi standar WCAG.

5. Integrasi Form Pendaftaran
   - Mengganti tautan Google Form eksternal dengan Form Internal yang
     terintegrasi langsung dengan tema website.
   - Form dilengkapi dengan validasi input HTML5.

6. Perbaikan Layout (Bug Fixing)
   - Memperbaiki alinyemen (alignment) pada menu navigasi Header agar
     tombol dan link sejajar vertikal secara presisi menggunakan Flexbox.

CARA MENJALANKAN
----------------
1. Pastikan file `index.html`, `style.css`, dan `script.js` berada dalam
   satu folder yang sama.
2. Buka file `index.html` menggunakan browser modern (Chrome, Edge, Firefox,
   atau Safari).
3. Website siap digunakan tanpa memerlukan instalasi server lokal (karena
   tidak menggunakan backend PHP/Node.js).

CATATAN KHUSUS
--------------
- File SDK bawaan template (`/_sdk/element_sdk.js`, dll) telah dihapus/tidak
  digunakan karena logika website telah ditulis ulang (refactoring) secara
  mandiri menggunakan JavaScript murni di `script.js` untuk efisiensi.

========================================================================
Copyright © 2025 - Tech Innovation Hub Project
========================================================================