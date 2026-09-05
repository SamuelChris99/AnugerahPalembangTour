"use client";

import React, { useState } from "react";
import { companyData } from "@/data/tourData";
import { Send, CheckCircle2, Bus, Users, MapPin, Wallet, Sparkles, Building2, Utensils } from "lucide-react";

export default function TripCalculator() {
  const [destination, setDestination] = useState("");
  const [pax, setPax] = useState<number>(30);
  const [busType, setBusType] = useState("Medium Bus Pariwisata (Maks. 25 Kursi)");
  const [budgetPerPax, setBudgetPerPax] = useState<number | "">(1500000);
  const [groupName, setGroupName] = useState("");
  const [csTarget, setCsTarget] = useState<number>(0);

  const numericBudget = typeof budgetPerPax === "number" ? budgetPerPax : 0;
  const estimatedTotal = numericBudget * pax;

  const formatRupiah = (val: number | "") => {
    if (val === "" || isNaN(val)) return "";
    return val.toLocaleString("id-ID");
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, "");
    if (!rawVal) {
      setBudgetPerPax("");
      return;
    }
    setBudgetPerPax(parseInt(rawVal, 10));
  };

  const handleSendWA = () => {
    const owner = companyData.owners[csTarget];
    const textMessage = `Halo ${owner.name}, saya ingin konsultasi rencana tour rombongan dari website:
- Nama Rombongan: ${groupName || "Rombongan"}
- Destinasi Tujuan: ${destination || "Belum ditentukan / Konsultasi"}
- Jumlah Peserta: ${pax} Orang
- Pilihan Bus: ${busType}
- Target Budget: Rp ${numericBudget.toLocaleString("id-ID")}/orang (Total Dana: Rp ${estimatedTotal.toLocaleString("id-ID")})
- Fasilitas Hotel: Disesuaikan dengan target budget rombongan
- Fasilitas Konsumsi: Prasmanan / Nasi Kotak (menyesuaikan budget rombongan)

Mohon bantuannya untuk perancangan rute, armada bus, konsumsi, dan rekomendasinya ya. Terima kasih!`;

    const url = `https://wa.me/${owner.waRaw}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
      <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold shrink-0">
          <Users size={24} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Rancangan Perjalanan Tour Rombongan
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Formulir khusus rombongan keluarga besar, dinas/kantor, komunitas, dan study tour.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* INPUT FORM */}
        <div className="space-y-5">
          {/* Nama Rombongan */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Sparkles size={15} className="text-amber-500" /> Nama Rombongan / Instansi:
            </label>
            <input
              type="text"
              placeholder="Contoh: Keluarga Besar Bpk. H. Rahmat / SMAN 1 Palembang"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Destinasi Tujuan */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <MapPin size={15} className="text-amber-500" /> Destinasi Tujuan Tour:
            </label>
            <input
              type="text"
              placeholder="Contoh: Lampung, Padang, Jogja, Solo, Bali, dll."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Jumlah Anggota Rombongan */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Users size={15} className="text-amber-500" /> Jumlah Peserta Rombongan:
              </label>
              <span className="text-sm font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {pax} Orang
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="150"
              step="5"
              value={pax}
              onChange={(e) => setPax(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>Min. 15 Pax</span>
              <span>40 Pax (1 Big Bus)</span>
              <span>100+ Pax (Konvoi)</span>
            </div>
          </div>

          {/* Pilihan Armada Bus */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Bus size={15} className="text-amber-500" /> Pilihan Armada Bus Pariwisata:
            </label>
            <select
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 focus:outline-none focus:border-amber-500"
            >
              <option value="Medium Bus Pariwisata (Maks. 25 Kursi)">Medium Bus Pariwisata (Maks. 25 Kursi)</option>
              <option value="Executive Big Bus Pariwisata (Maks. 40 Kursi)">Executive Big Bus Pariwisata (Maks. 40 Kursi)</option>
              <option value="Lebih dari 1 Bus (Konvoi Rombongan Besar)">Lebih dari 1 Bus (Konvoi Rombongan Besar)</option>
            </select>
          </div>

          {/* Input Budget per Orang */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Wallet size={15} className="text-amber-500" /> Target Budget per Peserta:
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-sm font-bold text-slate-400">Rp</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={formatRupiah(budgetPerPax)}
                onChange={handleBudgetChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 pl-11 pr-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-amber-500"
              />
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Bisa dihapus sampai kosong dan otomatis memakai format ribuan (contoh: 1.000.000).
            </span>
          </div>
        </div>

        {/* OUTPUT HASIL ESTIMASI */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-amber-400/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Rangkuman Rencana Tour Rombongan
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              Rp {numericBudget.toLocaleString("id-ID")}
              <span className="text-xs text-slate-400 font-normal"> / peserta</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Total perkiraan alokasi dana rombongan ({pax} orang):{" "}
              <strong className="text-amber-300 font-bold block sm:inline text-sm sm:text-xs">
                Rp {estimatedTotal.toLocaleString("id-ID")}
              </strong>
            </p>

            <div className="space-y-2.5 py-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Unit Bus Pariwisata AC Rekanan + Driver & BBM</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={15} className="text-amber-400 shrink-0" />
                <span className="text-amber-200 font-medium">Hotel/Penginapan disesuaikan dengan alokasi budget</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils size={15} className="text-amber-400 shrink-0" />
                <span className="text-amber-200 font-medium">Konsumsi prasmanan atau nasi kotak (menyesuaikan budget)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Tiket masuk objek wisata & koordinasi lapangan</span>
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
                Konsultasikan Rencana Ini Ke:
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
              <Send size={15} /> Ajukan Rancangan Rombongan ke WhatsApp
            </button>
            <span className="text-[10px] text-slate-400 text-center block mt-2">
              *Rencana rute, jadwal dan fasilitas akan disesuaikan kembali saat konsultasi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}