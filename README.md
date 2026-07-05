# Undangan Digital — Aqiqah (Storybook bayi)

Konsep **buku cerita anak** — strukturnya halaman demi halaman (bukan gulir-section undangan biasa):

- **BookCover** — sampul buku, tombol *Buka Buku*
- **Announcement** (Hal. 1) — pengumuman kelahiran
- **BirthStats** (Hal. 2) — data kelahiran (tanggal, jam, berat, panjang)
- **NameMeaning** (Hal. 3) — arti nama dipecah per kata
- **EventPage** (Hal. 4) — undangan acara aqiqah + add to calendar
- **Gallery** (Hal. 5) — album foto + lightbox
- **MapEmbed** (Hal. 6) — lokasi
- **RSVPForm** (Hal. 7) — konfirmasi
- **WishesForm** (Hal. 8) — doa & ucapan
- **Footer** — halaman penutup "Tamat"

Tiap section dibungkus komponen **`ui/Page`** (kartu halaman bertepi titik + nomor halaman). Latar **`Decorations`**: awan, bulan, bintang lembut. Pastel langit & peach, font **Quicksand + Caveat + Nunito**. Tanpa countdown (fokus alur cerita).

## Menjalankan
```bash
npm install && npm run dev
```
Semua konten di **`lib/data.js`** (objek `baby`, `nameMeaning`, `event`).
