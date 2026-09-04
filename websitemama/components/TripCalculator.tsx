"use client";

import React, { useState } from "react";
import { companyData } from "@/data/tourData";
import { Calculator, Send, CheckCircle2, Bus, Hotel, Users, MapPin } from "lucide-react";

export default function TripCalculator() {
  const [destination, setDestination] = useState("Lampung");
  const [pax, setPax] = useState<number>(35);
  const [busType, setBusType] = useState("Medium Bus Pariwisata (31-35 Kursi)");
  const [hotelType, setHotelType] = useState("Bintang 3 (Standar Nyaman)");
  const [csTarget, setCsTarget] = useState<number>(0);

  // Kalkulasi estimasi biaya per pax rombongan bus
  const destBaseRate: Record<string, number> = {
    Lampung: 950000,
    "Padang & Bukittinggi": 1850000,
    "Danau Toba & Medan": 2400000,
    "Bandung & Jakarta": 1950000,
    "Yogyakarta & Solo": 2250000,
    "Bromo & Malang": 2750000,
    "Bali Overland": 3450000,
  };

  const hotelMultiplier: Record<string, number> = {
    "Bintang 2 (Ekonomis)": 0.88,
    "Bintang 3 (Standar Nyaman)": 1.0,
    "Bintang 4 (Luxury Stay)": 1.28,
  };

  const basePrice = destBaseRate[destination] || 1500000;
  const multiplier = hotelMultiplier[hotelType] || 1.0;
  const estimatedPerPerson = Math.round((basePrice * multiplier) / 10000) * 10000;
  const estimatedTotal = estimatedPerPerson * pax;

  const handleSendWA = () => {
    const owner = companyData.owners[csTarget];
    const textMessage = `Halo ${owner.name}, saya ingin konsultasi estimasi paket tour bus dari website:
- Destinasi: ${destination}
- Jumlah Peserta: ${pax} Orang
- Pilihan Armada: ${busType}
- Kelas Hotel: ${hotelType}
- Estimasi Budget: Sekitar Rp ${estimatedPerPerson.toLocaleString("id-ID")}/orang (Total: Rp ${estimatedTotal.toLocaleString("id-ID")})

Mohon dibantu rincian itinerary dan penawaran resminya ya, terima kasih!`;

    const url = `https://wa.me/${owner.waRaw}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Simulasi Estimasi Biaya Tour Bus Anda
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Pilih preferensi perjalanan bus rombongan Anda untuk melihat gambaran bujet.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* INPUT FORM */}
        <div className="space-y-5">
          {/* Destinasi */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <MapPin size={15} className="text-amber-500" /> Destinasi Tujuan:
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 focus:outline-none focus:border-amber-500"
            >
              <option value="Lampung">Lampung (Kiluan / Pahawang)</option>
              <option value="Padang & Bukittinggi">Padang & Bukittinggi (Sumbar)</option>
              <option value="Danau Toba & Medan">Danau Toba & Medan (Sumut)</option>
              <option value="Bandung & Jakarta">Bandung & Jakarta</option>
              <option value="Yogyakarta & Solo">Yogyakarta & Solo (Jawa Tengah)</option>
              <option value="Bromo & Malang">Bromo & Malang (Jawa Timur)</option>
              <option value="Bali Overland">Bali Overland Express</option>
            </select>
          </div>

          {/* Jumlah Peserta Slider (Khusus Rombongan Bus: 25 - 150) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Users size={15} className="text-amber-500" /> Jumlah Anggota Rombongan:
              </label>
              <span className="text-sm font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {pax} Orang
              </span>
            </div>
            <input
              type="range"
              min="25"
              max="150"
              step="5"
              value={pax}
              onChange={(e) => setPax(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>25–35 Pax (1 Medium Bus)</span>
              <span>45–50 Pax (1 Big Bus)</span>
              <span>100+ Pax (Konvoi Bus)</span>
            </div>
          </div>

          {/* Tipe Bus Rekanan (Hanya Bus!) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Bus size={15} className="text-amber-500" /> Pilihan Armada Bus Pariwisata:
            </label>
            <select
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 focus:outline-none focus:border-amber-500"
            >
              <option value="Medium Bus Pariwisata (31-35 Kursi)">Medium Bus Pariwisata (31-35 Kursi)</option>
              <option value="Executive Big Bus (45-50 Kursi)">Executive Big Bus Pariwisata (45-50 Kursi)</option>
            </select>
          </div>

          {/* Kategori Hotel */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Hotel size={15} className="text-amber-500" /> Kategori Akomodasi Hotel:
            </label>
            <select
              value={hotelType}
              onChange={(e) => setHotelType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 focus:outline-none focus:border-amber-500"
            >
              <option value="Bintang 2 (Ekonomis)">Bintang 2 (Ekonomis & Bersih)</option>
              <option value="Bintang 3 (Standar Nyaman)">Bintang 3 (Standar Nyaman Rekomendasi)</option>
              <option value="Bintang 4 (Luxury Stay)">Bintang 4 (Fasilitas Lengkap & Mewah)</option>
            </select>
          </div>
        </div>

        {/* OUTPUT HASIL ESTIMASI */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-amber-400/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Hasil Simulasi Estimasi Bus
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              Rp {estimatedPerPerson.toLocaleString("id-ID")}
              <span className="text-xs text-slate-400 font-normal"> / orang</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Total estimasi rombongan ({pax} pax):{" "}
              <strong className="text-amber-300">Rp {estimatedTotal.toLocaleString("id-ID")}</strong>
            </p>

            <div className="space-y-2.5 py-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Unit Bus AC Pariwisata Prima + Driver & Solar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Akomodasi kamar hotel sesuai pilihan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Tiket masuk seluruh objek wisata utama</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-amber-300">
                <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                <span>Didampingi langsung oleh Ibu Marlin & Ibu Desi</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3">
              <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1.5">
                Kirim Rancangan Ini Ke:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCsTarget(0)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border transition ${
                    csTarget === 0
                      ? "bg-amber-500 text-slate-950 border-amber-500"
                      : "bg-white/5 border-white/10 text-white hover:border-amber-400"
                  }`}
                >
                  Ibu Marlin
                </button>
                <button
                  type="button"
                  onClick={() => setCsTarget(1)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border transition ${
                    csTarget === 1
                      ? "bg-amber-500 text-slate-950 border-amber-500"
                      : "bg-white/5 border-white/10 text-white hover:border-amber-400"
                  }`}
                >
                  Ibu Desi
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSendWA}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
            >
              <Send size={15} /> Ajukan Rancangan ke WhatsApp
            </button>
            <span className="text-[10px] text-slate-400 text-center block mt-2">
              *Harga final disesuaikan dengan tanggal & detail permintaan rombongan bus.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}