import { useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiPlay,
  FiShield,
  FiStar,
  FiThumbsUp,
  FiUsers,
  FiX,
} from "react-icons/fi";
const heroOne = "https://via.placeholder.com/800x500?text=Story+1";
const heroTwo = "https://via.placeholder.com/800x500?text=Story+2";
const storyThree = "https://via.placeholder.com/800x500?text=Story+3";
import { storiesData } from "@/data/storiesData";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

const storyImages = [heroOne, heroTwo, storyThree];
const benefits = [
  { icon: FiHeart, label: "Calmer journey" },
  { icon: FiShield, label: "Expert guidance" },
  { icon: FiAward, label: "Lasting confidence" },
];
const stats = [
  { icon: FiUsers, value: "10K+", label: "Happy Families" },
  { icon: FiGlobe, value: "25+", label: "Countries" },
  { icon: FiStar, value: "4.9/5", label: "Average Rating" },
  { icon: FiThumbsUp, value: "98%", label: "Recommend Us" },
];

export default function StoriesSlider() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll(Boolean(activeVideo));

  useEffect(() => {
    if (!activeVideo) return;
    closeBtnRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeVideo]);

  return (
    <section
      ref={sectionRef}
      className="stories-premium relative isolate overflow-hidden py-20 md:py-28"
    >
      <Mandala className="-left-36 top-24" />
      <Mandala className="-right-36 bottom-20" />
      <Decorations />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <header className="mx-auto max-w-3xl text-center" data-reveal>
          <span className="inline-flex rounded-full border border-[#E8D9EF] bg-[#F3E8F8] px-5 py-2 text-xs font-semibold tracking-[0.22em] text-[#5A098F]">
            USER STORIES
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#2A1830] md:text-5xl lg:text-[3.5rem]">
            Real Journeys,{" "}
            <em className="font-display font-semibold text-[#5A098F]">Beautiful Experiences</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#625A68] md:text-base">
            Heartfelt stories from families who found calm, confidence, and a deeper connection
            through AstroBaby.
          </p>
        </header>

        <div
          className="stories-track mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
          data-reveal
        >
          {storiesData.map((story, index) => (
            <article
              key={story.name}
              className="story-card group min-w-[86%] snap-center overflow-hidden sm:min-w-0"
            >
              <button
                type="button"
                className="relative block aspect-[16/10] w-full overflow-hidden"
                onClick={() => setActiveVideo(story.videoId)}
                aria-label={`Play ${story.name}'s story`}
              >
                <img
                  src={storyImages[index]}
                  alt={`${story.name}, a AstroBaby family`}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#2A1830]/45 via-transparent to-transparent" />
                <span className="play-button absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/90 text-[#5A098F] shadow-xl transition duration-300 group-hover:scale-110">
                  <FiPlay className="ml-1 fill-current text-2xl" />
                </span>
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#5A098F] backdrop-blur">
                  <FiMapPin /> {story.city}
                </span>
                <span className="absolute -bottom-5 right-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#5A098F] font-display text-3xl text-white shadow-lg">
                  “
                </span>
              </button>
              <div className="p-6 pt-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#2A1830]">
                      {story.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-[#8B32BD]">
                      Verified family
                    </p>
                  </div>
                  <div
                    className="flex gap-0.5 text-[#F4C27A]"
                    aria-label={`${story.rating} out of 5 stars`}
                  >
                    {Array.from({ length: story.rating }).map((_, star) => (
                      <FiStar key={star} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-5 min-h-20 text-sm leading-7 text-[#625A68]">“{story.quote}”</p>
                <div className="mt-5 grid grid-cols-3 border-t border-[#E8D9EF] pt-5">
                  {benefits.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 px-1 text-center">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F3E8F8] text-[#5A098F]">
                        <Icon />
                      </span>
                      <span className="text-[10px] font-medium leading-tight text-[#625A68]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-12 grid overflow-hidden rounded-[28px] border border-[#E8D9EF] bg-white/80 px-5 py-6 shadow-[0_14px_40px_rgba(90,9,143,0.09)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          data-reveal
        >
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-3 px-4 py-3 ${index ? "lg:border-l lg:border-[#E8D9EF]" : ""}`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F3E8F8] text-xl text-[#5A098F]">
                <Icon />
              </span>
              <div>
                <strong className="block text-lg font-semibold text-[#2A1830]">{value}</strong>
                <span className="text-xs text-[#625A68]">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Story video"
          className="fixed inset-0 z-[70] grid place-items-center bg-[#2A1830]/85 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-black shadow-2xl">
            <button
              ref={closeBtnRef}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-[#5A098F] shadow-lg"
            >
              <FiX />
            </button>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="User story"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Mandala({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mandala absolute h-80 w-80 rounded-full opacity-[0.08] ${className}`}
    />
  );
}

function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute left-[9%] top-[18%] h-2 w-2 rotate-45 bg-[#F4C27A] shadow-[0_0_18px_#F4C27A]" />
      <span className="story-float absolute right-[12%] top-[22%] text-xl text-[#8B32BD]/40">
        ✦
      </span>
      <span className="story-float absolute bottom-[22%] left-[6%] text-lg text-[#F4C27A]/70 [animation-delay:1.2s]">
        ✧
      </span>
      <span className="absolute right-[5%] top-1/2 h-24 w-24 rounded-full bg-[#8B32BD]/10 blur-2xl" />
      <span className="absolute bottom-[8%] left-[18%] h-28 w-28 rounded-full bg-[#F4C27A]/10 blur-3xl" />
    </div>
  );
}
