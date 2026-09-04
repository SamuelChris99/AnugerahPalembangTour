export interface PackageItem {
  id: string;
  title: string;
  duration: string;
  route: string;
  badge: string;
  image: string;
  description: string;
  inclusions: string[];
}

export interface WorkflowItem {
  step: string;
  title: string;
  desc: string;
}

export interface HistoryTripItem {
  id: string;
  title: string;
  category: "Sumatera" | "Jawa" | "Bali" | "Ziarah";
  location: string;
  date: string;
  groupName: string;
  busType: string;
  image: string;
  leader: string;
  story: string;
}

export const companyData = {
  name: "Anugerah Palembang Tour",
  tagline: "Your Personal Bus Tour Planner & Dedicated Tour Leader",
  description:
    "Biro perencana perjalanan wisata bus terpadu asal Palembang yang dikelola langsung oleh Ibu Marlin & Ibu Desi. Kami mengurus seluruh kebutuhan tour rombongan Anda dari hulu ke hilir — mulai dari koordinasi bus pariwisata mitra resmi (Medium Bus & Big Bus), reservasi hotel berbintang, tiket destinasi wisata, hingga mendampingi langsung sebagai tour guide selama perjalanan.",
  address: "Kota Palembang, Sumatera Selatan, Indonesia",
  hours: "Senin – Sabtu (08.00 – 21.00 WIB)",
  owners: [
    {
      name: "Ibu Marlin",
      role: "Founder & Lead Tour Leader",
      number: "0814-3804-1059",
      waRaw: "6281438041059",
      waLink: "https://wa.me/6281438041059?text=Halo%20Ibu%20Marlin%20(Anugerah%20Palembang%20Tour),%20saya%20ingin%20konsultasi%20rencana%20tour%20bus",
      experience: "Berpengalaman memandu puluhan rombongan bus pariwisata lintas Sumatera & Jawa dengan pelayanan ramah serta teliti.",
    },
    {
      name: "Ibu Desi",
      role: "Co-Founder & Operational Planner",
      number: "0813-7919-2063",
      waRaw: "6281379192063",
      waLink: "https://wa.me/6281379192063?text=Halo%20Ibu%20Desi%20(Anugerah%20Palembang%20Tour),%20saya%20ingin%20konsultasi%20rencana%20tour%20bus",
      experience: "Spesialis kurasi hotel, rute perjalanan bus efisien, dan negosiasi fasilitas terbaik dengan vendor rekanan.",
    },
  ],
};

export const workflowData: WorkflowItem[] = [
  {
    step: "01",
    title: "Konsultasi Rute & Rombongan",
    desc: "Diskusikan tujuan wisata, tanggal keberangkatan, dan estimasi bujet rombongan bus langsung dengan Ibu Marlin atau Ibu Desi.",
  },
  {
    step: "02",
    title: "Kurasi Bus & Hotel Rekanan",
    desc: "Kami memilihkan armada bus pariwisata (Medium / Big Bus) terawat dan hotel berbintang terbaik yang nyaman sesuai bujet Anda.",
  },
  {
    step: "03",
    title: "Tiket Wisata & Restoran Disiapkan",
    desc: "Semua tiket masuk objek wisata dan jadwal makan prasmanan/restoran rombongan sudah kami booking sebelum hari-H.",
  },
  {
    step: "04",
    title: "Didampingi Langsung Selama Trip",
    desc: "Marlin & Desi turun langsung ke dalam bus sebagai tour leader untuk memastikan kenyamanan, keamanan, dan kelancaran rombongan.",
  },
];

export const packagesData: PackageItem[] = [
  {
    id: "sumatera-overland",
    title: "Tour Bus Lintas Sumatera Barat & Utara",
    duration: "6 Hari 5 Malam",
    route: "Palembang – Padang – Bukittinggi – Danau Toba",
    badge: "All-In Handled",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800",
    description: "Trip darat keliling Ranah Minang hingga Danau Toba. Kami urus bus pariwisata executive, hotel bintang, tiket Jam Gadang & Danau Singkarak, serta pendampingan penuh.",
    inclusions: ["Bus Pariwisata AC Rekanan", "Hotel Bintang 3/4 Pilihan", "Tiket Masuk Semua Objek Wisata", "Tour Guide Marlin & Desi"],
  },
  {
    id: "jawa-heritage",
    title: "Eksplorasi Budaya Yogyakarta & Solo via Bus",
    duration: "5 Hari 4 Malam",
    route: "Palembang – Jakarta – Jogja – Solo",
    badge: "Paling Diminati",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
    description: "Rute via tol Trans-Sumatera & Trans-Jawa. Nikmati Malioboro, Candi Prambanan, dan kuliner khas tanpa pusing mengatur teknis perjalanan bus.",
    inclusions: ["Bus Lintas Jawa Premium", "Hotel Nyaman Pusat Kota", "Tiket Wisata Budaya & Candi", "Dokumentasi & Tour Leader"],
  },
  {
    id: "bali-overland",
    title: "Grand Road Trip Bus Pulau Bali",
    duration: "8 Hari 7 Malam",
    route: "Palembang – Jawa Timur – Bali",
    badge: "Paket Liburan Besar",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    description: "Pengalaman road trip bus menyeberangi selat menuju Kuta, Bedugul, dan Tanah Lot. Tiket kapal ferry dan reservasi tempat wisata kami tangani tuntas.",
    inclusions: ["Bus Pariwisata Standar Pariwisata", "Tiket Penyeberangan Ferry", "Hotel Favorit Dekat Pantai", "Pendampingan Penuh Selama Tour"],
  },
];

