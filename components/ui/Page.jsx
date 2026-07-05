import Reveal from './Reveal';

// Pembungkus "halaman buku cerita" — kartu lembut bertepi titik + nomor halaman.
export default function Page({ chapter, pageNo, children, className = '' }) {
  return (
    <section className="relative z-10 px-5 py-8">
      <Reveal className="mx-auto max-w-xl">
        <div className="story-page story-edge px-7 py-10 md:px-10">
          {chapter && (
            <p className="text-center font-script text-3xl text-rose-deep">{chapter}</p>
          )}
          <div className={`mt-4 ${className}`}>{children}</div>
          {pageNo && (
            <p className="mt-8 text-center text-xs font-semibold tracking-widest text-muted">
              ~ {pageNo} ~
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
