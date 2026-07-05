import { CalendarDays, Clock, MapPin, CalendarPlus } from 'lucide-react';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';
import Page from './ui/Page';

// Halaman 4: undangan acara aqiqah.
export default function EventPage() {
  const { event, meta, location } = config;
  const calUrl = googleCalendarUrl(event, { title: meta.title, location: location.label });
  const rows = [
    { icon: CalendarDays, text: event.date },
    { icon: Clock, text: event.time },
    { icon: MapPin, text: `${event.venue}, ${event.address}` },
  ];
  return (
    <Page chapter="Undangan" pageNo="Halaman 4" className="text-center">
      <h2 className="font-display text-3xl font-bold text-rose-deep">{event.name}</h2>
      <p className="mt-2 text-sm text-muted">Dengan suka cita kami mengundang Anda</p>

      <ul className="mt-6 space-y-3 text-left">
        {rows.map(({ icon: Icon, text }, i) => (
          <li key={i} className="flex items-start gap-3 rounded-2xl bg-blush/40 px-4 py-3 text-sm font-semibold text-ink">
            <Icon size={18} className="mt-0.5 shrink-0 text-rose-deep" /> {text}
          </li>
        ))}
      </ul>

      <a
        href={calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-rose-deep px-5 py-2.5 text-xs font-bold text-rose-deep transition hover:bg-rose-deep hover:text-cream"
      >
        <CalendarPlus size={14} /> Tambah ke Kalender
      </a>
    </Page>
  );
}
