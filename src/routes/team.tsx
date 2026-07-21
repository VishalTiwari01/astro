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

type Member = {
  img: string;
  name: string;
  title: string;
  bio: string[];
};

const members: Member[] = [
  {
    img: "award_1661513636.jpg",
    name: "Prof. Vipin Joshi",
    title: "Educationist & Entrepreneur — Founder Director, AstroBaby.com",
    bio: [
      "A man of many talents, Prof. Vipin Joshi is a teacher, an entrepreneur and a visionary. He established CatalyseR Eduventures (i) Pvt. Ltd to train students for competitive entrance examinations and has produced 5 IIT JEE Zone toppers in 4 consecutive years, a national record. He has also produced 750+ NTSE scholars.",
      "He received numerous awards from dignitaries for his contribution in the field of education, including Shri Satyapal Singh, Shri S. P. Singh Baghel, Shri Shivraj Singh Chouhan and Shri Deepak Joshi.",
      "Along with an expert team of gynaecologists, scientists and IITians, he researched and made it a mission to revive the Ancient Indian Garbh Sanskar Process — today known as 'Astro Baby Garbh Sanskar'.",
    ],
  },
  {
    img: "award_1680693648.jpg",
    name: "P.P. Shri Praveen Nathji Maharaj",
    title:
      "Garbh Sanskar Expert, M.A. (Sanskrit), Yog Visharad, Jyotish Martand, Prakrutik Chikitsak",
    bio: [
      "Initiated in the Nath Parampara of Sanatan Dharma, Acharya Praveen Nathji Maharaj taught students of science for many years.",
      "Under his Guru's guidance, his intellectual interest in spiritualism led him to the Himalayas. He studied Bhagwad Gita, Ramayana, Dasbodh and earned degrees in Yog Visharad, Jyotish Vidhya and Prakratik Chikitsa.",
      "For the past 22 years, Acharya-Shri has tirelessly worked to revive the ancient Indian Garbh Sanskar process. Under his guidance, thousands of families have given birth to calm, intelligent and sanskarvaan progenies.",
    ],
  },
  {
    img: "award_1680694660.jpg",
    name: "Vedratna Dr. Shivkaran Thottam Namboothiri",
    title: "B.A.M.S., P.G.D.Y., Ayurved Ratna, Vaidik Mantrochchar Expert (Samveda)",
    bio: [
      "Born in the glorious lineage of Adhya Shankaracharya himself, Acharya Shivakaran Thottam Namboothiri has devoted his entire life to the service of the Vedas.",
      "He belongs to one of the two rarest Namboothiri families of Kerala who have conserved the Shastriya tradition of chanting Samaveda.",
      "A living encyclopaedia of Ayurveda, he has amazed Germany, America and many other nations with the miraculous effects of Vaidic Hymns. He leads the Samvaidic chants in Astro Baby.",
    ],
  },
  {
    img: "award_1680694582.png",
    name: "Shri Kothmangalam Vasudevan Namboothiri",
    title: "M.STAT., Vaidik Mantrochchar Expert (Rigveda)",
    bio: [
      "One of the most honored and seniormost authorities on Rigveda in India.",
      "From an early age he excelled in academics, achieved gold medals at university level and served as a Rank 1 officer in the Statistical Services of India for many years, before voluntarily retiring to dedicate his life to the Vedas.",
      "He leads the Rigvaidic chants in Astro Baby.",
    ],
  },
  {
    img: "award_1661517820.png",
    name: "Dr. Newalkar",
    title: "MBBS, MD (Ob-Gyn) — Exp: 20+ years",
    bio: [
      "Known as one of the best gynaecologists in India for high-risk pregnancy cases.",
      "Completed MBBS in 1995 and M.D. (OBS & GYN) in 2001 and has successfully handled more than 1 lakh pregnancy cases in the past 20 years.",
      "She has been spreading the science of being positive and stress-free during pregnancy through Garbh Sanskar for the past 17 years.",
    ],
  },
  {
    img: "award_1661517894.png",
    name: "Prof. Ramesh Nagda",
    title: "B.Tech. IIT Mumbai",
    bio: [
      "An alumnus of the very first batch of IIT Mumbai in 1980, a successful entrepreneur, IIT trainer and counselor, and a member of various revered academic committees.",
      "His technological expertise powers the Isht Mantra feature — astrological calculations of the rashis of pregnant women and their husbands — and the software algorithms behind the Astro Baby application.",
    ],
  },
  {
    img: "award_1680694412.png",
    name: "Prof. Pankaj Pimple",
    title: "M.Sc (Gold Medalist), M.Phil, Ph.D.",
    bio: [
      "For the past 20 years, Prof. Pankaj Pimple has been an inspiration for many research scholars across India.",
      "A man of science and a spiritual soul, his research helped shape the most credible and scientific Garbh Sanskar curriculum in the world.",
    ],
  },
  {
    img: "team_1656592994.png",
    name: "Shri Vivek Ghalsasi",
    title: "International Life Coach — Exp: 45+ Years",
    bio: [
      "M.A. in History/Philosophy and M.A. in Journalism. An expert on family and sanskar related issues with vast experience in Parental Guidance.",
      "He has coached thousands of people on Life Management and Successful Parenthood and has been honoured with various awards by many national organisations.",
    ],
  },
  {
    img: "award_1680694216.png",
    name: "Shri Vijay Shankar Mehta",
    title: "Revered Life Management Coach, Ex Editor Dainik Bhaskar — 28+ Years",
    bio: [
      "Bureau adviser and editor-in-charge of the Dharma-peeth desk of Dainik Bhaskar.",
      "As a spiritual life trainer, he has delivered 3500+ lectures all across the country on Shri Ram Katha, Shrimad Bhagwat Katha and Hanuman Chalisa.",
    ],
  },
  {
    img: "award_1680694125.png",
    name: "Shri Siddhant Gadgil",
    title: "Ved Murti (Yajurved), Pramukh Acharya - Ved Pathshala, Pune",
    bio: [
      "Rigved Shodash Granth, Ghanant Adhyayan Karmkand and Rigved Gyan Pariksha certified.",
      "Awarded 'Rigved Acharya Puraskar', 'Ved Pandit Puraskar' and 'Ganpati Puraskar' among many other honours.",
    ],
  },
  {
    img: "award_1680694044.png",
    name: "Ms. Priyamvada Garg",
    title: "Certified Pregnancy Meditation and Yoga Specialist — 13+ Years",
    bio: [
      "A certified pre-natal and post-natal yoga expert with an experience of over 13 years.",
      "Pregnancy meditation specialist and qualified Hatha Yoga practitioner.",
    ],
  },
  {
    img: "award_1680693960.png",
    name: "Mrs. Vinita Jaiswal",
    title: "Senior Dietitian, Food Therapist and Nutritionist — 18+ Years",
    bio: [
      "Senior dietitian with an M.Sc. in Food & Nutrition.",
      "Pregnancy diet and nutrition expert with over 18 years of experience; has counselled more than 10,000 individuals.",
    ],
  },
  {
    img: "award_1680693883.png",
    name: "Mrs. Vishakha Rajurkar",
    title: "Senior Meditation Expert — 16+ Years",
    bio: [
      "Senior meditation expert with more than 16 years of experience.",
      "Certified pregnancy counsellor, M.A. in Sociology and an Art of Living trainer.",
    ],
  },
  {
    img: "award_1680693406.png",
    name: "Shri Vidhyadhar Narayan Karandikar",
    title: "Senior Jyotirvid — Khagol, Panchang Ganit, Mantra & Vastu Shastra",
    bio: [
      "Expertise in Jyotish Shastra, Khagol Shastra, Panchang Ganit, Mantra Shastra and Vaastu Shastra.",
      "A prolific writer, he has authored 'Shri Shakti Upasana', 'Buddhi Vardhak Stotra' and 'Panchang Dinvishesh'. Founder of Shri AngiraVed Pathshala in Maharashtra.",
    ],
  },
  {
    img: "award_1680693750.png",
    name: "Shri Vinod Rawal",
    title: "Jyotish Shiromani, Ex Consultant Dainik Bhaskar — 25+ Years",
    bio: [
      "Awarded Jyotish Ratna, Jyotish Shiromani, Jyotish Shri and Jyotish Vachaspati.",
      "Ex Vice President of Bhartiya Jyotish Anushandhan Parishad, Bhopal. Consultant for the Bhavishyafal column of Dainik Bhaskar for more than 25 years.",
    ],
  },
  {
    img: "award_1680693372.png",
    name: "Shri Gunesh Daate",
    title: "Chief Editor of 'Daate Panchang' — 30+ years",
    bio: [
      "Expert in Janm Kundali and Panchang Ganit with 30+ years experience in 'Falit Jyotish'.",
      "His family is the founder of the famous 'Daate Panchang' almanack.",
    ],
  },
];

