import { Link } from "react-router-dom";
import { useState } from "react";

import { BASE, IMG, type Post, posts, slugify } from "../data/blogs";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Courses & Features", to: "/features" },
  { label: "User Stories", to: "/testimonial" },
  { label: "Team", to: "/team" },
  { label: "Awards & Accolades", to: "/awardsaccolades" },
  { label: "Blogs", to: "/blog" },
];

export function Layout({
  children,
  activeLabel,
}: {
  children: React.ReactNode;
  activeLabel: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-slate-800">
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
            <span>info@krishnacoming.com</span>
            <img src={`${BASE}/assets/img/icons/mail.svg`} alt="mail" className="w-4 h-4 invert" />
          </div>
        </div>
      </div>

      <header className="bg-[#eef1f5]">
        <div className="hidden md:grid max-w-7xl mx-auto px-4 py-4 grid-cols-3 items-center gap-4">
          <div className="md:hidden flex justify-center col-span-2 order-1">
            <Link to="/">
              <img src={`${BASE}/assets/img/logo.png`} alt="Krishna Coming" className="h-20" />
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-3 order-2 md:order-1">
            <img
              src={`${BASE}/assets/img/call.svg`}
              alt="call"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div>
              <div className="text-[#1a3a6c] font-semibold text-xs md:text-base">Call Us</div>
              <a
                href="tel:+919109155039"
                className="text-slate-700 text-xs md:text-sm whitespace-nowrap"
              >
                +91 9109155039
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center order-none md:order-2">
            <Link to="/">
              <img src={`${BASE}/assets/img/logo.png`} alt="Krishna Coming" className="h-24" />
            </Link>
          </div>
          <div className="flex flex-col items-end order-3">
            <div className="text-[#1a3a6c] font-semibold text-[10px] md:text-sm mb-1 uppercase tracking-wider hidden md:block">
              Free Download
            </div>
            <div className="flex gap-1 md:gap-2">
              <a href="http://bit.ly/KCGSapp">
                <img
                  src={`${BASE}/assets/img/playstore.jpg`}
                  alt="playstore"
                  className="h-7 md:h-10"
                />
              </a>
              <a href="https://apple.co/3iEfg7K">
                <img
                  src={`${BASE}/assets/img/appstore.jpg`}
                  alt="appstore"
                  className="h-7 md:h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <nav className="bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-center">
            <div className="md:hidden flex items-center justify-between py-3 w-full">
              <Link to="/">
                <img src={`${BASE}/assets/img/logo.png`} alt="Krishna Coming" className="h-12" />
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
              className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-1 md:gap-2 w-full md:w-auto py-2 md:py-0`}
            >
              {navItems.map((item) => {
                const active = item.label === activeLabel;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-full text-sm font-medium transition-colors ${active ? "bg-[#eef1f5] text-[#1a3a6c]" : "text-slate-700 hover:bg-slate-100"}`}
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

      {children}

      <footer className="bg-[#0f2547] text-white/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} Krishna Coming Garbh Sanskar. All rights reserved.</div>
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

export default function BlogPage() {
  return (
    <Layout activeLabel="Blogs">
      <section className="bg-[#eef1f5]">
        <img
          src={`${BASE}/assets/img/blog/krishna-coming-garbh-sanskar-blogs.png`}
          alt="Garbh Sanskar Blog"
          className="w-full"
        />
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1a3a6c]">
            Garbh Sanskar Blog — <span className="text-red-600">Latest News & Articles</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Insights, guidance and practical tips on Garbh Sanskar, pregnancy care, diet, yoga,
            meditation and spirituality — curated by Krishna Coming experts.
          </p>
        </div>
      </section>

      <section className="py-8 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Link
              key={i}
              to={`/blog/${slugify(p.title)}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={`${IMG}/${p.img}`}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-semibold text-[#1a3a6c] leading-snug line-clamp-3">
                  {p.title}
                </h3>
                <div className="mt-3 text-xs text-slate-500">By Admin | {p.date}</div>
                <div className="mt-4">
                  <span className="inline-block text-sm font-medium text-red-600 border-b border-red-600/40 pb-0.5">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-14 bg-[#1a3a6c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Subscribe to our newsletter</h2>
          <p className="text-white/80 mb-6">
            Get more Garbh Sanskar articles delivered straight to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-slate-800 outline-none bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
