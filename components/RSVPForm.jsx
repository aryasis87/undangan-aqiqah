'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 7: konfirmasi kehadiran (data lokal/dummy).
export default function RSVPForm({ onSubmit }) {
  const { baby } = config;
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = 'w-full rounded-xl border-2 border-rose/40 bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-rose-deep';

  return (
    <Page chapter="Konfirmasi" pageNo="Halaman 7" className="text-center">
      <h2 className="font-display text-3xl font-bold text-ink">Akan Hadir?</h2>

      {done ? (
        <div className="mt-6 rounded-2xl bg-blush/50 p-7">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-deep text-cream">
            <Check size={26} />
          </div>
          <p className="mt-4 font-display text-2xl font-bold text-ink">Terima kasih, {form.name}!</p>
          <p className="mt-1 text-sm text-muted">Sampai jumpa di acara aqiqah {baby.name}.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4 text-left">
          <input name="name" value={form.name} onChange={handle} placeholder="Nama Anda" className={field} required />
          <select name="attendance" value={form.attendance} onChange={handle} className={field}>
            <option value="hadir">Insya Allah Hadir</option>
            <option value="tidak">Belum Bisa Hadir</option>
            <option value="ragu">Masih Ragu</option>
          </select>
          {form.attendance === 'hadir' && (
            <input type="number" name="guests" min={1} max={10} value={form.guests} onChange={handle} className={field} />
          )}
          <button type="submit" className="w-full rounded-full bg-rose-deep py-3 text-sm font-bold text-cream transition hover:bg-ink">
            Kirim Konfirmasi
          </button>
        </form>
      )}
    </Page>
  );
}
