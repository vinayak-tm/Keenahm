import { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal, Clock } from 'lucide-react';

interface Project {
  id: string;
  label: string;
  before: string;
  after: string;
  duration: string;
  tag: string;
}

const projects: Project[] = [
  {
    id: 'kitchen-1',
    label: 'Kitchen Renovation',
    before: 'https://images.pexels.com/photos/12786902/pexels-photo-12786902.jpeg?auto=compress&cs=tinysrgb&w=1200',
    after: 'https://images.pexels.com/photos/8584040/pexels-photo-8584040.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '3 weeks',
    tag: 'Kitchen',
  },
  {
    id: 'kitchen-2',
    label: 'Galley Kitchen Remodel',
    before: 'https://images.pexels.com/photos/18957835/pexels-photo-18957835.jpeg?auto=compress&cs=tinysrgb&w=1200',
    after: 'https://images.pexels.com/photos/4800179/pexels-photo-4800179.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '4 weeks',
    tag: 'Kitchen',
  },
  {
    id: 'bathroom-1',
    label: 'Master Bath Remodel',
    before: 'https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&w=1200',
    after: 'https://images.pexels.com/photos/10827349/pexels-photo-10827349.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '2 weeks',
    tag: 'Bathroom',
  },
  {
    id: 'kitchen-3',
    label: 'Open-Concept Kitchen',
    before: 'https://images.pexels.com/photos/6835108/pexels-photo-6835108.jpeg?auto=compress&cs=tinysrgb&w=1200',
    after: 'https://images.pexels.com/photos/5353881/pexels-photo-5353881.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '5 weeks',
    tag: 'Kitchen',
  },
];

const tags = ['All', 'Kitchen', 'Bathroom'];

export default function BeforeAfter() {
  const [activeTag, setActiveTag] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const filtered = activeTag === 'All' ? projects : projects.filter((p) => p.tag === activeTag);
  const current = filtered[activeIndex] || filtered[0];

  useEffect(() => {
    setActiveIndex(0);
    setSliderPos(50);
  }, [activeTag]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onEnd = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, [handleMove]);

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#F59E0B] font-semibold text-sm tracking-[0.15em] uppercase">Before / After</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            See The Transformations
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Drag the slider to reveal what we walked into — and what we left behind.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTag === tag
                  ? 'bg-[#F59E0B] text-[#0B192C]'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            role="slider"
            aria-label="Before and after renovation comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setSliderPos((value) => Math.max(0, value - 5));
              if (e.key === 'ArrowRight') setSliderPos((value) => Math.min(100, value + 5));
            }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl focus-visible:ring-4 focus-visible:ring-[#F59E0B]"
            onMouseDown={(e) => { isDragging.current = true; handleMove(e.clientX); }}
            onTouchStart={(e) => { isDragging.current = true; handleMove(e.touches[0].clientX); }}
          >
            {/* After (full) */}
            <img src={current.after} alt="After renovation" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={current.before}
                alt="Before renovation"
                className="absolute inset-0 h-full object-cover"
                style={{ width: `${containerRef.current?.clientWidth || 100}%`, maxWidth: 'none' }}
                draggable={false}
              />
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-[#0B192C]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0B192C] text-xs font-bold px-3 py-1.5 rounded-full">
              AFTER
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#0B192C]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              {current.duration}
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-[#0B192C]" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.14em] text-gray-500">Drag, swipe, or use your arrow keys to compare</p>

          {/* Project selector */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {filtered.map((proj, i) => (
              <button
                key={proj.id}
                onClick={() => { setActiveIndex(i); setSliderPos(50); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  i === activeIndex
                    ? 'bg-[#F59E0B] text-[#0B192C]'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {proj.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
