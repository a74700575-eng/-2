const groupGames = [
  { icon: "🧠", title: "Trivia جماعية", desc: "أسئلة معلومات عامة للجروب بالكامل" },
  { icon: "✅", title: "صح أو خطأ", desc: "تحديات مع جدول نقاط تنافسي" },
  { icon: "🔢", title: "تخمين الرقم", desc: "لعبة التخمين الجماعية (Guess the Number)" },
  { icon: "🔤", title: "ترتيب الكلمات", desc: "Word Shuffle بشكل جماعي" },
  { icon: "⌨️", title: "سباق الكتابة", desc: "Typing Race بين الأعضاء" },
  { icon: "💰", title: "من سيربح المليون", desc: "نسخة مصغرة للجروب" },
  { icon: "🖼️", title: "تحديات الصور", desc: "اعرض صورة واطلب التعرف عليها" },
  { icon: "📊", title: "تصويت تنافسي", desc: "Poll Challenges اختيارية" },
  { icon: "😂", title: "تخمين الإيموجي", desc: "Emoji Guess جماعي" },
  { icon: "➕", title: "رياضيات جماعية", desc: "تحديات الأسئلة الرياضية البسيطة" },
  { icon: "📖", title: "قصة جماعية", desc: "أعضاء يكملون قصة معًا" },
  { icon: "🧩", title: "ألغاز يومية", desc: "تحديات الألغاز الجماعية اليومية" },
  { icon: "🔡", title: "سباق الأرقام", desc: "ترتيب الأرقام أو الحروف جماعيًا" },
  { icon: "💭", title: "تحدي الحدس", desc: "Guess the Word جماعي" },
  { icon: "📝", title: "كلمات متقاطعة", desc: "نسخة مصغرة جماعية" },
  { icon: "🎬", title: "تحدي GIF", desc: "ألعاب تحدي الصور المتحركة" },
  { icon: "🎵", title: "تحدي الأغاني", desc: "التعرف على مقطع موسيقي قصير" },
  { icon: "🔮", title: "ألغاز الذكاء", desc: "Logic Puzzles جماعية" },
  { icon: "🥇", title: "نظام الجوائز", desc: "جوائز للفرق الفائزة" },
  { icon: "📈", title: "لوحة المتصدرين", desc: "ترتيب أسبوعي للجروب" },
];

export default function GroupGamesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-green-300 text-sm font-medium">
              🎮 ألعاب جماعية
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ٢٠ لعبة جماعية ممتعة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ألعاب تنافسية تجمع أعضاء الجروب وتزيد من التفاعل والمتعة
          </p>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groupGames.map((game, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-green-500/20 rounded-2xl p-5 card-glow group"
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
