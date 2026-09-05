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
  category: "Sumatera" | "Jawa" | "Lombok & Bali" | "Ziarah";
  location: string;
  groupName: string;
  busType: string;
  image: string;
  leader: string;
  story: string;
}

export const companyData = {
  name: "Anugerah Palembang Tour",
  tagline: "Your Personal Bus Tour Planners & Dedicated Tour Leaders",
  description:
    "Biro perencana perjalanan wisata bus terpadu asal Palembang yang didirikan dan dikelola bersama oleh Ibu Marlin & Ibu Desi. Sebagai founder, kami berdua mengurus seluruh kebutuhan tour rombongan Anda dari hulu ke hilir secara langsung, mulai dari koordinasi bus pariwisata mitra resmi (Medium Bus & Big Bus), kurasi hotel berbintang, tiket destinasi wisata, konsumsi prasmanan atau nasi kotak sesuai budget, hingga mendampingi langsung sebagai pemandu tour di lapangan selama perjalanan.",
  address: "Kota Palembang, Sumatera Selatan, Indonesia",
  owners: [
    {
      name: "Ibu Marlin",
      role: "Founder & Tour Leader",
      number: "0814-3804-1059",
      waRaw: "6281438041059",
      waLink: "https://wa.me/6281438041059?text=Halo%20Ibu%20Marlin%20(Anugerah%20Palembang%20Tour),%20saya%20ingin%20konsultasi%20rencana%20tour%20bus",
      experience: "Bersama mengoordinasikan bus pariwisata rekanan, reservasi hotel, konsumsi, tiket wisata, serta turun langsung memandu perjalanan rombongan lintas pulau.",
    },
    {
      name: "Ibu Desi",
      role: "Founder & Tour Leader",
      number: "0813-7919-2063",
      waRaw: "6281379192063",
      waLink: "https://wa.me/6281379192063?text=Halo%20Ibu%20Desi%20(Anugerah%20Palembang%20Tour),%20saya%20ingin%20konsultasi%20rencana%20tour%20bus",
      experience: "Bersama mengoordinasikan bus pariwisata rekanan, reservasi hotel, konsumsi, tiket wisata, serta turun langsung memandu perjalanan rombongan lintas pulau.",
    },
  ],
};

export const workflowData: WorkflowItem[] = [
  {
    step: "01",
    title: "Konsultasi Rute & Rombongan",
    desc: "Diskusikan tujuan wisata dan estimasi bujet rombongan bus langsung bersama Ibu Marlin atau Ibu Desi.",
  },
  {
    step: "02",
    title: "Kurasi Bus & Hotel Bersama",
    desc: "Kami memilihkan armada bus pariwisata terawat dan hotel berbintang terbaik yang nyaman sesuai alokasi bujet rombongan.",
  },
  {
    step: "03",
    title: "Tiket Wisata & Konsumsi Disiapkan",
    desc: "Semua tiket objek wisata dan makan rombongan (prasmanan atau nasi kotak menyesuaikan budget) sudah kami siapkan rapi sebelum berangkat.",
  },
  {
    step: "04",
    title: "Didampingi Langsung Selama Trip",
    desc: "Ibu Marlin & Ibu Desi turun langsung ke bus sebagai tour leader bersama untuk memastikan kenyamanan, keamanan, dan kelancaran rombongan.",
  },
];

