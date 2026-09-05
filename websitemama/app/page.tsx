"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData, workflowData, faqData, historyTripsData } from "@/data/tourData";
import TripCalculator from "@/components/TripCalculator";
import LogoAmpera from "@/components/LogoAmpera";
import {
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  Users,
  ArrowRight,
  Compass,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative overflow-x-hidden">
      {/* SCROLL PROGRESS BAR */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 1. NAVBAR & HEADER RESPONSIVE */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1329]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-white/10"
            : "bg-[#0b1329] py-3 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Ampera + Brand Text */}
          <a href="#home" className="flex items-center group py-0.5" title="Anugerah Palembang Tour">
            <LogoAmpera className="h-9 sm:h-11 md:h-12 w-auto transition-transform group-hover:scale-105 duration-300" />
          </a>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-300">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-amber-400 transition-colors">
              Profil Founders
            </a>
            <a href="#layanan" className="hover:text-amber-400 transition-colors">
              Cara Kerja
            </a>
            <a href="#rombongan" className="hover:text-amber-400 transition-colors">
              Rancangan Rombongan
            </a>
            <Link
              href="/portofolio"
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Portofolio Perjalanan
            </Link>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
            <a href="#kontak" className="hover:text-amber-400 transition-colors">
              Kontak
            </a>
          </nav>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400 focus:outline-none rounded-lg active:bg-white/10 transition-colors"
            aria-label="Buka Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Backdrop Overlay Mobile */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="lg:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
          />
        )}

        {/* Mobile Slide Drawer Menu */}
        <div
          className={`lg:hidden fixed top-[57px] right-0 bottom-0 w-[82%] max-w-sm bg-[#0b1329] border-l border-white/10 z-50 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-4 pt-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block pb-2 border-b border-white/10">
              Navigasi Halaman
            </span>
            <div className="flex flex-col space-y-3.5 text-sm font-semibold text-slate-200">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block"
              >
                Profil Founders
              </a>
              <a
                href="#layanan"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block"
              >
                Cara Kerja
              </a>
              <a
                href="#rombongan"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block text-amber-300 font-bold"
              >
                Rancangan Rombongan Bus
              </a>
              <Link
                href="/portofolio"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block"
              >
                Portofolio Perjalanan
              </Link>
              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block"
              >
                FAQ
              </a>
              <a
                href="#kontak"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition-colors block"
              >
                Kontak
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-2.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
              Konsultasi Cepat WhatsApp:
            </span>
            <a
              href={companyData.owners[0].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition"
            >
              <Phone size={13} /> Ibu Marlin ({companyData.owners[0].number})
            </a>
            <a
              href={companyData.owners[1].waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition"
            >
              <Phone size={13} /> Ibu Desi ({companyData.owners[1].number})
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center text-center text-white px-4 sm:px-6 py-14 sm:py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 19, 41, 0.86), rgba(11, 19, 41, 0.90)), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000')",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 w-full">
          <div className="inline-flex items-center border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-amber-300 font-bold mb-5 sm:mb-6">
            Full Tour Organizer & Guide Terpercaya
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-5 sm:mb-6 max-w-3xl">
            Liburan Nyaman Tanpa Ribet Bersama{" "}
            <span className="text-amber-400 block sm:inline">Anugerah Palembang Tour</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl sm:max-w-3xl mb-8 sm:mb-10 px-2">
            Anda cukup bawa koper dan nikmati liburan. Kami mengurus seluruh kebutuhan bus pariwisata mitra, hotel berbintang, tiket wisata, hingga mendampingi rombongan Anda langsung di lapangan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="/portofolio"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <Compass size={17} />
              <span>Dokumentasi & Rekam Jejak</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="#rombongan"
              className="w-full sm:w-auto border border-white/40 hover:border-amber-400 hover:text-amber-300 text-white font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-sm bg-white/5 inline-flex items-center justify-center"
            >
              Simulasi Biaya Rombongan
            </a>
          </div>

          {/* BAR INFORMASI HERO */}
          <div className="w-full max-w-3xl bg-[#081024]/85 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-slate-300 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-amber-400 shrink-0" />
                <span className="font-medium">{companyData.address}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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

      {/* 3. TENTANG KAMI & PROFIL FOUNDERS */}
      <section id="tentang" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 reveal reveal-left">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-900 aspect-[3/4] max-w-sm sm:max-w-md mx-auto">
              <Image
                src="/dokumentasi/founders-marlin-desi.jpg"
                alt="Ibu Marlin dan Ibu Desi - Founders Anugerah Palembang Tour"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 shadow">
                  <ShieldCheck size={13} /> Founder & On-Field Leaders
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                  Ibu Marlin & Ibu Desi
                </h3>
                <p className="text-[11px] sm:text-xs text-amber-200/90 mt-0.5 sm:mt-1">
                  Mendampingi langsung seluruh rombongan di lapangan dari awal hingga akhir perjalanan.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-right delay-200">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
              Kenali Kami
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6">
              Tour Organizer Mandiri Berbasis Kepercayaan & Pengalaman Bersama
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {companyData.description}
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              Ibu Marlin & Ibu Desi memegang penuh seluruh operasional bersama-sama: mulai dari pemilihan armada bus pariwisata ber-AC prima dengan sopir berpengalaman, kurasi hotel bersih strategis, sajian makanan prasmanan atau nasi kotak yang fleksibel sesuai budget rombongan, hingga turun tangan langsung mendampingi perjalanan Anda.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 mb-6 sm:mb-8">
              <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block">100% Fleksibel</span>
                <span className="text-[11px] sm:text-xs text-slate-500">Rute, durasi, hotel, dan makanan disesuaikan rombongan.</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block">Didampingi Berdua</span>
                <span className="text-[11px] sm:text-xs text-slate-500">Dipandu langsung dari Palembang sampai pulang.</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{companyData.owners[0].name}</h4>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-amber-600 block mb-1.5">{companyData.owners[0].role}</span>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-3.5">
                    {companyData.owners[0].experience}
                  </p>
                </div>
                <a
                  href={companyData.owners[0].waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-2 px-3 rounded-lg text-xs transition"
                >
                  <Phone size={13} /> Hubungi Ibu Marlin
                </a>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{companyData.owners[1].name}</h4>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-amber-600 block mb-1.5">{companyData.owners[1].role}</span>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-3.5">
                    {companyData.owners[1].experience}
                  </p>
                </div>
                <a
                  href={companyData.owners[1].waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-2 px-3 rounded-lg text-xs transition"
                >
                  <Phone size={13} /> Hubungi Ibu Desi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALUR KERJA LAYANAN */}
      <section id="layanan" className="py-16 sm:py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 reveal reveal-up">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Layanan Terpadu</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bagaimana Kami Mengatur Liburan Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {workflowData.map((item, idx) => (
              <div
                key={item.step}
                className={`bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 reveal reveal-up ${
                  idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : idx === 2 ? "delay-300" : "delay-400"
                }`}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-200 block mb-3 sm:mb-4">{item.step}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FORMULIR TOUR ROMBONGAN */}
      <section id="rombongan" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 reveal reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Perjalanan Eksklusif</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Rancangan Perjalanan Tour Rombongan
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-3 px-2">
            Tentukan tujuan, jumlah peserta, armada bus pilihan, dan target bujet rombongan Anda secara fleksibel.
          </p>
        </div>

        <div className="reveal reveal-scale delay-200">
          <TripCalculator />
        </div>
      </section>

      {/* 6. SECTION PREVIEW BUKTI TOUR */}
      <section className="py-16 sm:py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-3 sm:gap-4 reveal reveal-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1.5 sm:mb-2">Rekam Jejak Teruji</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dokumentasi Perjalanan Rombongan
              </h2>
            </div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider group mt-1 md:mt-0"
            >
              Seluruh Portofolio ({historyTripsData.length} Destinasi){" "}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {historyTripsData.slice(0, 3).map((trip, idx) => (
              <div
                key={trip.id}
                className={`bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 reveal reveal-up ${
                  idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
                }`}
              >
                <div>
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
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
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-1 text-xs text-amber-700 font-semibold mb-1">
                      <MapPin size={13} className="shrink-0 text-amber-600" />
                      <span>{trip.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">{trip.title}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ INTERAKTIF */}
      <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 reveal reveal-up">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">Pertanyaan Umum</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hal yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition reveal reveal-up"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-3 font-bold text-slate-900 text-xs sm:text-base hover:text-amber-600 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${
                    activeFaq === idx ? "rotate-180 text-amber-600" : "text-slate-400"
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. FOOTER RESPONSIVE */}
      <footer id="kontak" className="bg-slate-950 text-slate-400 pt-12 sm:pt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-white/10">
            <div className="md:col-span-5">
              <div className="mb-4">
                <LogoAmpera className="h-11 sm:h-12 w-auto" />
              </div>
              <p className="text-xs leading-relaxed text-slate-400 mb-4 sm:mb-6 max-w-md">
                Biro perencana wisata bus terpadu yang didirikan dan dikelola bersama oleh Ibu Marlin & Ibu Desi. Kami mengurus bus pariwisata mitra, hotel, tiket wisata, konsumsi rombongan, serta mendampingi langsung seluruh perjalanan Anda.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3 sm:mb-5 border-l-2 border-amber-400 pl-3">
                Layanan Kami
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#rombongan" className="hover:text-amber-400 transition">Rancangan Tour Rombongan</a></li>
                <li><Link href="/portofolio" className="hover:text-amber-400 transition">Portofolio Perjalanan</Link></li>
                <li><a href="#layanan" className="hover:text-amber-400 transition">Pendampingan Tour Guide Lapangan</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3 sm:mb-5 border-l-2 border-amber-400 pl-3">
                Kontak Founders
              </h4>
              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Founder & Tour Leader (Ibu Marlin)</span>
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
                  <span className="text-slate-500 block text-[11px]">Founder & Tour Leader (Ibu Desi)</span>
                  <a
                    href={companyData.owners[1].waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-bold hover:underline block text-sm"
                  >
                    {companyData.owners[1].number}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 sm:py-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 text-center sm:text-left">
            <div>
              © 2026 Anugerah Palembang Tour. Seluruh Hak Cipta Dilindungi.
            </div>
            <div className="flex gap-5">
              <a href="#home" className="hover:text-amber-400 transition">Privasi</a>
              <a href="#home" className="hover:text-amber-400 transition">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={companyData.owners[0].waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs p-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 transition active:scale-95"
          title="Chat WhatsApp Ibu Marlin"
        >
          <Phone size={15} />
          <span className="hidden sm:inline">Ibu Marlin ({companyData.owners[0].number})</span>
        </a>
        <a
          href={companyData.owners[1].waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs p-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 transition active:scale-95"
          title="Chat WhatsApp Ibu Desi"
        >
          <Phone size={15} />
          <span className="hidden sm:inline">Ibu Desi ({companyData.owners[1].number})</span>
        </a>
      </div>
    </div>
  );
}