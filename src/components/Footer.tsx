export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* CTA Banner */}
        <div className="bg-gradient-to-l from-blue-600/20 via-purple-600/20 to-teal-600/20 border border-white/10 rounded-3xl p-10 text-center mb-12">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-3xl font-bold text-white mb-3">
            جاهز لتنظيم جروبك؟
          </h3>
          <p className="text-slate-400 mb-8 text-lg">
            أضف البوت الآن وابدأ في الاستمتاع بجروب منظم وآمن
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 text-lg"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            أضف البوت للجروب مجانًا
          </a>
        </div>

        {/* Footer info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
              🤖
            </div>
            <div>
              <p className="text-white font-bold">بوت تنظيم الجروبات</p>
              <p className="text-slate-500 text-sm">النسخة المتكاملة</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
              متصل ويعمل
            </span>
            <span>•</span>
            <span>حماية ٢٤/٧</span>
            <span>•</span>
            <span>تحديثات مستمرة</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm">
            © ٢٠٢٥ بوت تنظيم الجروبات – جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
