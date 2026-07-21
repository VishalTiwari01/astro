import { Link } from "react-router-dom";
import { useState } from "react";

const BASE = "https://www.krishnacoming.com";
const IMG = `${BASE}/template/front/krishnaAssest/img`;

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Courses & Features", to: "/features" },
  { label: "User Stories", to: "/testimonial" },
  { label: "Team", to: "/team" },
  { label: "Awards & Accolades", to: "/awardsaccolades" },
  { label: "Blogs", to: "/blog" },
];

type Feature = { title: string; img: string; tagline: string; body: string[] };

const features: Feature[] = [
  {
    title: "Sankalp Poojan",
    img: "feature_mo_sanklap.webp",
    tagline: "Live Sankalp Poojan before starting Garbh Sanskar",
    body: [
      "In Vaidic Indian tradition, every auspicious work starts with Sankalp poojan. At Astro Baby, Vaidic Sankalp poojan is done live under the guidance of our Vaidic Brahmin. Through Sankalp Poojan, you pray to God, the Navagrahas and the Nakshatras to give strength and determination to carry this pregnancy for the whole term and to bless you and your child with the divine qualities of wisdom, health and positivity.",
      "Within 24 hours of subscribing to Astro Baby Garbh Sanskar, our representative will get in touch with you to inform you about the samagri required for poojan. Soon after that, we'll schedule a one-to-one live Sankalp Poojan for you as per your convenience on a pre-decided Sankalp muhurat. Both the husband and the wife must be present in this Sankalp poojan.",
    ],
  },
  {
    title: "Punsavan Sanskar",
    img: "xxpunsavan_sanskar.webp",
    tagline: "An important sanskar performed during the third month of pregnancy",
    body: [
      "The first mention of Punsavan Sanskar has been found in Atharva Veda. As per Vaidic tradition, it is the second sanskar of the sixteen sanksars. This sanskar is considered to be one of the most important rites for human life. The vaidic brahman group at Krishna Coming perform this sanskar during the third month of pregnancy as this is when the baby's nervous system starts developing.",
      "The purpose of this sanskar is to give mental strength, superior intelligence and sanskar to the unborn child. If, for some reason, this sanskar could not be performed in the third month of pregnancy, then it should be performed during the seventh month.",
    ],
  },
  {
    title: "Simantonnayana Sanskar",
    img: "simantonayan_sanskar.webp",
    tagline: "An important sanskar performed during the seventh/eighth month of pregnancy",
    body: [
      "Simantonnayana Sanskar is the third sanskar of the sixteen sanskars according to vaidic tradition. This sanskar is performed in order to prevent miscarriage, to ensure the safety of the baby in the womb, and to develop the baby's fortune.",
      "The purpose of this sanskar is to mentally prepare the pregnant lady for delivery by guiding her with positive thoughts. This sanskar is performed in a live session under the guidance of a vaidic brahman group at Astro Baby. It must be done during the eighth month of pregnancy.",
    ],
  },
  {
    title: "GarbhSanskar Sutra",
    img: "features.webp",
    tagline: "Sutras to impart mann, buddhi and sanskars in your child",
    body: [
      "During the 9 months of pregnancy, each month, there is a phased development of the various physical and mental dimensions of the baby. Astro Baby is a pure science, which provides Garbh Sanskar Sutras, according to the present developmental stage of the fetus. These sutras turn your pregnancy into a wonderful, joyous experience and prepares you to welcome a wise, sanskari and healthy baby.",
    ],
  },
  {
    title: "Vaidic Mantra Vrushti",
    img: "features3.webp",
    tagline: "Miraculous vaidic chants for the promotion of special qualities in the child",
    body: [
      "The Vedas mention special mantras for pregnancy, which have miraculous effects on the fetus. Originated from Rigveda, Yajurveda, Samaveda and Atharvaveda these mantras are available in the Astro Baby App.",
      "They are chanted by the world's most knowledgeable Vaidic brahmins, following the stern and uncompromising rules of Varn, Swar, Matra, Balam, Saama and Santana. These Vaidic Garbh Sanskar Mantras have been found to have a divine and positive effect on both the child and the mother.",
    ],
  },
  {
    title: "GarbhSanskar Music",
    img: "features2.webp",
    tagline: "Music based on specific ragas for the ideal development of a child",
    body: [
      "Indian ragas and Garbh Sanskar music have a positive impact on our mood, mind and body. This fact is now recognized by the world's top scientists and universities as well. Children who have been exposed to traditional ragas before birth develop many qualities such as intelligence, health and calmness in nature.",
      "The Garbh Sanskar music in Astro Baby App has been developed on the basis of Indian ragas, which not only enhance the virtues in the fetus, but also keep the pregnant woman calm, relaxed and positive.",
    ],
  },
  {
    title: "Jeevan Sutra - The Life Training",
    img: "features8.webp",
    tagline: "Sutra to guide you through the ups and downs of life",
    body: [
      "The influence of the mother's state of mind during pregnancy has a huge impact on the baby and its effects can last for the rest of their life. A pregnant woman faces many ups and downs and has to deal with negative emotions like worry, stress, sadness etc. while still keeping her mind stable, calm, and positive.",
      "In the live Jeevan Sutra sessions, nationally-renowned life trainers will guide you on how to stay positive even while dealing with negative emotions and situations, helping you to become the best version of yourself and ultimately become a better mother.",
    ],
  },
  {
    title: "Medi-Mitra Sessions",
    img: "features5.webp",
    tagline: "Your friend and guide for all your medical concerns",
    body: [
      "During pregnancy, the role of doctors should not be limited to medical prescriptions, they should be like a friend or an elder member of the family. Someone who can gently and accurately guide you through the physical and mental issues that arise during pregnancy.",
      "In the Medi-Mitra section, Dr. Newalkar will be playing the exact same role. With 22 years of experience, including at the world renowned AIIMS institute, she is well versed in handling high-risk pregnancies.",
    ],
  },
  {
    title: "Isht Mantra",
    img: "features4.webp",
    tagline: "Unique Isht Mantra calculated according to the parents' date and time of birth",
    body: [
      "Astro Baby App calculates a raashi-yugm based on the time and date of birth of the mother and father-to-be. This calculation is based on astrology and there is a unique Isht mantra for each parent-couple.",
      "The pregnant woman has to chant this personal Isht Mantra 108 times a day during her pregnancy. Isht Dev especially blesses children born by Isht Mantra's chanting. If due to some reason, a pregnant woman is not able to chant the Isht Mantra 108 times, it must at least be chanted either 51 or 11 times a day.",
    ],
  },
  {
    title: "GarbhSamvad",
    img: "feature_mo_garbhsamvad.webp",
    tagline: "Laying the foundation of the bond of a lifetime",
    body: [
      "Samvad - dialogue or communication, is one of the most crucial aspects of Garbh Sanskar. Your baby may not be able to listen or understand your words especially during early pregnancy but they can certainly sense the emotions and feelings behind your words.",
      "This communication, once prescribed by ancient Indian Rishis, is now a widely accepted practice proven by various scientific studies. Rejoice in these joyous moments of pregnancy and forge the bond that will last a lifetime.",
    ],
  },
  {
    title: "Yognidra - The stress-relief session",
    img: "feature_mo_yognidra.webp",
    tagline: "Your passage to inner peace",
    body: [
      "During pregnancy you are continuously dealing with many things that include ongoing physical changes, concerns for your baby, the nervousness of delivery, and unwarranted do's and don'ts from friends and family. So physical and mental fatigue is imminent.",
      "This is exactly why team Astro Baby created these guided yognidra sessions. A 20 - 25 minute session helps you find a more calm and refreshed version of yourself.",
    ],
  },
  {
    title: "Parv (Occasion) Based Sessions",
    img: "feature_mo_nimitt_sutra.webp",
    tagline: "Garbh Sanskar sessions for important festivals",
    body: [
      "Garbh Sanskar is not just limited to mantra and music. It is a 24/7 lifestyle and pregnancy is a period where a pregnant lady transforms into a mother. The Parvnimitt or occasion-based session includes important time-specific activities with respect to garbhsanskar.",
      "It also includes discourses that plant sanskaras subconsciously in the mother as well as the baby. For instance, the occasions include Holi, Diwali, Navratri, Ekadashi, Ram Navami and much more.",
    ],
  },
  {
    title: "Supraj Santaanotpatti Havan",
    img: "feature_mo_santanotpatti_havan.webp",
    tagline: "Monthly vaidic havan for the safety and health of your child",
    body: [
      "Once a month during pregnancy, the pregnant woman and her husband and, if possible, all the family members perform a live Supraj Santaanotpatti Havan, under the guidance of the Vaidic Brahmin at Astro Baby.",
      "The main purpose of the Havan is to pray to the deities and the Navagrahas for the protection of the child and the enhancement of virtues. The date, time and samagri required for the Havan are shared with the subscribers in advance.",
    ],
  },
  {
    title: "Meditation",
    img: "meditation.webp",
    tagline: "To de-stress yourself",
    body: [
      "Meditation is an important aspect of garbh sanskar and is beneficial for the body as it de-stresses the mind. It involves getting into a zero state of mind, which can help bring peace and tranquility, and enhance concentration. Visualizing good things about the baby while doing meditation during pregnancy is also a great way to bond with the baby.",
    ],
  },
  {
    title: "Monthly Calendar",
    img: "monthly_planner.webp",
    tagline: "Planner for all monthly garbh sanskar activities",
    body: [
      "The monthly activity planner provided in Astro Baby Garbh Sanskar app gives you the complete information, in advance, about the various activities lined up for the month. It gives you details about the date, time, and the expert associated with the respective activities/sessions.",
    ],
  },
  {
    title: "Garbh Sanskar QnA",
    img: "feature_1675749163.png",
    tagline:
      "All of your questions, queries & concerns related to Garbh Sanskar & Life… Answered by our experts Live.",
    body: [
      "During pregnancy you often find yourself facing situations where you require guidance from a trusted friend & mentor. With GarbhSanskar QnA Session you get the guidance of Prof. Vipin Joshi Live.",
      "Be it questions related to Garbh Sanskar, Shastras, situations related to day-to-day challenges of life, or dynamics of spouse relationships or in-laws. Users from India & abroad get their absolute guidance through this session.",
    ],
  },
  {
    title: "Let's Smile Together",
    img: "feature_1675749167.png",
    tagline:
      "Live Interactive sessions full of fun, excitement & giveaways for pregnant ladies around the world.",
    body: [
      "Let's smile together, as the name suggests is a session that acts as a gust of fresh air for pregnant ladies. This session is a gateway to fun group activities away from the daily doldrums of physical issues, stress & tensions.",
      "Exciting competitions, prizes, and fun interactions with fellow pregnant moms are all hosted by Krishna Coming Hosts in a power-packed live online session.",
    ],
  },
  {
    title: "Sandhya Prarthana",
    img: "feature_1675749170.png",
    tagline:
      "Hundreds of Pregnant ladies across the world participate daily at the same time for 'Garbh-raksha' prarthna Live.",
    body: [
      "Sandhya Prarthna is a session of uninterrupted tranquility for pregnant women. Protective Ramraksha Stotra, effective Mantras, powerful Santan Gopal Mantra, and sacred Garbh Kalyan Prarthna will relieve pregnant women from daily life's hassles.",
      "Regular chanting of these prayers and mantras with Astro Baby Garbh Sanskar's mentor protects the mother's womb from any kind of mishaps and ensures the baby's better future.",
    ],
  },
  {
    title: "Yoga Session",
    img: "feature_1675749173.png",
    tagline:
      "Safe Yogasans for pregnancy demonstrated by Yogasan experts as per your pregnancy month Live.",
    body: [
      "Yoga during pregnancy is an ideal way to stay in shape, tone the muscles, and improve blood circulation– all with negligible impact on your joints. Prenatal Yoga also reduces stress, improves flexibility, lowers back pain, and prepares your body for labor and delivery.",
      "With Astro Baby Garbh Sanskar's expert Yoga instructors, it's extremely easy to perform quick and effective Yoga exercises from the comfort of your home.",
    ],
  },
  {
    title: "Nutritionist Session",
    img: "feature_1675749176.png",
    tagline:
      "What To eat, What not to eat - Guidance of Nutritionists for various months of pregnancy.",
    body: [
      "Balanced diet is the basic fundamental of a healthy pregnancy. The growth of the baby in the womb depends on the diet of the expectant mother. Krishna Coming's nutritionist session guided by experts makes it easy to stay nourished and healthy at every stage of pregnancy.",
      "In this session, you will also get a chance to ask anything to the expert about diet during pregnancy.",
    ],
  },
  {
    title: "Mentoring",
    img: "feature_1675749179.png",
    tagline: "Live mentoring sessions to guide you through life problems keeping you up at night.",
    body: [
      "Pregnancy is one of the most rewarding experiences a woman can have. But, at times you may have mixed feelings, insecurities, self-doubt, overwhelming feelings, anxiety, etc. Combat these negative feelings easily with Astro Baby Garbh Sanskar's mentoring session.",
    ],
  },
  {
    title: "Brainopedia",
    img: "feature_1675749182.png",
    tagline: "Live brain exercises, games & activities to stimulate the mental growth.",
    body: [
      "A special Brainopedia session for pregnant women includes engaging games, challenging puzzles, a range of quizzes, and other brain-sharpening activities. In this great one-hour session, our amazing host will ensure you will have a lot of fun and joy with other expectant mothers.",
    ],
  },
  {
    title: "Library",
    img: "feature_1675749185.png",
    tagline:
      "Handpicked Stories, biographies & inspirational stories from the golden history of India to impart the traits in your baby.",
    body: [
      "What you read during pregnancy has a great influence on a baby's mental development. Get access to a unique collection of educational stories through the library section. The perfect blend of entertainment and inspirational stories of saints, deities, sages, and great kings will induce good virtues in your baby.",
    ],
  },
  {
    title: "Doctor's Session",
    img: "feature_1675749188.png",
    tagline:
      "Answers to all of your medical issues or concerns from the top gynecologists of the nation in a Live session.",
    body: [
      "Pregnant women often lack access to essential medical advice since they can't afford to visit a gynecologist every time they have a question. Get regular answers to all of your pregnancy-related questions through gynecologist sessions.",
      "Astro Baby Garbh Sanskar's experienced gynecologist is available to answer any questions you may have.",
    ],
  },
];

