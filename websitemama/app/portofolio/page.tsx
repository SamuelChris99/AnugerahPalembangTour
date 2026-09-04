"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData, historyTripsData } from "@/data/tourData";
import {
  MapPin,
  Calendar,
  Users,
  Bus,
  CheckCircle2,
  ArrowLeft,
  Filter,
  Phone,
  Sparkles,
} from "lucide-react";

export default function PortofolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Sumatera", "Jawa", "Bali", "Ziarah"];

  const filteredTrips =
    selectedCategory === "Semua"
      ? historyTripsData
      : historyTripsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* HEADER SECTION */}
      <div className="bg-slate-950 text-white py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-amber-400 hover:text-amber-300 transition mb-6"
          >
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            Bukti Jejak Rekam Tour Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Dokumentasi Perjalanan Rombongan
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Inilah portofolio nyata berbagai rute kota dan pulau yang telah kami kelola. Mulai dari bus pariwisata mitra, hotel, hingga pendampingan langsung oleh Ibu Marlin & Ibu Desi.
          </p>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter size={14} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LIST DOKUMENTASI GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-amber-400 border border-amber-400/40 text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded">
                    {trip.category}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded flex items-center gap-1">
                    <Calendar size={12} /> {trip.date}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-2">
                    <MapPin size={14} className="shrink-0" />
                    <span>{trip.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition">
                    {trip.title}
                  </h3>

                  {/* Metadata Rombongan */}
                  <div className="space-y-2 py-3 border-y border-slate-100 mb-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-slate-400 shrink-0" />
                      <span>{trip.groupName}</span>
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

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/6281438041059?text=Halo%20Ibu%20Marlin,%20saya%20tertarik%20dengan%20rute%20seperti%20pada%20portofolio%20${encodeURIComponent(trip.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-3 rounded-md text-xs uppercase tracking-wider transition text-center flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> Mau Rute Seperti Ini?
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="bg-slate-950 text-white py-16 border-t border-white/10 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <Sparkles className="mx-auto text-amber-400 mb-4" size={28} />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Rencanakan Perjalanan Rombongan Anda Sekarang
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed">
            Ibu Marlin & Ibu Desi siap membantu merancang rute, koordinasi bus rekanan terbaik, serta akomodasi hotel sesuai kebutuhan.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={companyData.owners[0].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-md text-xs uppercase tracking-wider transition"
            >
              Hubungi Ibu Marlin ({companyData.owners[0].number})
            </a>
            <a
              href={companyData.owners[1].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 hover:border-amber-400 hover:text-amber-400 font-bold px-7 py-3.5 rounded-md text-xs uppercase tracking-wider transition"
            >
              Hubungi Ibu Desi ({companyData.owners[1].number})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}