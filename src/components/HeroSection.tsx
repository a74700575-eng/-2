export default function HeroSection() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-lg">
              🤖
            </div>
            <span className="text-white font-bold text-sm">بوت تنظيم الجروبات</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">المميزات</a>
            <a href="#commands" className="hover:text-white transition-colors">الأوامر</a>
          </div>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all"
          >
            <TelegramIcon size={16} />
            أضف البوت
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Bot icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-2xl shadow-blue-500/30">
            🤖
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm">متصل ويعمل ٢٤/٧</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            بوت <span className="gradient-text">تنظيم الجروبات</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            نظّم جروبك على تيليجرام بشكل احترافي — إدارة المخالفات تلقائيًا، حماية من السبام، وألعاب تفاعلية ممتعة
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-lg"
            >
              <TelegramIcon size={20} />
              أضف البوت للجروب مجانًا
            </a>
            <a
              href="#features"
              className="flex items-center justify-center gap-2 glass hover:bg-white/8 text-white font-medium px-8 py-4 rounded-2xl transition-all text-lg"
            >
              اكتشف المميزات ↓
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="text-blue-400 text-lg">⚙️</span>
              ٤ أنظمة متكاملة
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400 text-lg">📋</span>
              +٢٠ أمر متاح
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400 text-lg">🛡️</span>
              حماية مستمرة
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-400 text-lg">🎮</span>
              ألعاب تفاعلية
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function TelegramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}
