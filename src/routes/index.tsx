import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
const BASE = "https://www.krishnacoming.com";

const navItems = [
  "Home",
  "About Us",
  "Courses & Features",
  "User Stories",
  "Team",
  "Awards & Accolades",
  "Blogs",
];

const featuredLogos = [
  "krishna-coming-garbh-sanskar-dainik-bhaskar.jpg",
  "krishna-coming-garbh-sanskar-dainik-divya-marathi.jpg",
  "krishna-coming-garbh-sanskar-nav-bharat-times.jpg",
  "krishna-coming-garbh-sanskar-times-of-india.jpg",
  "krishna-coming-garbh-sanskar-zee-news.jpg",
  "krishna-coming-garbh-sanskar-bharat-24.jpg",
];

const featuresLeft = [
  "Sankalp Poojan",
  "Punsavan Sanskar",
  "Simantonnayana Sanskar",
  "Garbhsanskar Sutra",
  "Vaidic Mantra Vrushti",
  "Garbhsanskar Music",
  "Jeevan Sutra - The Life Training",
  "Medi-Mitra Sessions",
  "Isht Mantra",
  "Garbhsamvad",
  "Yognidra - The stress-relief session",
  "Parv (Occasion) Based Sessions",
];

const featuresRight = [
  "Supraj Santanotpatti Havan",
  "Meditation",
  "Monthly Calendar",
  "Garbh Sanskar QnA",
  "Let's Smile Together",
  "Sandhya Prarthana",
  "Yoga Session",
  "Nutritionist Session",
  "Mentoring",
  "Brainopedia",
  "Library",
  "Doctor's Session",
];

const stats = [
  { icon: "feature1.svg", num: "1 Lakh+", label: "Downloads" },
  { icon: "feature2.svg", num: "1200000+", label: "YouTube Views" },
  { icon: "feature3.svg", num: "62+", label: "Countries" },
  { icon: "feature4.svg", num: "4.6 Stars", label: "Rating on Google Play Store" },
  { icon: "feature5.svg", num: "Thousands", label: "of Happy, Healthy & Stress free Pregnancies" },
];

const userStories = [
  {
    img: "experience_1727683696.jpg",
    yt: "vEltMP4qvhw",
    name: "Mr. & Mrs. Patil",
    loc: "Kolhapur",
  },
  {
    img: "experience_1724400221.jpg",
    yt: "5YhDhV9Eq4M",
    name: "Mrs. Preeti Shree",
    loc: "Dhanbad",
  },
  {
    img: "experience_1724396585.jpg",
    yt: "Q8V0cuHGBx4",
    name: "Mr. & Mrs. Chaturkar",
    loc: "Pune",
  },
  {
    img: "experience_1723106769.jpg",
    yt: "wGaFK-N_-eo",
    name: "Mr. & Mrs. Sinha",
    loc: "Bangalore",
  },
  { img: "experience_1698234576.jpg", yt: "tkXuMEOJCKo", name: "Mr. & Mrs. Dubey", loc: "Gwalior" },
  { img: "experience_1697802459.jpg", yt: "6MgQ1sZ_tlI", name: "Mr. & Mrs. Jalan", loc: "Delhi" },
];

const scientificEvidences = [
  {
    img: "Scientific-Evidence-03.jpg",
    text: "Maternal Music exposure during pregnancy influences neonatal behavior",
    src: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3299264/",
  },
  {
    img: "Scientific-Evidence-04.jpg",
    text: "Garbhsanskar: Knowledge, attitude & practice among antenatal mothers...",
    src: "https://www.researchgate.net/publication/285618390",
  },
  {
    img: "Scientific-Evidence-01.jpg",
    text: "Babies Listen & Learn while in the womb",
    src: "https://www.webmd.com/baby/news/20130102/babies-learn-womb",
  },
  {
    img: "Scientific-Evidence-02.jpg",
    text: "Language Learning begins in Utero, new study finds",
    src: "https://www.plu.edu/news/archive/2012/12/01/language-learning-begins-in-utero-new-study-finds/",
  },
  {
    img: "Scientific-Evidence-05.jpg",
    text: "Effects of selected aspect of Garbhsanskar on stress, coping",
    src: "https://www.ijsr.net/archive/v5i3/NOV161925.pdf",
  },
  {
    img: "Scientific-Evidence-06.jpg",
    text: "Mother - The Architect of Child",
    src: "http://www.iosrjournals.org/iosr-jhss/papers/Vol.%2022%20Issue8/Version-1/K2208017378.pdf",
  },
];

