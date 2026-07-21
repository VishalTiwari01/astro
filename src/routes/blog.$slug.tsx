import { Link, useParams } from "react-router-dom";
import { Layout } from "./blog";
import { BASE, IMG, posts, slugify, type Post } from "../data/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = posts.find((p) => slugify(p.title) === slug);
  if (!post) return <BlogNotFound />;

  const currentIdx = posts.findIndex((p) => slugify(p.title) === slugify(post.title));
  const related = posts.filter((_, i) => i !== currentIdx).slice(0, 3);

  return (
    <Layout activeLabel="Blogs">
      <section className="bg-[#eef1f5] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-slate-600 mb-4">
            <Link to="/" className="hover:text-[#1a3a6c]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-[#1a3a6c]">
              Blogs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a3a6c] font-medium">Article</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#1a3a6c] leading-tight">
            {post.title}
          </h1>
          <div className="mt-3 text-sm text-slate-500">By Admin | {post.date}</div>
        </div>
      </section>

      <article className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-sm bg-slate-100">
            <img
              src={`${IMG}/${post.img}`}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-slate max-w-none mt-8 text-slate-700 leading-relaxed">
            <p className="text-lg">
              {post.title} — pregnancy is one of the most beautiful and transformative phases in a
              woman's life. This article explores its significance through the lens of Garbh
              Sanskar, ancient wisdom, and modern well-being practices.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a6c] mt-8 mb-3">
              Introduction
            </h2>
            <p>
              Garbh Sanskar is the practice of educating and nurturing the unborn child in the womb.
              Rooted in Indian scriptures, it emphasizes the powerful bond between mother and baby,
              and how a mother's thoughts, food, environment and spiritual practices influence the
              child's physical, mental and emotional development.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a6c] mt-8 mb-3">
              Why it matters
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Supports healthy fetal development and emotional bonding.</li>
              <li>Reduces stress, anxiety and mood swings during pregnancy.</li>
              <li>Encourages positive lifestyle, diet and daily routine.</li>
              <li>Instills sanskaars (values) in the baby even before birth.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a6c] mt-8 mb-3">
              Practical guidance
            </h2>
            <p>
              Include meditation, mantra chanting, satsang, spiritual reading, gentle yoga, and a
              sattvic diet in your daily routine. Communicate lovingly with your baby, listen to
              soothing music, and surround yourself with positive people and thoughts.
            </p>

            <blockquote className="border-l-4 border-red-600 bg-[#f7f5f0] pl-4 py-3 my-6 text-slate-700 italic">
              "A calm, happy and spiritually connected mother gives birth to a healthy, intelligent
              and virtuous child."
            </blockquote>

            <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a6c] mt-8 mb-3">
              Conclusion
            </h2>
            <p>
              Every moment of pregnancy is an opportunity to shape the future of your child. With
              the guidance of Krishna Coming Garbh Sanskar, thousands of mothers have experienced a
              joyful, mindful and spiritually enriched pregnancy journey.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/blog"
              className="px-5 py-2.5 rounded-full bg-[#1a3a6c] text-white text-sm font-medium hover:bg-[#122a4f]"
            >
              ← Back to Blogs
            </Link>
            <a
              href="http://bit.ly/KCGSapp"
              className="px-5 py-2.5 rounded-full border border-red-600 text-red-600 text-sm font-medium hover:bg-red-600 hover:text-white transition-colors"
            >
              Download the App
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-12 bg-[#f7f5f0]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a6c] text-center mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p: Post, i: number) => (
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              className="flex-1 px-4 py-3 rounded-full text-slate-800 outline-none"
            />
            <button className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* silence unused BASE import warning if any tooling checks */}
      <span className="hidden" data-base={BASE} />
    </Layout>
  );
}

function BlogNotFound() {
  return (
    <Layout activeLabel="Blogs">
      <section className="py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1a3a6c]">Article not found</h1>
        <p className="mt-3 text-slate-600">The blog post you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1a3a6c] text-white font-medium hover:bg-[#122a4f]"
        >
          Browse all articles
        </Link>
      </section>
    </Layout>
  );
}

function BlogError() {
  return (
    <Layout activeLabel="Blogs">
      <section className="py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1a3a6c]">Something went wrong</h1>
        <Link
          to="/blog"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1a3a6c] text-white font-medium hover:bg-[#122a4f]"
        >
          Back to Blogs
        </Link>
      </section>
    </Layout>
  );
}
