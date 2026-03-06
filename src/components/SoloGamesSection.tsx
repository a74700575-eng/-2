const soloGames = [
  { icon: "🧠", title: "لعبة الذاكرة", desc: "Memory Game لتقوية الذاكرة" },
  { icon: "⌨️", title: "سرعة الكتابة", desc: "تحديات سرعة كتابة الكلمات" },
  { icon: "❓", title: "Trivia فردية", desc: "مع تصنيف داخلي للاعب" },
  { icon: "🔢", title: "Sudoku مصغر", desc: "لعبة الأرقام الكلاسيكية" },
  { icon: "🧩", title: "ترتيب الصور", desc: "تحدي ترتيب الصور أو الرموز" },
  { icon: "😂", title: "Guess the Emoji", desc: "خمّن الإيموجي الصحيح" },
  { icon: "➕", title: "رياضيات سريعة", desc: "تحديات الرياضيات السريعة" },
  { icon: "🔤", title: "ترتيب الحروف", desc: "كوّن كلمة صحيحة من الحروف" },
  { icon: "📚", title: "تحدي القاموس", desc: "Find the Word – ابحث عن الكلمة" },
  { icon: "🎨", title: "اختيار الألوان", desc: "لعبة اختيار الألوان الصحيحة" },
  { icon: "🧩", title: "ألغاز يومية", desc: "تحديات الألغاز البسيطة يوميًا" },
  { icon: "📝", title: "إكمال الجملة", desc: "لعبة إكمال الجملة الناقصة" },
  { icon: "🎭", title: "ASCII Art", desc: "ألعاب تصوير ASCII للتفاعل" },
  { icon: "⚡", title: "تحدي السرعة", desc: "لعبة تحدي السرعة في الردود" },
  { icon: "🌟", title: "ألعاب ترفيهية", desc: "ألعاب صغيرة فردية مع نقاط" },
];

export default function SoloGamesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d1120]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">🕹️ ألعاب فردية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ١٥ لعبة فردية ممتعة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ألعاب فردية ترفيهية وتعليمية لكل عضو في الجروب
          </p>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {soloGames.map((game, index) => (
            <div
              key={index}
              className="group relative bg-[#0d1525] border border-purple-500/10 hover:border-purple-500/30 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/0 group-hover:via-purple-500/40 to-transparent transition-all duration-300" />

              {/* Icon */}
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                {game.icon}
              </div>

              <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-purple-300 transition-colors duration-300">
                {game.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-500 text-xs leading-relaxed transition-colors duration-300">
                {game.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