export const historyTripsData: HistoryTripItem[] = [
  {
    id: "trip-padang-bukittinggi",
    title: "Tour Ranah Minang & Kelok 9",
    category: "Sumatera",
    location: "Padang & Bukittinggi, Sumbar",
    date: "Januari 2026",
    groupName: "Keluarga Besar Bpk. H. Syamsudin (45 Pax)",
    busType: "Executive Big Bus Rekanan",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800",
    leader: "Dipandu langsung oleh Ibu Marlin",
    story: "Perjalanan 5 hari menelusuri Lembah Anai, Jam Gadang, dan kuliner khas Kapau. Seluruh penginapan dan makan prasmanan terkoordinasi lancar.",
  },
  {
    id: "trip-jogja-istimewa",
    title: "Study Tour & Budaya Yogyakarta",
    category: "Jawa",
    location: "Yogyakarta & Magelang",
    date: "November 2025",
    groupName: "Rombongan Alumni SMA Palembang (50 Pax)",
    busType: "Executive Big Bus (Air Suspension)",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
    leader: "Dipandu langsung oleh Ibu Desi",
    story: "Rute Trans-Sumatera & Trans-Jawa menuju Candi Borobudur, Tebing Breksi, dan belanja Malioboro. Tepat waktu dan peserta sangat puas.",
  },
  {
    id: "trip-bali-dewata",
    title: "Overland Tour Lintas Selat ke Bali",
    category: "Bali",
    location: "Denpasar, Kuta, & Bedugul",
    date: "Desember 2025",
    groupName: "Gathering Karyawan Swasta Palembang (35 Pax)",
    busType: "Medium Bus Long Chassis",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    leader: "Dipandu oleh Ibu Marlin & Ibu Desi",
    story: "Ekspedisi 8 hari menyeberangi Pelabuhan Ketapang–Gilimanuk. Tiket tari Kecak Uluwatu dan hotel berbintang di Kuta tertangani tanpa antre.",
  },
  {
    id: "trip-danau-toba",
    title: "Eksplorasi Kaldera Danau Toba & Parapat",
    category: "Sumatera",
    location: "Simalungun, Sumatera Utara",
    date: "September 2025",
    groupName: "Komunitas Pensiunan BUMN (40 Pax)",
    busType: "Executive Big Bus Rekanan",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
    leader: "Dipandu langsung oleh Ibu Marlin",
    story: "Menikmati indahnya Danau Toba dan kebudayaan Tomok di Pulau Samosir dengan penyeberangan kapal carter privat yang aman.",
  },
  {
    id: "trip-bromo-malang",
    title: "Bromo Sunrise & Agro Wisata Malang",
    category: "Jawa",
    location: "Malang & Probolinggo, Jawa Timur",
    date: "Agustus 2025",
    groupName: "Rombongan Guru & Keluarga (32 Pax)",
    busType: "Deluxe Medium Bus",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800",
    leader: "Dipandu langsung oleh Ibu Desi",
    story: "Koordinasi transit bus ke armada Jeep 4x4 di kawasan Bromo berjalan sangat teratur. Sunrise di Penanjakan dinikmati bersama.",
  },
  {
    id: "trip-ziarah-wali",
    title: "Ziarah Wali Songo Lintas Jawa",
    category: "Ziarah",
    location: "Cirebon – Demak – Tuban – Surabaya",
    date: "Mei 2025",
    groupName: "Majelis Taklim Palembang (48 Pax)",
    busType: "Executive Big Bus Rekanan",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800",
    leader: "Dipandu oleh Ibu Marlin & Tim",
    story: "Perjalanan ibadah ziarah 6 hari dengan akomodasi hotel dekat lokasi makam dan jadwal ibadah yang terjadwal dengan tertib.",
  },
];

export const faqData = [
  {
    q: "Apakah Anugerah Palembang Tour melayani kendaraan kecil seperti HiAce / Avanza?",
    a: "Tidak, kami mengkhususkan diri dan fokus penuh pada perjalanan rombongan menggunakan Bus Pariwisata (Medium Bus 31–35 kursi dan Big Bus 45–50 kursi). Fokus ini memastikan penanganan rombongan skala sedang hingga besar dapat terlayani secara maksimal dan profesional.",
  },
  {
    q: "Apakah Anugerah Palembang Tour memiliki armada bus sendiri?",
    a: "Kami adalah Biro Tour Planner & Organizer Rombongan Bus. Kami bermitra langsung dengan berbagai operator bus pariwisata resmi dan terpercaya di Palembang maupun di Pulau Jawa. Anda mendapatkan unit bus terbaik yang terawat dan laik jalan tanpa terikat pada satu armada saja.",
  },
  {
    q: "Siapa yang akan mendampingi rombongan saat tour bus berlangsung?",
    a: "Ibu Marlin dan Ibu Desi sendiri yang akan turun langsung mendampingi perjalanan Anda di dalam bus sebagai tour guide dan koordinator lapangan, memastikan supir, bus, hotel, dan tiket wisata berjalan rapi.",
  },
  {
    q: "Apakah bisa membuat paket wisata custom dengan bus rombongan sendiri?",
    a: "Sangat bisa! Anda bebas menentukan kota tujuan, jumlah peserta rombongan, dan durasi hari. Kami buatkan rancangan itinerary, pemesanan bus pariwisata yang pas, hotel, dan tempat wisatanya.",
  },
  {
    q: "Bagaimana sistem booking dan pembayarannya?",
    a: "Setelah sepakat mengenai rute dan fasilitas bus/hotel, booking dikunci dengan Down Payment (DP) resmi, dan pelunasan dapat diatur secara bertahap sebelum tanggal berangkat.",
  },
];