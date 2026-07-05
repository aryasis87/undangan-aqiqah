'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Moon, Star } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';

// Sampul buku cerita "Dreamy Storybook" (porting Stitch) — bulan, awan, bintang.
export default function BookCover({ onOpen }) {
  const guest = useGuestName();
  const { baby, opening } = config;

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-rose/40 via-blush/50 to-cream"
      exit={{ opacity: 0, rotateY: -25 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Bintang berkelip */}
      <Star size={22} className="absolute left-8 top-12 animate-twinkle fill-gold text-gold opacity-70" />
      <Star size={16} className="absolute right-10 top-1/4 animate-twinkle fill-rose-deep text-rose-deep opacity-60 [animation-delay:1s]" />
      <Star size={28} className="absolute bottom-24 right-8 animate-twinkle fill-gold text-gold opacity-50 [animation-delay:2s]" />

      <div className="flex min-h-full items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="story-page relative w-full max-w-sm overflow-hidden p-8 text-center"
        >
          {/* Ornamen bulan + awan */}
          <div className="relative mb-4 flex justify-center animate-floaty">
            <div className="absolute -top-6 h-24 w-24 rounded-full bg-rose-deep/20 blur-2xl" />
            <Moon size={64} className="relative z-10 fill-rose-deep/90 text-rose-deep drop-shadow" />
            <span className="absolute -left-3 top-8 h-5 w-12 rounded-full bg-cream/90 blur-[2px]" />
            <span className="absolute -right-1 top-3 h-6 w-14 rounded-full bg-cream/90 blur-[2px]" />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-deep">Undangan Aqiqah</p>
          <h1
            className="mt-3 font-display text-4xl font-bold leading-tight text-rose-deep"
            style={{ textShadow: '0 0 16px rgba(255,255,255,0.85)' }}
          >
            {opening.cover}
          </h1>
          <div className="mx-auto mt-4 mb-2 h-1 w-16 rounded-full bg-rose/50" />
          <p className="text-sm italic text-muted">Kisah kecil yang baru saja dimulai…</p>

          {/* Foto bayi */}
          <div className="relative mx-auto my-6 h-40 w-40 overflow-hidden rounded-full border-[6px] border-cream shadow-lg">
            <Image src={baby.photo} alt={baby.fullName} fill priority sizes="160px" className="object-cover" />
          </div>
          <h2 className="font-display text-2xl font-bold text-ink">{baby.name}</h2>

          <div className="mt-5 rounded-2xl bg-blush/50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Untuk Sahabat</p>
            <p className="text-base font-bold text-ink">{guest}</p>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
            className="mt-6 inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-rose-deep px-7 py-3.5 text-sm font-bold text-cream shadow-lg shadow-rose-deep/20 transition hover:bg-ink"
          >
            <BookOpen size={16} /> Buka Buku Cerita
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
