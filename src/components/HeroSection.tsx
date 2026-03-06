export default function HeroSection() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
              🤖
            </div>
            <div>
              <span className="text-white font-bold text-sm">بوت تنظيم الجروبات</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                <span className="text-green-400 text-xs">متصل الآن</span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">المميزات</a>
            <a href="#commands" className="hover:text-white transition-colors">الأوامر</a>
            <a href="#games" className="hover:text-white transition-colors">الألعاب</a>
          </div>

          {/* CTA */}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            <TelegramIcon size={16} />
            أضف البوت
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-glow" />

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl float-animation" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-600/4 rounded-full blur-3xl float-animation" style={{ animationDelay: "4s" }} />
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/5 rounded-full rotate-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-500/3 rounded-full rotate-slow" style={{ animationDirection: "reverse" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 badge-pulse">
                <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                <span className="text-blue-300 text-sm font-medium">النسخة المتكاملة – جاهز للعمل</span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">بوت</span>
                <br />
                <span className="gradient-text">تنظيم الجروبات</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-slate-400 mb-4 leading-relaxed">
                نظّم جروبك على تيليجرام بشكل احترافي وكامل
              </p>
              <p className="text-base text-slate-500 mb-10 leading-relaxed">
                إدارة المخالفات تلقائيًا • حماية من السبام والروابط الضارة • تفاعل ودود مع الأعضاء
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-10 justify-end">
                {["🔒 تنظيم الدردشة", "⚖️ إدارة المخالفات", "🛡️ حماية الجروب", "🎮 ألعاب تفاعلية"].map((pill, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 text-slate-300 text-sm px-3 py-1.5 rounded-full">
                    {pill}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary relative z-10 flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-lg"
                >
                  <TelegramIcon size={22} />
                  أضف البوت للجروب
                </a>
                <a
                  href="#features"
                  className="flex items-center justify-center gap-2 glass hover:bg-white/8 text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300 text-lg hover:-translate-y-1"
                >
                  اكتشف المميزات
                  <span className="text-xl">↓</span>
                </a>
              </div>
            </div>

            {/* Right content - Bot preview */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm float-animation">
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl scale-110" />

                {/* Main card */}
                <div className="relative bg-[#0d1120] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Card header */}
                  <div className="bg-[#1a1f2e] border-b border-white/5 px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
                      🤖
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-white font-semibold text-sm">بوت تنظيم الجروبات</p>
                      <div className="flex items-center gap-1 justify-end">
                        <span className="text-green-400 text-xs">متصل الآن</span>
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                      </div>
                    </div>
                    {/* Window dots */}
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="p-5 space-y-4 min-h-[280px]">
                    {/* Bot message */}
                    <div className="flex items-end gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        🤖
                      </div>
                      <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-bl-sm p-3 max-w-[85%]">
                        <p className="text-blue-200 text-sm text-right leading-relaxed">
                          👋 مرحباً! أنا بوت تنظيم الجروبات. كيف يمكنني مساعدتك؟
                        </p>
                        <p className="text-blue-400/50 text-xs text-left mt-1">10:30 ✓✓</p>
                      </div>
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-[#1a1f2e] border border-white/10 rounded-2xl rounded-br-sm p-3 max-w-[80%]">
                        <p className="text-slate-300 text-sm text-right">/help</p>
                        <p className="text-slate-600 text-xs text-left mt-1">10:31 ✓✓</p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex items-end gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        🤖
                      </div>
                      <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-bl-sm p-3 max-w-[85%]">
                        <p className="text-blue-200 text-sm text-right leading-relaxed">
                          📋 إليك قائمة الأوامر المتاحة:
                        </p>
                        <div className="mt-2 space-y-1">
                          {["/warn – تحذير عضو", "/ban – حظر عضو", "/lock – قفل الدردشة"].map((cmd, i) => (
                            <div key={i} className="flex items-center gap-2 justify-end">
                              <span className="text-slate-400 text-xs">{cmd.split("–")[1]}</span>
                              <span className="command-tag text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-md">{cmd.split("–")[0].trim()}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-blue-400/50 text-xs text-left mt-2">10:31 ✓✓</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        🤖
                      </div>
                      <div className="bg-[#1a1f2e] border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                        <div className="flex gap-1 items-center">
                          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="border-t border-white/5 px-4 py-3 flex items-center gap-3">
                    <div className="flex-1 bg-white/5 rounded-xl px-4 py-2 text-slate-500 text-sm text-right">
                      اكتب رسالة...
                    </div>
                    <button className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  متصل ٢٤/٧
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#1a1f2e] border border-purple-500/30 text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  🛡️ حماية كاملة
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs">اسحب للأسفل</span>
            <div className="w-5 h-8 border border-slate-700 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-slate-600 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TelegramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}