export const historyTripsData: HistoryTripItem[] = [
  {
    id: "trip-grandtour-bali-lombok",
    title: "Grand Overland Tour: Bali, Lombok, Malang dan Jogja",
    category: "Lombok & Bali",
    location: "Kori Agung Pura Bali & Lombok",
    groupName: "Rombongan Kompak “Oke-Oke Happy” Omah & Anugerah",
    busType: "Executive Big Bus Pariwisata",
    image: "/dokumentasi/foto-grandtour-bali-lombok.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Ekspedisi darat menyeberang selat menuju destinasi unggulan Bali, Lombok, Malang, hingga Yogyakarta. Seluruh akomodasi hotel, konsumsi prasmanan dan nasi kotak, serta tiket destinasi terkelola tanpa hambatan.",
  },
  {
    id: "trip-penglipuran-bali",
    title: "Wisata Budaya & Pakaian Adat Desa Penglipuran",
    category: "Lombok & Bali",
    location: "Desa Adat Penglipuran, Bangli, Bali",
    groupName: "Rombongan Wisata Budaya Nusantara",
    busType: "Medium Bus Pariwisata AC",
    image: "/dokumentasi/foto-penglipuran-bali.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Merasakan keasrian salah satu desa terbersih di dunia dengan mengenakan pakaian adat khas Bali, diatur rapi mulai dari sewa bus, tiket masuk, hingga sesi foto kebersamaan.",
  },
  {
    id: "trip-mandalika-lombok",
    title: "Eksplorasi Pulau Lombok & Sirkuit Mandalika",
    category: "Lombok & Bali",
    location: "Pertamina Mandalika International Circuit, Lombok",
    groupName: "Rombongan Eksklusif Pink Tour",
    busType: "Medium Bus Deluxe Pariwisata",
    image: "/dokumentasi/foto-mandalika.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Menikmati kemegahan Sirkuit Mandalika Lombok Tengah berlatar bukit eksotis, dilanjutkan menyusuri pesisir Kuta Mandalika dan desa adat Sasak Sade.",
  },
  {
    id: "trip-kyakka-beach",
    title: "Tour Family Trip: Bangka, Palembang dan Lampung",
    category: "Sumatera",
    location: "Kyakka Beach, Kalianda, Lampung",
    groupName: "Rombongan Tour Family Trip Bersama",
    busType: "Executive Bus Rekanan AC",
    image: "/dokumentasi/foto-kyakka-beach.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Perjalanan wisata pesisir pantai tropis Kyakka Beach Lampung yang asri. Transportasi darat, penyeberangan kapal ferry, hingga konsumsi dikawal penuh oleh founder.",
  },
  {
    id: "trip-sdn10-lampung",
    title: "Family Gathering SD N 10 Banyuasin 1 Goes to Lampung",
    category: "Sumatera",
    location: "Masjid Agung Al-Furqon, Bandar Lampung",
    groupName: "Dewan Guru & Staf SD N 10 Banyuasin 1",
    busType: "Executive Big Bus Pariwisata",
    image: "/dokumentasi/foto-lampung-sdn10.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Family gathering dewan guru ke kota Bandar Lampung, mengunjungi ikon religi Masjid Agung Al-Furqon, sentra oleh-oleh kripik pisang, dan pantai wisata Lampung.",
  },
  {
    id: "trip-smpn1-pagaralam",
    title: "Family Gathering SMPN 1 Banyuasin ke Pagar Alam",
    category: "Sumatera",
    location: "Kebun Teh Gunung Dempo, Pagar Alam",
    groupName: "Keluarga Besar SMPN 1 Banyuasin",
    busType: "Medium Bus Long Pariwisata",
    image: "/dokumentasi/foto-pagaralam-smpn1.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Wisata alam sejuk di kaki Gunung Dempo Pagar Alam, menikmati hamparan kebun teh dan air terjun dengan armada bus yang tangguh di jalan menanjak.",
  },
  {
    id: "trip-linagroup-ranau",
    title: "Company Gathering Lina Group (Trio Sentosa & Mitra)",
    category: "Sumatera",
    location: "Gardu Pandang Danau Ranau, Sumsel",
    groupName: "Karyawan & Manajemen Lina Group",
    busType: "Executive Medium Bus",
    image: "/dokumentasi/foto-linagroup-ranau.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Kegiatan employee gathering perusahaan swasta menikmati keindahan Danau Ranau dari gardu pandang bukit dengan koordinasi konsumsi dan penginapan yang teratur.",
  },
  {
    id: "trip-tangkuban-parahu",
    title: "Eksplorasi Kawah Gunung Tangkuban Parahu",
    category: "Jawa",
    location: "Tangkuban Parahu, Lembang, Jawa Barat",
    groupName: "Rombongan Wisatawan Palembang",
    busType: "Executive Big Bus Trans Jawa",
    image: "/dokumentasi/foto-tangkuban.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Road trip lintas Sumatera ke Jawa menuju kawah legendaris Ratu Tangkuban Parahu. Dinginnya hawa pegunungan Lembang dinikmati dengan penuh keakraban.",
  },
  {
    id: "trip-kawahputih-ciwidey",
    title: "Pesona Danau Vulkanik Kawah Putih Ciwidey",
    category: "Jawa",
    location: "Kawah Putih Garden Roof, Bandung Selatan",
    groupName: "Rombongan Arisan & Keluarga",
    busType: "Executive Big Bus",
    image: "/dokumentasi/foto-kawahputih.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Transit bus di terminal kawah putih dilanjutkan transportasi lokal ontang-anting ke danau kawah belerang. Semua tiket terusan dan konsumsi rombongan diatur tepat waktu.",
  },
  {
    id: "trip-museum-geologi",
    title: "Edu-Tour Sejarah & Sains Museum Geologi Bandung",
    category: "Jawa",
    location: "Museum Geologi, Kota Bandung",
    groupName: "Rombongan Edukasi & Pengajian",
    busType: "Executive Big Bus",
    image: "/dokumentasi/foto-geologi.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Kunjungan edukatif ke Museum Geologi Kota Bandung mempelajari sejarah geologi nusantara dengan pendampingan tour leader yang informatif.",
  },
  {
    id: "trip-pantai-lampung-palawija",
    title: "Gathering Komunitas Ibu-Ibu Palawija di Pesisir Lampung",
    category: "Sumatera",
    location: "Pesisir Pantai Teluk Lampung",
    groupName: "Ibu-Ibu Paguyuban Palawija",
    busType: "Executive Big Bus",
    image: "/dokumentasi/foto-pantai-palawija.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Keseruan rombongan ibu-ibu berseragam biru menikmati deburan ombak pantai Lampung, gazebo santai tepi laut, dan santap makan bersama khas Sumatera.",
  },
  {
    id: "trip-sukamoro-ziarah",
    title: "Wisata Rohani Gua Maria Via Crucis Sukamoro",
    category: "Ziarah",
    location: "Sukamoro, Banyuasin, Sumatera Selatan",
    groupName: "Rombongan Wisata Religi Ziarah",
    busType: "Medium Bus AC Pariwisata",
    image: "/dokumentasi/foto-sukamoro.jpg",
    leader: "Didampingi langsung oleh Ibu Marlin & Ibu Desi",
    story: "Perjalanan ibadah dan refleksi jalan salib di komplek ziarah Via Crucis Sukamoro. Jadwal kegiatan teratur, suasana khidmat dan damai terjaga sepanjang acara.",
  },
];

