"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData, historyTripsData } from "@/data/tourData";
import {
  MapPin,
  Users,
  Bus,
  CheckCircle2,
  ArrowLeft,
  Filter,
} from "lucide-react";

export default function PortofolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Sumatera", "Jawa", "Lombok & Bali", "Ziarah"];

  const filteredTrips =
    selectedCategory === "Semua"
      ? historyTripsData
      : historyTripsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* HEADER SECTION */}
      <div className="bg-[#0b1329] text-white py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-amber-400 hover:text-amber-300 transition mb-6"
          >
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            Dokumentasi & Bukti Nyata
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Portofolio Rekam Jejak Perjalanan
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Inilah dokumentasi otentik berbagai perjalanan rombongan keluarga, instansi sekolah, dan korporasi yang kami kawal langsung di lapangan dari Palembang ke berbagai penjuru nusantara.
          </p>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter size={14} /> Filter Wilayah:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LIST DOKUMENTASI GRID (CLEAN: TANPA TANGGAL, TANPA JUMLAH PESERTA, TANPA TOMBOL) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <span className="absolute top-4 left-4 bg-[#0b1329]/85 backdrop-blur-sm text-amber-400 border border-amber-400/40 text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-md shadow">
                    {trip.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-2">
                    <MapPin size={14} className="shrink-0 text-amber-600" />
                    <span>{trip.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition leading-snug">
                    {trip.title}
                  </h3>

                  {/* Metadata Rombongan (Tanpa Jumlah Peserta) */}
                  <div className="space-y-2 py-3 border-y border-slate-100 mb-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-700">{trip.groupName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bus size={14} className="text-slate-400 shrink-0" />
                      <span>{trip.busType}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-amber-800">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>{trip.leader}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {trip.story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA (TANPA LOGO BINTANG) */}
      <div className="bg-[#0b1329] text-white py-16 border-t border-white/10 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Rencanakan Tour Rombongan Anda Bersama Kami
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed">
            Ibu Marlin & Ibu Desi siap merancang rute perjalanan, koordinasi bus pariwisata terbaik, serta akomodasi hotel yang pas dengan bujet rombongan Anda.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={companyData.owners[0].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg"
            >
              Hubungi Ibu Marlin ({companyData.owners[0].number})
            </a>
            <a
              href={companyData.owners[1].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 hover:border-amber-400 hover:text-amber-400 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
            >
              Hubungi Ibu Desi ({companyData.owners[1].number})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}