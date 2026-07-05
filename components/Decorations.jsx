// Latar storybook lembut: awan melayang, bulan, bintang berkelip. pointer-events-none.
function Cloud({ className, w = 90 }) {
  return (
    <svg className={className} width={w} height={w * 0.6} viewBox="0 0 100 60" fill="currentColor" aria-hidden="true">
      <path d="M25 50a15 15 0 0 1 0-30 18 18 0 0 1 34-4 14 14 0 0 1 16 14 12 12 0 0 1-3 20H25z" />
    </svg>
  );
}
function Star({ className, s = 14 }) {
  return (
    <svg className={className} width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3l2 6 6 .5-4.7 4 1.6 6L12 16.8 7.1 19.5l1.6-6L4 9.5 10 9z" />
    </svg>
  );
}

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute right-[8%] top-[6%] text-gold/80 animate-floaty" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.8A8 8 0 1 1 11.2 3a6.4 6.4 0 0 0 9.8 9.8z" />
      </svg>
      <Cloud className="absolute left-[-4%] top-[16%] text-rose/40 animate-floaty" w={120} />
      <Cloud className="absolute right-[-3%] top-[44%] text-blush/80 animate-floaty [animation-delay:1.2s]" w={100} />
      <Cloud className="absolute left-[6%] bottom-[10%] text-rose/30 animate-floaty [animation-delay:0.6s]" w={90} />
      <Star className="absolute left-[20%] top-[10%] text-gold animate-twinkle" s={16} />
      <Star className="absolute right-[24%] top-[30%] text-rose-deep animate-twinkle [animation-delay:0.8s]" s={12} />
      <Star className="absolute right-[14%] bottom-[28%] text-gold animate-twinkle [animation-delay:1.4s]" s={14} />
    </div>
  );
}
