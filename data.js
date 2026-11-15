// Konfigurasi Profil & Tautan
// Ubah data di bawah sesuai informasi akun dan saluran Anda.

window.PROFILE_CONFIG = {
  name: "Raff",
  handle: "@raff",
  role: "Fullstack Developer & Systems Builder",
  location: "Indonesia",
  bio: "Fokus pada pengembangan automasi bot WhatsApp modular, utilitas Termux/Linux berkinerja tinggi, dan solusi sistem praktis.",
  avatar: "", // Kosongkan untuk inisial otomatis, atau isi URL gambar/foto
  status: {
    available: true,
    text: "Tersedia untuk proyek"
  },
  tags: ["Node.js", "Baileys", "Linux / Termux", "Automation"],

  // 4 Tombol Tautan Utama dengan Subjudul Ringkas & Badge Aksi
  links: [
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: "Chat langsung & diskusi proyek",
      badge: "Chat",
      url: "https://wa.me/628xxxxxxxxxx",
      icon: "whatsapp",
      accent: "whatsapp"
    },
    {
      id: "whatsapp-channel",
      title: "Saluran WhatsApp",
      subtitle: "Pembaruan rilis script, tips & info",
      badge: "Gabung",
      url: "https://whatsapp.com/channel/",
      icon: "channel",
      accent: "channel"
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "Aktivitas personal & pembaruan visual",
      badge: "Kunjungi",
      url: "https://instagram.com/",
      icon: "instagram",
      accent: "instagram"
    },
    {
      id: "tiktok",
      title: "TikTok",
      subtitle: "Video demo bot & panduan singkat",
      badge: "Tonton",
      url: "https://tiktok.com/@",
      icon: "tiktok",
      accent: "tiktok"
    }
  ],

  // Kontak Cepat
  quickContact: {
    label: "Email Resmi",
    value: "halo@raffdev.id"
  }
};
