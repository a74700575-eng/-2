export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-glow">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8 badge-pulse">
          <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
          <span className="text-blue-300 text-sm font-medium">
            النسخة المتكاملة – جاهز للعمل
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">بوت تنظيم</span>
          <br />
          <span className="text-white">الجروبات</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto leading-relaxed">
          نظّم جروبك على تيليجرام بشكل احترافي وكامل
        </p>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          إدارة المخالفات تلقائيًا • حماية من السبام والروابط الضارة • تفاعل
          ودود مع الأعضاء
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 text-lg"
          >
            <TelegramIcon />
            أضف البوت للجروب
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
          >
            اكتشف المميزات
            <span className="text-xl">↓</span>
          </a>
        </div>

        {/* Bot preview card */}
        <div className="mt-20 max-w-lg mx-auto">
          <div className="bg-[#1a1f2e] border border-white/10 rounded-3xl p-6 card-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                🤖
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">بوت تنظيم الجروبات</p>
                <p className="text-green-400 text-sm">● متصل الآن</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tl-sm p-3 text-right">
                <p className="text-blue-200 text-sm">
                  👋 مرحباً! أنا بوت تنظيم الجروبات. كيف يمكنني مساعدتك اليوم؟
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl rounded-tr-sm p-3 text-right mr-8">
                <p className="text-slate-300 text-sm">
                  /help – أريد معرفة الأوامر المتاحة
                </p>
              </div>
              <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tl-sm p-3 text-right">
                <p className="text-blue-200 text-sm">
                  📋 إليك قائمة الأوامر المتاحة...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}
