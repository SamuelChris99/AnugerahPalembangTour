"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData, workflowData, faqData, historyTripsData } from "@/data/tourData";
import TripCalculator from "@/components/TripCalculator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stats, setStats] = useState({ trips: 0, cities: 0, clients: 0, rating: 0 });

  // Scroll Progress Bar & Navbar Styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer untuk Animasi Scroll
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Animasi Count-Up Angka Statistik
  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats({
        trips: Math.floor(easeOut * 320),
        cities: Math.floor(easeOut * 28),
        clients: Math.floor(easeOut * 850),
        rating: +(easeOut * 4.9).toFixed(1),
      });

      if (progress < 1) requestAnimationFrame(animateCount);
      else {
        setStats({ trips: 320, cities: 28, clients: 850, rating: 4.9 });
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      {/* SCROLL PROGRESS BAR */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 1. NAVBAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1329]/95 backdrop-blur-md shadow-2xl py-3.5 border-b border-amber-500/20"
            : "bg-[#0b1329]/90 backdrop-blur-sm py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0b1329] font-black text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] sm:text-[16px] tracking-wide text-white leading-tight">
                ANUGERAH PALEMBANG
              </span>
              <span className="text-[10px] tracking-[0.2em] text-amber-400 font-semibold uppercase">
                Tour & Trip Planner
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-300">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-amber-400 transition-colors">
              Profil Founder
            </a>
            <a href="#layanan" className="hover:text-amber-400 transition-colors">
              Cara Kerja
            </a>
            <a href="#kalkulator" className="hover:text-amber-400 transition-colors">
              Simulasi Biaya
            </a>
            <Link
              href="/portofolio"
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              Bukti Tour
              <span className="bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                Porto
              </span>
            </Link>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
            <a href="#kontak" className="hover:text-amber-400 transition-colors">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/custom-trip"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Custom Trip
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0b1329] border-b border-amber-500/20 px-6 py-5 flex flex-col gap-4 text-sm font-medium text-slate-300 animate-in slide-in-from-top-4 duration-200">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
              Beranda
            </a>
            <a href="#tentang" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
              Profil Founder
            </a>
            <a href="#layanan" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
              Cara Kerja
            </a>
            <a href="#kalkulator" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
              Simulasi Biaya
            </a>
            <Link
              href="/portofolio"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400 flex items-center justify-between"
            >
              <span>Bukti Tour</span>
              <span className="bg-amber-400/20 text-amber-300 text-xs px-2 py-0.5 rounded">Portofolio</span>
            </Link>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
              FAQ
            </a>
            <a href="#kontak" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
              Kontak
            </a>
            <Link
              href="/custom-trip"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-500 text-slate-950 text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider mt-2"
            >
              Request Custom Trip
            </Link>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION DENGAN BAR INFORMASI TERINTEGRASI */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center text-center text-white px-6 py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 19, 41, 0.84), rgba(11, 19, 41, 0.88)), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000')",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-amber-300 font-bold mb-6 animate-pulse">
            <Sparkles size={14} /> Full Tour Organizer & Guide Terpercaya
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 transition-all duration-700">
            Liburan Nyaman Tanpa Ribet Bersama <span className="text-amber-400">Anugerah Palembang Tour</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mb-10">
            Anda cukup bawa koper dan nikmati liburan. Kami mengurus seluruh kebutuhan bus pariwisata mitra, hotel berbintang, tiket wisata, hingga mendampingi rombongan Anda langsung di lapangan.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={companyData.owners[0].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-md text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-amber-500/20"
            >
              Hubungi Ibu Marlin (WhatsApp)
            </a>
            <Link
              href="/portofolio"
              className="border-2 border-white/70 hover:border-amber-400 hover:text-amber-400 font-bold px-8 py-4 rounded-md text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1"
            >
              Lihat Bukti Tour <ArrowRight size={16} />
            </Link>
          </div>

          {/* BAR INFORMASI HERO MENYATU (LOKASI, OPERASIONAL, & KONTAK FOUNDER) */}
          <div className="w-full max-w-4xl bg-[#081024]/80 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl">
            <div className="flex flex-wrap justify-between items-center gap-y-3 gap-x-6 text-xs sm:text-[13px] text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-amber-400 shrink-0" />
                <span className="font-medium">{companyData.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={15} className="text-amber-400 shrink-0" />
                <span className="font-medium">{companyData.hours}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Ibu Marlin:</span>
                  <a
                    href={companyData.owners[0].waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-bold hover:underline"
                  >
                    {companyData.owners[0].number}
                  </a>
                </div>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Ibu Desi:</span>
                  <a
                    href={companyData.owners[1].waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-bold hover:underline"
                  >
                    {companyData.owners[1].number}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATISTIK PENCAPAIAN */}
      <section className="bg-slate-900 text-white py-14 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 reveal reveal-up delay-100">
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-2">{stats.trips}+</div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Rombongan Didampingi</div>
          </div>
          <div className="p-4 reveal reveal-up delay-200">
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-2">{stats.cities}+</div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Kota & Pulau Disinggahi</div>
          </div>
          <div className="p-4 reveal reveal-up delay-300">
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-2">{stats.clients}+</div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Wisatawan Puas</div>
          </div>
          <div className="p-4 reveal reveal-up delay-400">
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-2">{stats.rating}</div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Rating Kepuasan Tamu</div>
          </div>
        </div>
      </section>

      {/* 4. TENTANG KAMI & PROFIL OWNER/GUIDE */}
      <section id="tentang" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal reveal-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Kenali Kami</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Tour Organizer Mandiri Berbasis Kepercayaan & Pengalaman
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {companyData.description}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Kami tidak terpaku pada satu armada saja. Kami memilihkan mitra yang terbaik untuk kenyamanan Anda: unit bus ber-AC prima dengan supir berpengalaman, hotel bersih strategis, serta makanan lezat yang ramah rombongan.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-amber-500 pl-4">
                <span className="font-bold text-slate-900 text-sm block">100% Fleksibel</span>
                <span className="text-xs text-slate-500">Rute, durasi, dan bujet disesuaikan kebutuhan rombongan.</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <span className="font-bold text-slate-900 text-sm block">Personal Tour Guide</span>
                <span className="text-xs text-slate-500">Dipandu langsung dari Palembang sampai pulang.</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal reveal-right delay-200">
            <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 font-extrabold text-xl flex items-center justify-center mb-4">
                  M
                </div>
                <h3 className="text-xl font-bold text-slate-900">{companyData.owners[0].name}</h3>
                <span className="text-xs font-semibold text-amber-600 block mb-3">{companyData.owners[0].role}</span>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {companyData.owners[0].experience}
                </p>
              </div>
              <a
                href={companyData.owners[0].waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-2.5 px-4 rounded text-xs transition"
              >
                <Phone size={14} /> Hubungi Ibu Marlin
              </a>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 font-extrabold text-xl flex items-center justify-center mb-4">
                  D
                </div>
                <h3 className="text-xl font-bold text-slate-900">{companyData.owners[1].name}</h3>
                <span className="text-xs font-semibold text-amber-600 block mb-3">{companyData.owners[1].role}</span>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {companyData.owners[1].experience}
                </p>
              </div>
              <a
                href={companyData.owners[1].waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-2.5 px-4 rounded text-xs transition"
              >
                <Phone size={14} /> Hubungi Ibu Desi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALUR KERJA LAYANAN */}
      <section id="layanan" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal reveal-up">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Layanan Terpadu</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bagaimana Kami Mengatur Liburan Anda
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowData.map((item, idx) => (
              <div
                key={item.step}
                className={`bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 reveal reveal-up ${
                  idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : idx === 2 ? "delay-300" : "delay-400"
                }`}
              >
                <span className="text-4xl font-extrabold text-slate-200 block mb-4">{item.step}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FITUR KALKULATOR ESTIMASI BIAYA */}
      <section id="kalkulator" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Transparan & Instan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hitung Estimasi Biaya Rombongan Anda
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Sesuaikan jumlah peserta dan hotel, langsung dapatkan kisaran harga dan ajukan ke WhatsApp!
          </p>
        </div>

        <div className="reveal reveal-scale delay-200">
          <TripCalculator />
        </div>
      </section>

      {/* 7. SECTION PREVIEW BUKTI TOUR */}
      <section className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 reveal reveal-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Bukti Nyata Pengalaman</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Rombongan Yang Pernah Kami Dampingi
              </h2>
            </div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider group"
            >
              Lihat Semua Dokumentasi ({historyTripsData.length} Rute){" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {historyTripsData.slice(0, 3).map((trip, idx) => (
              <div
                key={trip.id}
                className={`bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 reveal reveal-up ${
                  idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
                }`}
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                      unoptimized
                    />
                    <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                      {trip.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-slate-400 block mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {trip.date}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{trip.title}</h3>
                    <div className="text-xs text-slate-600 space-y-1.5 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Users size={13} className="text-slate-400 shrink-0" />
                        <span>{trip.groupName}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-amber-700 font-medium">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{trip.leader}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{trip.story}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    href="/portofolio"
                    className="block text-center border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold py-2 rounded text-xs uppercase tracking-wider transition"
                  >
                    Detail Rute & Dokumentasi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ INTERAKTIF */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Pertanyaan Umum</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hal yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition reveal reveal-up"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-amber-600 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    activeFaq === idx ? "rotate-180 text-amber-600" : "text-slate-400"
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. FOOTER KORPORAT MEWAH */}
      <footer id="kontak" className="bg-slate-950 text-slate-400 pt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
            {/* Kolom 1 */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-xl">
                  A
                </div>
                <span className="text-white font-extrabold text-base tracking-tight leading-tight block">
                  ANUGERAH PALEMBANG<br />
                  <span className="text-amber-400 text-xs font-semibold">TOUR & TRAVEL</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 mb-6">
                Biro perencana wisata terpadu yang dikelola langsung oleh Ibu Marlin & Ibu Desi. Mengkoordinasikan carter bus mitra resmi, hotel, tiket wisata, dan pendampingan pemandu tour profesional.
              </p>
            </div>

            {/* Kolom 2 */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-l-2 border-amber-400 pl-3">
                Layanan Kami
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#kalkulator" className="hover:text-amber-400 transition">Simulasi Estimasi Biaya Online</a></li>
                <li><Link href="/custom-trip" className="hover:text-amber-400 transition">Formulir Request Custom Trip</Link></li>
                <li><Link href="/portofolio" className="hover:text-amber-400 transition">Portofolio & Bukti Nyata Perjalanan</Link></li>
                <li><a href="#layanan" className="hover:text-amber-400 transition">Pendampingan Tour Guide Lapangan</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak CS */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-l-2 border-amber-400 pl-3">
                Kontak Langsung Founder
              </h4>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Tour Leader & Booking (Ibu Marlin)</span>
                  <a
                    href={companyData.owners[0].waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-bold hover:underline block text-sm"
                  >
                    {companyData.owners[0].number}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Operasional & Reservasi (Ibu Desi)</span>
                  <a
                    href={companyData.owners[1].waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-bold hover:underline block text-sm"
                  >
                    {companyData.owners[1].number}
                  </a>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 block text-[11px]">Jam Pelayanan Konsultasi</span>
                  <span className="text-slate-300 font-medium">{companyData.hours}</span>
                </div>
              </div>
            </div>

            {/* Kolom 4: Kantor Pusat */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-l-2 border-amber-400 pl-3">
                Kantor Operasional
              </h4>
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{companyData.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-amber-400 shrink-0" />
                  <span>anugerahpalembangtour@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="py-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>
              © 2026 Anugerah Palembang Tour. Seluruh Hak Cipta Dilindungi.
            </div>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-amber-400 transition">Privasi</a>
              <a href="#home" className="hover:text-amber-400 transition">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <a
          href={companyData.owners[0].waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-3 rounded-full shadow-xl flex items-center gap-2 hover:-translate-y-1 transition"
          title="Chat WhatsApp Ibu Marlin"
        >
          <Phone size={16} />
          <span>Ibu Marlin ({companyData.owners[0].number})</span>
        </a>
        <a
          href={companyData.owners[1].waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-3 rounded-full shadow-xl flex items-center gap-2 hover:-translate-y-1 transition"
          title="Chat WhatsApp Ibu Desi"
        >
          <Phone size={16} />
          <span>Ibu Desi ({companyData.owners[1].number})</span>
        </a>
      </div>
    </div>
  );
}