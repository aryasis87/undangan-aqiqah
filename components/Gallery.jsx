'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 5: galeri foto si kecil (lightbox).
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);

  return (
    <Page chapter="Album Kenangan" pageNo="Halaman 5">
      <h2 className="text-center font-display text-3xl font-bold text-ink">Galeri Si Kecil</h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gallery.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(src)}
            className="group relative h-32 w-full overflow-hidden rounded-2xl border-4 border-blush shadow-sm sm:h-36"
            aria-label={`Perbesar foto ${i + 1}`}
          >
            <Image src={src} alt={`Foto ${i + 1}`} fill sizes="(max-width:640px) 50vw, 33vw" className="object-cover transition group-hover:scale-110" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true"
          >
            <button className="absolute right-5 top-5 text-cream" onClick={() => setActive(null)} aria-label="Tutup">
              <X size={28} />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-lg overflow-hidden rounded-3xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active} alt="Foto" fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  );
}
