// ============================================================
//  KONFIGURASI UNDANGAN — Aqiqah (Storybook bayi)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Aqiqah — Aisyah Khairunnisa',
    description: 'Sebuah kabar bahagia telah lahir. Dengan suka cita kami mengundang Anda di acara aqiqah putri kami.',
  },

  // -- Teks pembuka buku --
  opening: {
    cover: 'Sebuah Kabar Bahagia',
    chapter: 'Bab Pertama',
    announce: 'Alhamdulillah, telah lahir buah hati kami',
  },

  // -- Sang Bayi (tokoh utama) --
  baby: {
    name: 'Aisyah',
    fullName: 'Aisyah Khairunnisa',
    gender: 'Putri', // Putra / Putri
    birthDate: 'Senin, 4 Mei 2026',
    birthTime: '05.30 WIB',
    weight: '3,2 kg',
    length: '49 cm',
    parents: 'Bpk. Arif & Ibu Salma',
    photo: 'https://placehold.co/600x800/a9cce6/4b4b63.png?text=Foto+Bayi',
  },

  // -- Arti nama (dipecah per kata) --
  nameMeaning: [
    { part: 'Aisyah', meaning: 'Yang hidup penuh keberkahan' },
    { part: 'Khairunnisa', meaning: 'Wanita terbaik & mulia' },
  ],

  // -- Acara Aqiqah --
  event: {
    name: 'Tasyakuran Aqiqah',
    date: 'Sabtu, 16 Mei 2026',
    time: '09.00 - 12.00 WIB',
    venue: 'Kediaman Keluarga',
    address: 'Jl. Anggrek No. 5, Surabaya',
    start: '2026-05-16T09:00:00+07:00',
    end: '2026-05-16T12:00:00+07:00',
  },

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Kediaman Keluarga Arif, Surabaya',
    mapEmbed: 'https://www.google.com/maps?q=Tugu+Pahlawan+Surabaya&output=embed',
    mapLink: 'https://maps.google.com/?q=Tugu+Pahlawan+Surabaya',
  },

  // -- Galeri foto --
  gallery: [
    'https://placehold.co/600x800/a9cce6/4b4b63.png?text=Foto+1',
    'https://placehold.co/600x800/ffe6d6/4b4b63.png?text=Foto+2',
    'https://placehold.co/600x800/f1b07a/fbf8f3.png?text=Foto+3',
    'https://placehold.co/600x800/ffe6d6/4b4b63.png?text=Foto+4',
    'https://placehold.co/600x800/a9cce6/4b4b63.png?text=Foto+5',
    'https://placehold.co/600x800/f1b07a/fbf8f3.png?text=Foto+6',
  ],

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Lullaby',
  },

  // -- Footer / penutup --
  footer: {
    closing:
      'Merupakan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu untuk ananda.',
    hashtag: '#WelcomeBabyAisyah',
  },
};

export default config;
