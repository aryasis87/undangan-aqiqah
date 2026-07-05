import { Calendar, Clock, Scale, Ruler } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 2: data kelahiran si kecil.
export default function BirthStats() {
  const { baby } = config;
  const items = [
    { icon: Calendar, label: 'Tanggal Lahir', value: baby.birthDate },
    { icon: Clock, label: 'Waktu', value: baby.birthTime },
    { icon: Scale, label: 'Berat', value: baby.weight },
    { icon: Ruler, label: 'Panjang', value: baby.length },
  ];
  return (
    <Page chapter="Bab Kedua" pageNo="Halaman 2">
      <h2 className="text-center font-display text-3xl font-bold text-ink">Data Si Kecil</h2>
      <div className="mt-7 grid grid-cols-2 gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl bg-blush/50 p-5 text-center">
            <Icon size={26} className="mx-auto text-rose-deep" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
            <p className="mt-1 font-display text-lg font-bold text-ink">{value}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
