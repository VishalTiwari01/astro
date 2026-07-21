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

type Story = { img: string; ext: string; yt: string; name: string; city: string };

const stories: Story[] = [
  {
    img: "experience_1727683696",
    ext: "jpg",
    yt: "vEltMP4qvhw",
    name: "Mr. & Mrs. Patil",
    city: "Kolhapur",
  },
  {
    img: "experience_1724400221",
    ext: "jpg",
    yt: "5YhDhV9Eq4M",
    name: "Mrs. Preeti Shree",
    city: "Dhanbad",
  },
  {
    img: "experience_1724396585",
    ext: "jpg",
    yt: "Q8V0cuHGBx4",
    name: "Mr. & Mrs. Chaturkar",
    city: "Pune",
  },
  {
    img: "experience_1723106769",
    ext: "jpg",
    yt: "wGaFK-N_-eo",
    name: "Mr. & Mrs. Sinha",
    city: "Bangalore",
  },
  {
    img: "experience_1698234576",
    ext: "jpg",
    yt: "tkXuMEOJCKo",
    name: "Mr. & Mrs. Dubey",
    city: "Gwalior",
  },
  {
    img: "experience_1697802459",
    ext: "jpg",
    yt: "6MgQ1sZ_tlI",
    name: "Mr. & Mrs. Jalan",
    city: "Delhi",
  },
  {
    img: "experience_1692248818",
    ext: "jpg",
    yt: "2R4-_4xlwTQ",
    name: "Mr. & Mrs. Chauhan",
    city: "Ghaziabad",
  },
  {
    img: "experience_1690293039",
    ext: "jpg",
    yt: "2Zg6cq71Y60",
    name: "Mr. & Mrs. Kumar",
    city: "Deoghar",
  },
  {
    img: "experience_1685785183",
    ext: "jpg",
    yt: "DRyca1GyD9U",
    name: "Dr. Rajendar Pensiya",
    city: "Lucknow",
  },
  {
    img: "experience_1679492114",
    ext: "webp",
    yt: "0XGQrZmSw7k",
    name: "Mr. & Mrs. Lahoti",
    city: "Satara",
  },
  {
    img: "experience_1677845108",
    ext: "webp",
    yt: "eD7fo6bsO6M",
    name: "Mr. & Mrs. Kumar",
    city: "Ranchi",
  },
  {
    img: "experience_1677844814",
    ext: "webp",
    yt: "xRxVaN43eZk",
    name: "Mrs. Chandrakala Sahu",
    city: "Narharpur",
  },
  {
    img: "experience_1675841267",
    ext: "webp",
    yt: "FUwlbiCJ_0I",
    name: "Mrs. Geeta Kapil Madan",
    city: "Pune",
  },
  {
    img: "experience_1675840812",
    ext: "webp",
    yt: "AW_pCeQGpps",
    name: "Mr. & Mrs. Tarpada",
    city: "Surat",
  },
  {
    img: "experience_1675831902",
    ext: "webp",
    yt: "IrE1re6NHCI",
    name: "Mrs. Jasmine Ale Magar",
    city: "Nepal",
  },
  {
    img: "experience_1674208161",
    ext: "webp",
    yt: "Ey6QFQSHI7c",
    name: "Harsh & Sakshi Manglani",
    city: "Indore",
  },
  {
    img: "experience_1674207919",
    ext: "webp",
    yt: "A47fpvPVf8A",
    name: "Mr. & Mrs. Rawat",
    city: "Delhi",
  },
  {
    img: "experience_1674205443",
    ext: "webp",
    yt: "W3cj6C4bi6g",
    name: "Mr. & Mrs. Kinjal Patel",
    city: "Ahmedabad",
  },
  {
    img: "experience_1673798399",
    ext: "webp",
    yt: "HhCniz-ehco",
    name: "Mr. & Mrs. Bedre",
    city: "Pune",
  },
  {
    img: "experience_1673265449",
    ext: "webp",
    yt: "428EL1HqYRs",
    name: "From around the world",
    city: "Global",
  },
  {
    img: "experience_1654952935",
    ext: "webp",
    yt: "1zTG4p9GO8M",
    name: "Shweta Bikash",
    city: "Daman",
  },
  {
    img: "experience_1654952918",
    ext: "webp",
    yt: "cIkHplx2T2k",
    name: "Shibani Nayak",
    city: "Jharsuguda",
  },
  {
    img: "experience_1654952892",
    ext: "webp",
    yt: "sZW89B7j5mM",
    name: "Pooja Ramakant",
    city: "Sambalpur",
  },
  {
    img: "experience_1654869821",
    ext: "webp",
    yt: "zsj9qeAeGK4",
    name: "Hemlata Bagde",
    city: "Aurangabad",
  },
  {
    img: "experience_1654869770",
    ext: "webp",
    yt: "ZGUOFp0CK_Y",
    name: "Gagan Sharma",
    city: "Canada",
  },
  {
    img: "experience_1654869715",
    ext: "webp",
    yt: "0yypDWYfirc",
    name: "Jyoti Aggarwal",
    city: "New Delhi",
  },
  {
    img: "experience_1654869622",
    ext: "webp",
    yt: "61izVsuGLkU",
    name: "Sadgi Sinha",
    city: "Kolkata",
  },
  {
    img: "experience_1654869442",
    ext: "webp",
    yt: "7uQJ0YxFQy0",
    name: "Mr. & Mrs. Patil",
    city: "Kolhapur",
  },
  {
    img: "experience_1654869385",
    ext: "webp",
    yt: "8ccTnwOHjFo",
    name: "Nirmala Bajaj",
    city: "Gulbarga",
  },
  {
    img: "experience_1654869266",
    ext: "webp",
    yt: "JqUMzK0PyTM",
    name: "Madhu Kiran",
    city: "Delhi",
  },
  {
    img: "experience_1654869192",
    ext: "webp",
    yt: "nV3Be79SrHE",
    name: "Neha Satyam",
    city: "Patna",
  },
  {
    img: "experience_1654869138",
    ext: "webp",
    yt: "e0Ak1GAkPzE",
    name: "Mr. & Mrs. Shukla",
    city: "Mumbai",
  },
  {
    img: "experience_1654869067",
    ext: "webp",
    yt: "61izVsuGLkU",
    name: "Mrs. Kritika Soni",
    city: "Mumbai",
  },
  {
    img: "experience_1654868970",
    ext: "webp",
    yt: "50R8KyryTKg",
    name: "Magadh Raj Verma",
    city: "Kota",
  },
  {
    img: "experience_1654868908",
    ext: "webp",
    yt: "5pbOnuZNIwc",
    name: "Mr. Ankit Birle",
    city: "Indore",
  },
  {
    img: "experience_1654868825",
    ext: "webp",
    yt: "Ck7u8jRNK9c",
    name: "Mr. & Mrs. Kinariwala",
    city: "Hyderabad",
  },
  {
    img: "experience_1654868706",
    ext: "webp",
    yt: "2zxW0lTYAZE",
    name: "Mr. Gunja Sudhir",
    city: "Rohtas",
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

export default function TestimonialPage() {
  return (
    <Layout activeLabel="User Stories">
      {/* Banner */}
      <section className="bg-[#eef1f5] py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1a3a6c]">User Stories</h1>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-[#1a3a6c]">User Stories</span>
          </p>
        </div>
      </section>

      {/* Hero collage */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="https://www.youtube.com/watch?v=428EL1HqYRs"
            target="_blank"
            rel="noreferrer"
            className="relative block group"
          >
            <img
              src={`${BASE}/assets/img/stories/en_user_stories.png`}
              alt="User Stories"
              className="w-full rounded-lg hidden md:block"
            />
            <img
              src={`${BASE}/assets/img/stories/en_user_stories_sm.png`}
              alt="User Stories"
              className="w-full rounded-lg md:hidden"
            />
            <img
              src={`${BASE}/assets/img/stories/yt-button.png`}
              alt="Play"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-24 group-hover:scale-110 transition-transform"
            />
          </a>
          <p className="mt-6 text-center text-slate-600 max-w-4xl mx-auto">
            From East to West, from India & Abroad, thousands of pregnant women have given birth to
            healthy & virtuous babies while simultaneously changing their entire lives for better.
          </p>
        </div>
      </section>

      {/* Title */}
      <section className="py-6 bg-[#f7f5f0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#1a3a6c]">User Stories</h2>
          <p className="mt-2 text-slate-600">
            Watch below the experiences of Krishna Coming Garbh Sanskar users
          </p>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-10 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <a
              key={s.img + i}
              href={`https://www.youtube.com/watch?v=${s.yt}`}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={`${BASE}/template/front/krishnaAssest/img/experiences/${s.img}.${s.ext}`}
                  alt={s.name}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <img
                  src={`${BASE}/assets/img/stories/yt-button.png`}
                  alt="Play"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-[#1a3a6c] text-base">
                  Krishna Coming Garbh Sanskar App Review
                </h3>
                <p className="mt-1 text-slate-700 text-sm font-medium">{s.name}</p>
                <p className="text-slate-500 text-xs">{s.city}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src={`${BASE}/assets/img/baby.png`} alt="baby" className="w-full max-w-xs mx-auto" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1a3a6c] mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-600 mb-4">
              To get more Garbh Sanskar related content in your inbox, subscribe to our newsletter.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email id"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:border-[#1a3a6c]"
              />
              <button
                type="submit"
                className="bg-[#1a3a6c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#122a4f]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a3a6c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Share your Krishna Coming journey
          </h2>
          <p className="text-white/80 mb-6">Download the app and start your Garbh Sanskar today.</p>
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