export default function FeaturesPage() {
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
            <span>info@krishnacoming.com</span>
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
              <img src={"/images/logo.png"} alt="Krishna Coming" className="h-24" />
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
                const active = item.label === "Courses & Features";
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                        active ? "bg-white shadow-sm ring-1 ring-slate-200/50 text-[#1a3a6c]" : "text-slate-700 hover:bg-slate-100"
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

      {/* Banner */}
      <section className="bg-[#eef1f5]">
        <img
          src={`${BASE}/assets/img/features/features-banner.png`}
          alt="Garbh Sanskar Course & Features"
          className="w-full h-auto block"
        />
      </section>

      {/* Title */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1a3a6c]">
            Garbh Sanskar Course & Features
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Garbh Sanskar Online Classes Through An Intuitive App.
          </p>
          <p className="mt-2 text-[#1a3a6c] font-semibold">
            23+ Features | Unique Combination of Shaastra & Modern Science
          </p>
          <div className="mt-6 w-24 h-1 bg-[#1a3a6c] mx-auto rounded-full" />
        </div>
      </section>

      {/* Feature blocks */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          {features.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={f.title}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-xl"
              >
                <div className={`${reverse ? "md:order-2" : ""}`}>
                  <img
                    src={`${IMG}/${f.img}`}
                    alt={f.title}
                    className="w-full h-auto rounded-xl shadow-md"
                    loading="lazy"
                  />
                </div>
                <div className={`${reverse ? "md:order-1" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a6c] mb-3">
                    {f.title}
                  </h2>
                  <p className="text-red-600 italic font-medium mb-4">{f.tagline}</p>
                  {f.body.map((p, idx) => (
                    <p key={idx} className="text-slate-700 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#eef1f5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a6c] mb-3">
            Experience all 23+ features
          </h2>
          <p className="text-slate-600 mb-6">
            Download the Krishna Coming Garbh Sanskar app and begin your journey today.
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
                className="flex-1 px-4 py-3 rounded-full text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
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
