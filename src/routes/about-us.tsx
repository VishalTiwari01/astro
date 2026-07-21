import { Link } from "react-router-dom";
import { useState } from "react";

const BASE = "https://www.krishnacoming.com";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Courses & Features", to: "/features" },
  { label: "User Stories", to: "/testimonial" },
  { label: "Team", to: "/team" },
  { label: "Awards & Accolades", to: "/awardsaccolades" },
  { label: "Blogs", to: "/blog" },
];

const missionPoints = [
  {
    icon: "feature1.svg",
    title: "Positive Pregnancy",
    text: "Empower every couple with knowledge, wisdom & tools for a happy and healthy pregnancy journey.",
  },
  {
    icon: "feature2.svg",
    title: "Great Children",
    text: "Nurture the growing baby in the womb with good values, health and virtues for a brighter next generation.",
  },
  {
    icon: "feature3.svg",
    title: "Global Reach",
    text: "Take the science of Garbh Sanskar to every home across the world, breaking language & geographical barriers.",
  },
  {
    icon: "feature4.svg",
    title: "Scientific Approach",
    text: "Combine ancient Indian Garbh Sanskar wisdom with modern medical & psychological science.",
  },
];

const teamRoles = [
  "IITians",
  "Scientists",
  "Gynaecologists",
  "Garbh Sanskar Experts",
  "Vedmurti Brahmins",
  "Life Trainers",
  "Yoga Experts",
  "Meditators",
  "Nutritionists",
  "Revered Astrologers",
  "Musicians",
  "Child Psychologists",
];

const stats = [
  { icon: "feature1.svg", num: "1 Lakh+", label: "Downloads" },
  { icon: "feature2.svg", num: "1200000+", label: "YouTube Views" },
  { icon: "feature3.svg", num: "62+", label: "Countries" },
  { icon: "feature4.svg", num: "4.6 Stars", label: "Rating on Google Play Store" },
  { icon: "feature5.svg", num: "Thousands", label: "of Happy, Healthy & Stress free Pregnancies" },
];