function Layout({ children, activeLabel }: { children: React.ReactNode; activeLabel: string }) {
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
              <img src={"/images/logo.png"} alt="Krishna Coming" className="h-20" />
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
              <img src={"/images/logo.png"} alt="Krishna Coming" className="h-24" />
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

export default function TeamPage() {
  return (
    <Layout activeLabel="Team">
      {/* Banner */}
      <section className="bg-[#eef1f5]">
        <img
          src={`${BASE}/assets/img/team/team-banner-en.png`}
          alt="Meet our team"
          className="w-full"
        />
      </section>

      {/* Title */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1a3a6c]">
            Meet Our Team — <span className="text-red-600">The Garbh Sanskar Experts</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            A rare confluence of doctors, IITians, revered Vedic scholars, life coaches, yoga &
            nutrition experts and astrologers — together shaping the world's most trusted Garbh
            Sanskar curriculum.
          </p>
        </div>
      </section>

      {/* Members */}
      <section className="py-8 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {members.map((m, i) => (
            <article
              key={m.name + i}
              className="bg-white rounded-xl shadow-sm overflow-hidden grid md:grid-cols-3 gap-6 p-6 md:p-8 items-start"
            >
              <div className="md:col-span-1 flex justify-center">
                <img
                  src={`${BASE}/assets/img/team/${m.img}`}
                  alt={m.name}
                  className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-lg border border-slate-200 shadow"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1a3a6c]">{m.name}</h3>
                <p className="text-sm text-red-600 mt-1 mb-4 font-medium">{m.title}</p>
                <div className="space-y-3 text-slate-700 leading-relaxed text-sm md:text-base">
                  {m.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a3a6c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Experience the wisdom of our experts
          </h2>
          <p className="text-white/80 mb-6">Download the Astro Baby Garbh Sanskar app today.</p>
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
    </Layout>
  );
}
