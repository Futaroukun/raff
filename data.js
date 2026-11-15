// Konfigurasi Profil & Tautan
// Ubah nomor telepon, tautan saluran, dan username sesuai akun Anda.

window.PROFILE_CONFIG = {
  name: "Raff",
  handle: "@raff",
  role: "Fullstack Developer & Systems Builder",
  location: "Indonesia",
  bio: "Fokus pada pengembangan automasi bot WhatsApp modular, utilitas Termux/Linux berkinerja tinggi, dan solusi sistem praktis.",
  avatar: "", // Kosongkan untuk inisial otomatis, atau isi URL gambar
  status: {
    available: true,
    text: "Tersedia untuk proyek"
  },
  tags: ["Node.js", "Baileys", "Linux / Termux", "Automation"],

  // Daftar Tombol Tautan (WhatsApp Owner, WhatsApp Bot, Saluran WA, IG, TikTok)
  links: [
    {
      id: "whatsapp-owner",
      title: "WhatsApp Owner",
      subtitle: "Kontak langsung & diskusi kerjasama",
      badge: "Chat",
      url: "https://wa.me/628xxxxxxxxxx",
      icon: "whatsapp",
      accent: "whatsapp"
    },
    {
      id: "whatsapp-bot",
      title: "WhatsApp Bot",
      subtitle: "Asisten bot cerdas & automasi interaktif",
      badge: "Mulai",
      url: "https://wa.me/628yyyyyyyyyy",
      icon: "bot",
      accent: "bot"
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
  },

  // Teks Watermark Footer
  footerText: "Tautan Resmi"
};