const milestones = [
  {
    year: "2018",
    title: "The Vision",
    text: "Astro Baby was envisioned as a bridge between ancient Garbh Sanskar wisdom and modern-day pregnant couples.",
  },
  {
    year: "2019",
    title: "Research & Development",
    text: "Years of research by IITians, doctors, scientists & Vedic scholars shaped the curriculum.",
  },
  {
    year: "2020",
    title: "App Launch",
    text: "The Astro Baby Garbh Sanskar mobile application launched on Android & iOS platforms.",
  },
  {
    year: "2022",
    title: "1 Lakh Downloads",
    text: "Reached 1,00,000+ downloads across 62+ countries, changing lives across the globe.",
  },
  {
    year: "Today",
    title: "A Movement",
    text: "Now the world's most trusted Garbh Sanskar app, appreciated by dignitaries of national stature.",
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <div className="hidden md:block bg-[#1a3a6c] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-3">
            {["facebook", "insta", "youtube", "in", "pinterest"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-7 h-7 border border-white/40 rounded flex items-center justify-center hover:bg-white/10"
                aria-label={s}
              >
                <img src={`${BASE}/assets/img/social/${s}.svg`} alt={s} className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span>info@Astrobaby.com</span>
            <img src={`${BASE}/assets/img/icons/mail.svg`} alt="mail" className="w-4 h-4 invert" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#eef1f5]">
        <div className="hidden md:grid max-w-7xl mx-auto px-4 py-4 grid-cols-3 items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={`${BASE}/assets/img/call.svg`} alt="call" className="w-10 h-10" />
            <div>
              <div className="text-[#1a3a6c] font-semibold">Call Us</div>
              <a href="tel:+919109155039" className="text-slate-700 text-sm">
                +91 9109155039
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <Link to="/">
              <img src={"/images/logo.png"} alt="Astro Baby" className="h-24" />
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[#1a3a6c] font-semibold text-sm mb-1">Free Download</div>
            <div className="flex gap-2">
              <a href="http://bit.ly/KCGSapp">
                <img src={`${BASE}/assets/img/playstore.jpg`} alt="playstore" className="h-10" />
              </a>
              <a href="https://apple.co/3iEfg7K">
                <img src={`${BASE}/assets/img/appstore.jpg`} alt="appstore" className="h-10" />
              </a>
            </div>
          </div>
          <div className="md:hidden flex justify-center col-span-2">
            <Link to="/">
              <img src={"/images/logo.png"} alt="Krishna Coming" className="h-20" />
            </Link>
          </div>
        </div>

        {/* Nav */}
        <nav className="bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-center">
            <div className="md:hidden flex items-center justify-between py-3 w-full">
              <Link to="/">
                <img src={"/images/logo.png"} alt="Krishna Coming" className="h-12" />
              </Link>
              <button
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="p-1.5 bg-[#f7f5f0] rounded-md border border-slate-200">
                  <img src={`${BASE}/assets/img/hamburger.svg`} alt="menu" className="w-5 h-5" />
                </div>
              </button>
            </div>
            <ul
              className={`${
                menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row gap-1 md:gap-2 w-full md:w-auto py-2 md:py-0`}
            >
              {navItems.map((item) => {
                const active = item.label === "About Us";
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                        active ? "bg-[#eef1f5] text-[#1a3a6c]" : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 border md:border-slate-300 md:rounded-full hover:bg-slate-100">
                  Language <span className="text-xs">▼</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Page title banner */}
      <section className="bg-[#eef1f5] py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1a3a6c]">About Us</h1>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-[#1a3a6c]">About Us</span>
          </p>
        </div>
      </section>

      {/* What is Garbh Sanskar */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/team.png"
            alt="What is Garbh Sanskar"
            className="w-full rounded-lg shadow"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-4">
              What is Garbh Sanskar?
            </h2>
            <p className="italic text-slate-700 leading-relaxed mb-4">
              Multiplication of Virtues & Division of Defects is called <strong>'Sanskar'</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Garbh Sanskar is the ancient Indian practice of teaching or imparting good values,
              health and wisdom to the growing baby in the mother's womb. It is a scientifically
              proven fact that a baby in the womb responds to outside stimuli - sound, light, touch
              and even the mother's thoughts & emotions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Practicing Garbh Sanskar during pregnancy helps in overall well-being of both the
              mother and the child - physically, mentally, emotionally and spiritually.
            </p>
          </div>
        </div>
      </section>

      {/* What is Krishna Coming */}
      <section className="py-14 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-4">
              What is Astro Baby?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Astro Baby Garbh Sanskar</strong> is India's Premier Garbh Sanskar mobile
              application - a result of years of research on Garbh Sanskar by a team of IITians,
              doctors, scientists, Vedic scholars & Garbh Sanskar experts.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              It brings together modern science and ancient Indian wisdom to make pregnancy a
              positive, happy and healthy experience for the couples and to nurture the growing baby
              in the mother's womb with the best of values, health & virtues.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Available in English & हिन्दी, on Android & iOS - Astro Baby is being used by
              thousands of pregnant couples across 62+ countries.
            </p>
          </div>
          <img
            src={`${BASE}/assets/img/kc-features.jpg`}
            alt="Astro Baby App"
            className="order-1 md:order-2 w-full max-w-sm mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-2">
            Our Mission
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            To change the entire generation by empowering every pregnant couple with the science &
            wisdom of Garbh Sanskar.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {missionPoints.map((m) => (
              <div key={m.title} className="text-center p-6 bg-[#eef1f5] rounded-lg">
                <img
                  src={`${BASE}/assets/img/features/${m.icon}`}
                  alt=""
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3 className="font-semibold text-[#1a3a6c] mb-2">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 bg-[#f7f5f0]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-4">Our Vision</h2>
          <p className="text-lg text-slate-700 leading-relaxed italic">
            "A world where every child born is a{" "}
            <span className="text-[#1a3a6c] font-semibold">Great Child</span> - blessed with good
            health, sharp intellect, strong values and a positive mindset from the moment of
            conception."
          </p>
          <div className="mt-6 w-24 h-1 bg-[#1a3a6c] mx-auto rounded-full" />
        </div>
      </section>

      {/* Our Team */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/team.png"
            alt="Krishna Coming Team"
            className="w-full rounded-lg shadow"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-4">
              A Team of Experts
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Astro Baby Garbh Sanskar is created by a passionate multi-disciplinary team,
              working together towards making your pregnancy a more positive, happy & healthy
              experience.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {teamRoles.map((r) => (
                <li key={r} className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-[#1a3a6c] mt-1">●</span> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-14 bg-[#eef1f5]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            Our Journey
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1a3a6c]/20 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                    i % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  <div
                    className={`${i % 2 === 0 ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}`}
                  >
                    <div className="inline-block bg-[#1a3a6c] text-white font-bold px-4 py-1 rounded-full text-sm mb-2">
                      {m.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a3a6c] mb-2">{m.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{m.text}</p>
                  </div>
                  <div className={`${i % 2 === 0 ? "" : "md:order-1"} hidden md:block`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            Awards & Accolades
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={`${BASE}/assets/img/en-krisna-coming-grabh-sanskar-awards.jpg`}
              alt="award"
              className="w-full rounded-lg shadow"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#1a3a6c] mb-3">
                Appreciated by the Dignitaries
              </h3>
              <p className="text-slate-700 leading-relaxed">
                An initiative to change the entire generation - 'Astro Baby Garbh Sanskar' has
                been appreciated by numerous dignitaries of National Stature. The team has been
                appreciated by the Hon. President of India, Hon. Prime Minister of India, Lok Sabha
                Speaker, Cabinet Minister, State Chief Ministers, and many others.
              </p>
              <Link
                to="/"
                className="inline-block mt-6 bg-[#1a3a6c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#122a4f]"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            A Glimpse of <span className="text-red-600">Positive motherhood</span> and happier
            lives...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((st) => (
              <div key={st.label} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <img
                  src={`${BASE}/assets/img/features/${st.icon}`}
                  alt=""
                  className="w-14 h-14 mx-auto mb-3"
                />
                <div className="text-xl font-bold text-[#1a3a6c]">{st.num}</div>
                <div className="text-sm text-slate-600 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a3a6c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Begin your Garbh Sanskar journey today
          </h2>
          <p className="text-white/80 mb-6">
            Join thousands of happy couples across 62+ countries.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="http://bit.ly/KCGSapp">
              <img src={`${BASE}/assets/img/playstore.jpg`} alt="playstore" className="h-12" />
            </a>
            <a href="https://apple.co/3iEfg7K">
              <img src={`${BASE}/assets/img/appstore.jpg`} alt="appstore" className="h-12" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Astro Baby Garbh Sanskar. All rights reserved.</div>
          <div className="flex gap-3">
            {["facebook", "insta", "youtube", "in", "pinterest"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-white/40 rounded flex items-center justify-center hover:bg-white/10"
                aria-label={s}
              >
                <img src={`${BASE}/assets/img/social/${s}.svg`} alt={s} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
