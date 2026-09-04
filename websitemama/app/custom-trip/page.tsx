"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyData } from "@/data/tourData";
import { ArrowLeft, Send, Sparkles, Phone, CheckCircle2, Bus } from "lucide-react";

export default function CustomTripPage() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    destination: "",
    busChoice: "Medium Bus (31-35 Kursi)",
    duration: "4 Hari 3 Malam",
    pax: "35",
    date: "",
    notes: "",
    contactTarget: "0",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const owner = companyData.owners[Number(formData.contactTarget)];
    const message = `Halo ${owner.name}, saya ingin request Paket Wisata Custom Rombongan Bus:
- Nama Pemesan: ${formData.name}
- Instansi/Rombongan: ${formData.org || "-"}
- Destinasi: ${formData.destination}
- Pilihan Bus: ${formData.busChoice}
- Durasi: ${formData.duration}
- Perkiraan Peserta: ${formData.pax} Orang
- Rencana Tanggal: ${formData.date || "Fleksibel"}
- Catatan Khusus: ${formData.notes || "-"}

Mohon dibuatkan proposal itinerary dan penawaran biayanya. Terima kasih!`;

    const waUrl = `https://wa.me/${owner.waRaw}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* HEADER */}
      <div className="bg-slate-950 text-white py-16 sm:py-20 border-b border-white/10 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-amber-400 hover:text-amber-300 transition mb-6"
          >
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            Layanan Khusus Rombongan Bus
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Rancang Tour Bus Rombongan Sesuai Kebutuhan Anda
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Punya rute sendiri ke kota tertentu bersama rombongan kantor, sekolah, atau keluarga besar? Beritahu kami, dan Ibu Marlin & Ibu Desi akan mengkoordinasikan bus pariwisata mitra resmi, hotel, tiket objek wisata, dan mendampingi langsung perjalanan Anda.
          </p>
        </div>
      </div>

      {/* CONTENT FORM */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Nama Anda (Ketua Rombongan) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bpk. H. Rahmat"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Nama Rombongan / Instansi
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Keluarga Besar / PT Sinar Maju / SMAN 1 Palembang"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Destinasi / Kota Tujuan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Jogja – Solo – Semarang"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Pilihan Armada Bus *
                </label>
                <select
                  value={formData.busChoice}
                  onChange={(e) => setFormData({ ...formData, busChoice: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="Medium Bus (31-35 Kursi)">Medium Bus (31-35 Kursi)</option>
                  <option value="Executive Big Bus (45-50 Kursi)">Executive Big Bus (45-50 Kursi)</option>
                  <option value="Lebih dari 1 Bus (Konvoi Rombongan)">Lebih dari 1 Bus (Konvoi)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Perkiraan Peserta (Orang) *
                </label>
                <input
                  type="number"
                  min="25"
                  required
                  placeholder="Min. 25 Orang"
                  value={formData.pax}
                  onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Estimasi Durasi Perjalanan
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="3 Hari 2 Malam">3 Hari 2 Malam</option>
                  <option value="4 Hari 3 Malam">4 Hari 3 Malam</option>
                  <option value="5 Hari 4 Malam">5 Hari 4 Malam</option>
                  <option value="6 Hari 5 Malam">6 Hari 5 Malam</option>
                  <option value="7+ Hari (Ekspedisi Bus Panjang)">7+ Hari (Ekspedisi Bus Panjang)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Rencana Tanggal / Bulan Keberangkatan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Pertengahan Desember 2026"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Keinginan / Catatan Khusus
              </label>
              <textarea
                rows={3}
                placeholder="Misal: Perlu bus dengan karaoke & suspensi udara, hotel berbintang di pusat kota, makan prasmanan 3x sehari..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Pilih Founder Untuk Konsultasi Langsung:
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                <label
                  className={`border rounded-lg p-3.5 flex items-center gap-3 cursor-pointer transition ${
                    formData.contactTarget === "0" ? "border-amber-500 bg-amber-50/50" : "border-slate-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="contactTarget"
                    value="0"
                    checked={formData.contactTarget === "0"}
                    onChange={(e) => setFormData({ ...formData, contactTarget: e.target.value })}
                    className="accent-amber-500"
                  />
                  <div>
                    <span className="font-bold text-sm text-slate-900 block">Ibu Marlin</span>
                    <span className="text-xs text-slate-500">Lead Tour Leader ({companyData.owners[0].number})</span>
                  </div>
                </label>
                <label
                  className={`border rounded-lg p-3.5 flex items-center gap-3 cursor-pointer transition ${
                    formData.contactTarget === "1" ? "border-amber-500 bg-amber-50/50" : "border-slate-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="contactTarget"
                    value="1"
                    checked={formData.contactTarget === "1"}
                    onChange={(e) => setFormData({ ...formData, contactTarget: e.target.value })}
                    className="accent-amber-500"
                  />
                  <div>
                    <span className="font-bold text-sm text-slate-900 block">Ibu Desi</span>
                    <span className="text-xs text-slate-500">Operasional & Hotel ({companyData.owners[1].number})</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-4 px-6 rounded-xl text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
            >
              <Send size={16} /> Kirim Permintaan Trip Bus ke WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}