import { FaYoutube, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";
import { MdOutlineAnimation, MdOutlinePalette, MdOutlineVisibility } from "react-icons/md";
import { LuSparkles, LuClock3, LuSparkle } from "react-icons/lu";

export default function Home() {
  const highlights = [
    {
      title: "رن‌وی فرازمینی",
      description:
        "ترکیب نورپردازی هولوگرافیک با پارچه‌های متحرک برای خلق یک شو سینمایی تمام‌عیار.",
      icon: <LuSparkles className="h-6 w-6 text-[var(--accent)]" aria-hidden />,
    },
    {
      title: "پشت‌صحنه‌ی دیجیتال",
      description:
        "مرور فایل‌های سه‌بعدی و استوری‌بوردهای تعاملی که روند خلق هر لباس را روایت می‌کنند.",
      icon: <MdOutlineAnimation className="h-6 w-6 text-[var(--highlight)]" aria-hidden />,
    },
    {
      title: "کلکسیون آینده",
      description:
        "پروژه‌های مشترک با طراحان واقعیت افزوده و نمایش نمونه‌های قابل‌پوشیدن مجازی.",
      icon: <MdOutlinePalette className="h-6 w-6 text-rose-200" aria-hidden />,
    },
  ];

  const timeline = [
    {
      label: "شنبه‌ها | ۲۰:۳۰",
      title: "پخش قسمت اصلی",
      description: "اپیزود جدید از سری «Runway Tales» با حضور مهمان ویژه.",
    },
    {
      label: "سه‌شنبه‌ها | ۱۹:۰۰",
      title: "ویدیو «Sketch to Silk»",
      description: "آموزش تبدیل طرح دوبعدی به لباس متحرک در موشن گرافیک.",
    },
    {
      label: "پنجشنبه‌ها | ۲۱:۱۵",
      title: "زنده با مخاطبان",
      description: "لایو نقد کلکسیون‌ها و پاسخ به سوالات جامعه‌ی آیینه‌ی مد.",
    },
  ];

  const team = [
    {
      name: "سودا فرهمند",
      role: "کارگردان هنری و استوری‌بورد",
      bio: "گیمر و طراح بصری که قصه‌های مد را با نور و حرکت روایت می‌کند.",
    },
    {
      name: "مانا حاتمی",
      role: "طراح لباس دیجیتال",
      bio: "متخصص Clo3D و Marvelous Designer با تمرکز بر پارچه‌های واکنش‌گرا.",
    },
    {
      name: "آراد صادقی",
      role: "انیماتور و تدوین‌گر",
      bio: "ترکیب‌گر جلوه‌های بصری و مسئول هماهنگی با موسیقی سفارشی هر شو.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#080712] via-[#0e0823] to-[#140f2f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_65%)] opacity-70 blur-3xl" />
        <div className="absolute left-[10%] top-[35%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,var(--highlight),transparent_70%)] opacity-60 blur-3xl" />
        <div className="absolute right-[5%] bottom-[-8%] h-[26rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)] opacity-50 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,rgba(255,77,216,0.05)_40%,rgba(127,113,255,0.04)_70%,rgba(255,255,255,0.02)_100%)]" />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 md:px-12">
        <header className="relative grid gap-12 md:grid-cols-[1.15fr,0.85fr] md:items-center">
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.4em] text-white/70">
              <LuSparkle className="h-4 w-4 text-[var(--accent)]" aria-hidden />
              آیینه‌ی مد
            </span>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              شوهای مد انیمیشنی که مد آینده را امروز به تصویر می‌کشد
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              کانال یوتوب آیینه‌ی مد، تجربه‌ای سینمایی از رن‌وی‌های دیجیتال،
              داستان‌سرایی بصری و آموزش‌های تخصصی برای طراحان لباس و
              انیماتورها ارائه می‌دهد. هر هفته یک فصل تازه از فشن-فیلم‌های
              فراواقعی.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="https://youtube.com/@ayenehmode"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-zinc-900 shadow-lg shadow-[var(--accent-soft)] transition hover:scale-[1.02] hover:bg-[#ff62dc]"
              >
                <FaYoutube className="h-5 w-5" aria-hidden />
                عضویت در کانال
              </a>
              <a
                href="#episodes"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <MdOutlineVisibility className="h-5 w-5" aria-hidden />
                مشاهده اپیزودها
              </a>
            </div>
            <div className="grid gap-4 text-xs text-white/70 sm:grid-cols-3 sm:text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
                <p className="font-semibold text-white">+۷۵هزار</p>
                <p>بیننده‌ی ماهانه عاشق طراحی لباس دیجیتال</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
                <p className="font-semibold text-white">۳۶۰°</p>
                <p>نماهای قابل‌تعامل از هر لباس در شو</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
                <p className="font-semibold text-white">۵+</p>
                <p>همکاری با برندهای طراحی متاورس</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white/35 via-white/10 to-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(127,113,255,0.6)]">
            <div className="absolute inset-x-10 -top-6 h-24 rounded-full bg-gradient-to-br from-[var(--accent)] via-transparent to-transparent opacity-70 blur-3xl" />
            <div className="relative space-y-6 rounded-3xl bg-black/40 p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
                  <LuClock3 className="h-4 w-4 text-[var(--highlight)]" aria-hidden />
                  پخش بعدی
                </span>
                <span>۷ آذر | ۲۰:۳۰</span>
              </div>
              <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 shadow-inner">
                <p className="font-display text-2xl text-white">
                  Runway Tales | فصل ۲ قسمت ۳
                </p>
                <p className="mt-3 text-sm text-white/70">
                  «لبه‌ی نور»: کالکشنی الهام‌گرفته از کریستال‌های هوشمند و
                  موسیقی آوانگارد.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="rounded-full border border-white/20 px-3 py-1 text-white/80">
                  طراحی لباس دیجیتال
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-white/80">
                  واقعیت افزوده
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-white/80">
                  پشت‌صحنه
                </span>
              </div>
            </div>
          </div>
        </header>

        <section aria-labelledby="highlights" className="space-y-10">
          <div className="flex flex-col gap-4 text-right">
            <h2
              id="highlights"
              className="font-display text-3xl text-white sm:text-4xl"
            >
              چرا آیینه‌ی مد متفاوت است؟
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
              هر اپیزود با روایتی سینمایی، الهام‌های فرهنگی و فناوری‌های نوین
              تلفیق می‌شود تا مخاطب در دنیای فشن دیجیتال غوطه‌ور شود.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_40px_-28px_rgba(127,113,255,0.6)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-white/[0.12]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/40">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm text-white/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="episodes"
          aria-labelledby="featured-episode"
          className="grid gap-10 md:grid-cols-[1.3fr,0.9fr]"
        >
          <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              اپیزود ویژه
            </span>
            <h2
              id="featured-episode"
              className="font-display text-3xl text-white sm:text-4xl"
            >
              مجموعه Runway Tales | فصل ۲
            </h2>
            <p className="text-sm text-white/75 sm:text-base">
              در این اپیزود از جلوه‌های متاورسی برای خلق پارچه‌های واکنش‌گرا
              استفاده شده است. با اجرای موسیقی لایو و تدوین سینمایی، تجربه‌ای
              تازه از شوهای مد به دست می‌آورید.
            </p>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
              <iframe
                title="Runway Tales Episode"
                src="https://www.youtube.com/embed/_7wbGsuF64k?rel=0&color=white"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <MdOutlineAnimation className="h-4 w-4 text-[var(--accent)]" aria-hidden />
                ۸ زاویه‌ی دوربین
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <LuSparkles className="h-4 w-4 text-[var(--highlight)]" aria-hidden />
                افکت‌های بلادرنگ
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                ۱۲ دقیقه روایت تعاملی
              </span>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_-35px_rgba(255,77,216,0.9)] backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">برنامه‌ی هفتگی</h3>
                <LuClock3 className="h-6 w-6 text-[var(--accent)]" aria-hidden />
              </div>
              <ul className="space-y-4 text-sm text-white/75">
                {timeline.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {item.label}
                    </p>
                    <h4 className="mt-2 font-display text-xl text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-6 text-white/70">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 backdrop-blur-xl">
              <h3 className="font-display text-xl text-white">به اجتماع بپیوندید</h3>
              <p className="mt-2 text-sm text-white/75">
                برای همکاری، دعوت به رویداد یا ارسال کلکسیون دیجیتال با تیم ما در
                ارتباط باشید.
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-white/60">
                    نام شما
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="نام کامل"
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-white/60">
                    ایمیل کاری
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[var(--highlight)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(127,113,255,0.35)] transition hover:scale-[1.01] hover:bg-[#9288ff]"
                >
                  ارسال پیام
                </button>
              </form>
              <div className="mt-6 flex items-center gap-4 text-white/70">
                <a
                  href="https://youtube.com/@ayenehmode"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="https://instagram.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="https://tiktok.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="TikTok"
                >
                  <FaTiktok className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="https://discord.gg"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Discord"
                >
                  <FaDiscord className="h-5 w-5" aria-hidden />
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section
          aria-labelledby="team"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 text-right">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
              تیم خلاقیت
            </span>
            <h2 id="team" className="font-display text-3xl text-white sm:text-4xl">
              مغزهای متحرک پشت آیینه‌ی مد
            </h2>
            <p className="max-w-3xl text-sm text-white/70 sm:text-base">
              تیم ما متشکل از طراحان دیجیتال، انیماتورها و آهنگسازهایی است که
              تجربه‌ی یک شو مد را به قالبی تعاملی تبدیل می‌کنند.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="h-20 w-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[calc(theme(borderRadius.3xl)-4px)] bg-black/60 text-3xl text-[var(--accent)]">
                    {member.name.slice(0, 2)}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[var(--highlight)]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-white/70 leading-7">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/60 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} آیینه‌ی مد. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-3">
            <span>تماس رسانه‌ای:</span>
            <a
              href="mailto:press@ayenehmode.studio"
              className="font-semibold text-white transition hover:text-[var(--accent)]"
            >
              press@ayenehmode.studio
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
