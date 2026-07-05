'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Decorations from '@/components/Decorations';
import BookCover from '@/components/BookCover';
import Announcement from '@/components/Announcement';
import BirthStats from '@/components/BirthStats';
import NameMeaning from '@/components/NameMeaning';
import EventPage from '@/components/EventPage';
import Gallery from '@/components/Gallery';
import MapEmbed from '@/components/MapEmbed';
import RSVPForm from '@/components/RSVPForm';
import WishesForm from '@/components/WishesForm';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleRSVP = (data) => {
    // TODO: kirim ke backend/Firebase
    console.log('RSVP:', data);
  };

  return (
    <main>
      <Decorations />

      <AnimatePresence>
        {!opened && <BookCover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <div className="relative z-10">
          <Announcement />
          <BirthStats />
          <NameMeaning />
          <EventPage />
          <Gallery />
          <MapEmbed />
          <RSVPForm onSubmit={handleRSVP} />
          <WishesForm />
          <Footer />
          <MusicPlayer playing={opened} />
        </div>
      )}
    </main>
  );
}
