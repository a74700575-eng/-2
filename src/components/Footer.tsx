export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060b18]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* CTA Banner */}
        <div className="relative bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-teal-600/10 border border-white/8 rounded-3xl p-10 text-center mb-16 overflow-hidden">
          {/* Banner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl" />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)" }} />

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-3xl mb-6 shadow-lg shadow-blue-500/30 float-animation">
              🚀
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              جاهز لتنظيم جروبك؟
            </h3>
            <p className="text-slate-400 mb-8 text-lg max-w-lg mx-auto">
              أضف البوت الآن وابدأ في الاستمتاع بجروب منظم وآمن وممتع
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary relative z-10 inline-flex items-center justify-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-lg"
              >
                <TelegramIcon />
                أضف البوت للجروب مجانًا
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 glass hover:bg-white/8 text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300 text-base hover:-translate-y-1"
              >
                استعرض المميزات
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                مجاني تمامًا
              </span>
              <span className="flex items-center gap-2">
                <span className="text-blue-400">🛡️</span>
                آمن وموثوق
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-400">⚡</span>
                إعداد فوري
              </span>
              <span className="flex items-center gap-2">
                <span className="text-teal-400">🔄</span>
                تحديثات مستمرة
              </span>
            </div>
          </div>
        </div>

        {/* Footer main */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="text-right">
            <div className="flex items-center gap-3 justify-end mb-4">
              <div>
                <p className="text-white font-bold text-lg">بوت تنظيم الجروبات</p>
                <p className="text-slate-500 text-sm">النسخة المتكاملة</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
                🤖
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              بوت تيليجرام احترافي لتنظيم الجروبات بشكل كامل مع إدارة المخالفات تلقائيًا وحماية من السبام.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-right">
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: "المميزات الكاملة", href: "#features" },
                { label: "أوامر البوت", href: "#commands" },
                { label: "الألعاب الجماعية", href: "#games" },
                { label: "أضف البوت", href: "https://t.me/" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 justify-end"
                  >
                    {link.label}
                    <span className="text-slate-700">←</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="text-right">
            <h4 className="text-white font-semibold mb-4">حالة البوت</h4>
            <div className="space-y-3">
              {[
                { label: "الخادم الرئيسي", status: "يعمل", color: "green" },
                { label: "نظام الحماية", status: "نشط", color: "green" },
                { label: "قاعدة البيانات", status: "متصلة", color: "green" },
                { label: "آخر تحديث", status: "منذ قليل", color: "blue" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      item.color === "green"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-slate-500 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-600 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              متصل ويعمل
            </span>
            <span>•</span>
            <span>حماية ٢٤/٧</span>
            <span>•</span>
            <span>تحديثات مستمرة</span>
          </div>
          <p className="text-slate-700 text-xs">
            © ٢٠٢٥ بوت تنظيم الجروبات – جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
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
