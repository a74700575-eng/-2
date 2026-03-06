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
    <section className="py-20 px-6 bg-[#0d1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">
              🕹️ ألعاب فردية
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ١٥ لعبة فردية ممتعة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ألعاب فردية ترفيهية وتعليمية لكل عضو في الجروب
          </p>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {soloGames.map((game, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-purple-500/20 rounded-2xl p-5 text-center card-glow"
            >
              <div className="text-3xl mb-3">{game.icon}</div>
              <h3 className="text-white font-bold mb-1 text-sm">
                {game.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {game.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
