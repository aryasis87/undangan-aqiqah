import { Heart } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 3: arti nama si kecil, dipecah per kata.
export default function NameMeaning() {
  const { nameMeaning } = config;
  return (
    <Page chapter="Bab Ketiga" pageNo="Halaman 3">
      <h2 className="text-center font-display text-3xl font-bold text-ink">Arti Sebuah Nama</h2>
      <p className="mt-2 text-center text-sm text-muted">Setiap nama adalah doa &amp; harapan</p>

      <div className="mt-7 space-y-4">
        {nameMeaning.map((n) => (
          <div key={n.part} className="flex items-start gap-4 rounded-2xl bg-blush/40 p-5">
            <Heart size={20} className="mt-1 shrink-0 fill-rose text-rose" />
            <div>
              <p className="font-display text-2xl font-bold text-rose-deep">{n.part}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{n.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
