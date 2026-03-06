export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#060b18] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/8 rounded-2xl p-10 text-center mb-12">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5">
            🚀
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">
            جاهز لتنظيم جروبك؟
          </h3>
          <p className="text-slate-400 mb-7 text-lg">
            أضف البوت الآن وابدأ في الاستمتاع بجروب منظم وآمن
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-lg"
          >
            <TelegramIcon />
            أضف البوت للجروب مجانًا
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-7 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              مجاني تمامًا
            </span>
            <span>🛡️ آمن وموثوق</span>
            <span>⚡ إعداد فوري</span>
            <span>🔄 تحديثات مستمرة</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-base">
              🤖
            </div>
            <span className="text-slate-500">بوت تنظيم الجروبات</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span>متصل ويعمل</span>
            <span className="mx-2">•</span>
            <span>© ٢٠٢٥ جميع الحقوق محفوظة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TelegramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}