export const faqData = [
  {
    q: "Apakah Anugerah Palembang Tour melayani kendaraan kecil seperti HiAce atau Avanza?",
    a: "Tidak, kami mengkhususkan diri dan fokus penuh pada perjalanan rombongan menggunakan Bus Pariwisata (Medium Bus dan Big Bus). Fokus ini memastikan penanganan rombongan skala sedang hingga besar dapat terlayani secara maksimal dan profesional.",
  },
  {
    q: "Apakah Anugerah Palembang Tour memiliki armada bus sendiri?",
    a: "Kami adalah Biro Tour Planner & Organizer Rombongan Bus. Kami bermitra langsung dengan berbagai operator bus pariwisata resmi dan terpercaya di Palembang maupun di Pulau Jawa. Anda mendapatkan unit bus terbaik yang terawat dan laik jalan tanpa terikat pada satu armada saja.",
  },
  {
    q: "Bagaimana dengan konsumsi makanan selama tour rombongan?",
    a: "Konsumsi makanan kami sesuaikan sepenuhnya dengan budget dan preferensi rombongan Anda, baik dalam bentuk prasmanan (buffet) di restoran rekanan maupun nasi kotak praktis yang higienis.",
  },
  {
    q: "Siapa yang akan mendampingi rombongan saat tour bus berlangsung?",
    a: "Ibu Marlin dan Ibu Desi sendiri selaku founder yang akan turun langsung mendampingi perjalanan Anda di dalam bus sebagai tour leader dan koordinator lapangan bersama, memastikan supir, bus, hotel, konsumsi, dan tiket wisata berjalan rapi.",
  },
  {
    q: "Apakah bisa membuat rancangan perjalanan dengan bus rombongan sendiri?",
    a: "Sangat bisa! Anda bebas menentukan kota tujuan, jumlah peserta rombongan, dan durasi hari. Kami berdua akan membuatkan rancangan itinerary, pemesanan bus pariwisata yang pas, hotel, konsumsi, dan tempat wisatanya.",
  },
  {
    q: "Bagaimana sistem booking dan pembayarannya?",
    a: "Setelah sepakat mengenai rute dan fasilitas bus atau hotel, booking dikunci dengan Down Payment (DP) resmi, dan pelunasan dapat diatur secara bertahap sebelum tanggal berangkat.",
  },
];