const faqs = [
  {
    q: "How to start with Krishna Coming GarbhSanskar?",
    a: "To start using Krishna Coming Garbhsanskar, you need to simply download 'Krishna Coming' mobile application on your android device from the playstore. After installing the application just enter your basic details on the app for the free trial. After the free demo, to access full content you can select a premium plan to continue using it as per your pregnancy stage.",
  },
  {
    q: "Can I use Krishna Coming on my laptop or desktop computer?",
    a: "No, 'Krishna Coming Garbhsanskar' is a mobile application only service. You can access and use Krishna Coming on your Android & Apple Mobile and tablet devices.",
  },
  {
    q: "I am in the 5th month of my pregnancy; am I too late to start GarbhSanskar with Krishna Coming?",
    a: "Whether you are in your 1st month of pregnancy or in 9th month of pregnancy, it is never too late to start the process of garbhsanskar. Krishna Coming is prepared in such a scientific way that even late joiners can benefit from this curriculum. Moreover, you can always subscribe to watch episodes of previous months of pregnancy that you've missed.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <div className="bg-[#1a3a6c] text-white text-sm">
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

      {/* Header */}
      <header className="bg-[#eef1f5]">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-3 items-center gap-4">
          <div className="md:hidden flex justify-center col-span-2 order-1">
            <a href="/">
              <img src={`${BASE}/assets/img/logo.png`} alt="Krishna Coming" className="h-20" />
            </a>
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
            <a href="/">
              <img src={`${BASE}/assets/img/logo.png`} alt="Krishna Coming" className="h-24" />
            </a>
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
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <button
              className="md:hidden py-3 flex items-center justify-between gap-2 w-full text-left"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="font-bold text-[#1a3a6c] text-base tracking-wide">MENU</span>
              <div className="p-1.5 bg-[#f7f5f0] rounded-md border border-slate-200">
                <img src={`${BASE}/assets/img/hamburger.svg`} alt="menu" className="w-5 h-5" />
              </div>
            </button>
            <ul
              className={`${
                menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row gap-1 md:gap-2 w-full md:w-auto py-2 md:py-0`}
            >
              {navItems.map((item, i) => (
                <li key={item}>
                  <a
                    href={
                      item === "About Us"
                        ? "/about-us"
                        : item === "Courses & Features"
                          ? "/features"
                          : item === "User Stories"
                            ? "/testimonial"
                            : item === "Team"
                              ? "/team"
                              : item === "Awards & Accolades"
                                ? "/awardsaccolades"
                                : item === "Blogs"
                                  ? "/blog"
                                  : "/"
                    }
                    className={`block px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                      i === 0 ? "bg-[#eef1f5] text-[#1a3a6c]" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 border md:border-slate-300 md:rounded-full hover:bg-slate-100">
                  Language <span className="text-xs">▼</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <HeroSlider />

      {/* Featured On */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-8">
            Featured On
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {featuredLogos.map((logo) => (
              <a key={logo} href="#" className="block p-2">
                <img
                  src={`${BASE}/assets/img/logos-slider/${logo}`}
                  alt="featured logo"
                  className="w-full h-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Us */}
      {/* <section className="py-14 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-2">
            About Us <span className="text-slate-500 font-light">Garbh Sanskar</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#1a3a6c] mb-4">
                What is Garbh Sanskar?
              </h3>
              <p className="italic text-slate-700 leading-relaxed">
                Multiplication of Virtues & Division of Defects is called{" "}
                <strong>'Sanskar'</strong>. Garbh Sanskar is the ancient Indian practice of
                teaching or imparting good values, health and wisdom to the growing baby in the
                mother's womb.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-[#1a3a6c] font-semibold hover:underline"
              >
                READ MORE...
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1a3a6c] mb-4">
                What is Krishna Coming?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Krishna Coming Garbh Sanskar App is a result of years of research on Garbh
                Sanskar. It brings together modern science and ancient Indian wisdom to make
                pregnancy a positive, happy and healthy experience.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-[#1a3a6c] font-semibold hover:underline"
              >
                READ MORE...
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={`${BASE}/assets/img/team-en.jpg`}
            alt="garbh sanskar experts"
            className="w-full rounded-lg shadow"
          />
          <div>
            <p className="text-[#1a3a6c] text-xl font-medium mb-3">A Team of</p>
            <p className="text-slate-700 leading-relaxed mb-3">
              IITians • Scientists • Gynaecologists • Garbh Sanskar Experts • Vedmurti Brahmins •
              Life Trainers • Yoga Experts • Meditators • Nutritionists • Revered Astrologers &
              more...
            </p>
            <p className="text-slate-700 leading-relaxed">
              working towards making your pregnancy a more positive, happy & healthy experience.
            </p>
            <a
              href="#"
              className="inline-block mt-6 bg-[#1a3a6c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#122a4f]"
            >
              READ MORE...
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-[#eef1f5]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <ul className="space-y-2 text-right text-slate-700">
              {featuresLeft.map((f) => (
                <li key={f} className="py-1">
                  {f} <span className="text-[#1a3a6c]">●</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <img
                src={`${BASE}/assets/img/kc-features.jpg`}
                alt="features"
                className="w-full max-w-xs rounded-xl shadow-lg"
              />
            </div>
            <ul className="space-y-2 text-left text-slate-700">
              {featuresRight.map((f) => (
                <li key={f} className="py-1">
                  <span className="text-[#1a3a6c]">●</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-block bg-[#1a3a6c] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#122a4f]"
            >
              23+ Features
            </a>
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
            <div className="flex justify-center md:justify-end">
              <img
                src={`${BASE}/assets/img/en-krisna-coming-grabh-sanskar-awards.jpg`}
                alt="award"
                className="w-full max-w-md rounded-lg shadow object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1a3a6c] mb-3">
                Appreciated by the Dignitaries
              </h3>
              <p className="text-slate-700 leading-relaxed">
                An initiative to change the entire generation - 'Krishna Coming Garbh Sanskar' has
                been appreciated by numerous dignitaries of National Stature. The team has been
                appreciated by the Hon. President of India, Hon. Prime Minister of India, Lok Sabha
                Speaker, Cabinet Minister, State Chief Ministers, and many others.
              </p>
              <a
                href="#"
                className="inline-block mt-6 bg-[#1a3a6c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#122a4f]"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="py-14 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c]">
            User Stories
          </h2>
          <p className="text-center text-slate-600 mt-2 mb-10">
            From India & Abroad, their lives have changed for better...
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {userStories.map((s) => (
              <a
                key={s.yt}
                href={`https://www.youtube.com/watch?v=${s.yt}`}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative rounded-lg overflow-hidden shadow">
                  <img
                    src={`${BASE}/template/front/krishnaAssest/img/experiences/${s.img}`}
                    alt={s.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30">
                    <img
                      src={`${BASE}/assets/img/yt-button.svg`}
                      alt="play"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <div className="font-semibold text-slate-800 text-sm">{s.name}</div>
                  <div className="text-xs text-slate-500">{s.loc}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-block bg-[#1a3a6c] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#122a4f]"
            >
              SEE MORE...
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            A Glimpse of <span className="text-red-600">Positive motherhood</span> and happier
            lives...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((st) => (
              <div key={st.label} className="text-center p-4 bg-[#eef1f5] rounded-lg">
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

      {/* Scientific Evidences */}
      <section className="py-14 bg-[#eef1f5]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c]">
            Scientific Evidences
          </h2>
          <p className="text-center text-slate-600 mt-2 mb-10">
            Modern Science now in unison with Ancient Indian Science...
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scientificEvidences.map((e) => (
              <div key={e.img} className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src={`${BASE}/template/front/krishnaAssest/img/${e.img}`}
                  alt={e.text}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-slate-700 mb-3">{e.text}</p>
                  <a
                    href={e.src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1a3a6c] font-semibold text-sm hover:underline"
                  >
                    Click here to visit source...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1a3a6c] mb-10">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 bg-[#eef1f5] hover:bg-slate-200"
                >
                  <span className="font-semibold text-[#1a3a6c]">{f.q}</span>
                  <span className="text-[#1a3a6c] text-2xl leading-none">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && <div className="p-5 text-slate-700 leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block bg-[#1a3a6c] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#122a4f]"
            >
              SEE MORE
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-[#1a3a6c] text-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src={`${BASE}/assets/img/baby.png`} alt="baby" className="w-full max-w-sm mx-auto" />
          <div>
            <h3 className="text-2xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-4">
              To get more Garbh Sanskar related content in your inbox subscribe to our newsletter by
              submitting your email id here.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 rounded-full text-slate-800"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
