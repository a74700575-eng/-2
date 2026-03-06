const groupGames = [
  { icon: "🧠", title: "Trivia جماعية", desc: "أسئلة معلومات عامة للجروب بالكامل" },
  { icon: "✅", title: "صح أو خطأ", desc: "تحديات مع جدول نقاط تنافسي" },
  { icon: "🔢", title: "تخمين الرقم", desc: "لعبة التخمين الجماعية" },
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
    <section id="games" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060b18]" />

      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-green-300 text-sm font-medium">🎮 ألعاب جماعية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ٢٠ لعبة جماعية ممتعة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ألعاب تنافسية تجمع أعضاء الجروب وتزيد من التفاعل والمتعة
          </p>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groupGames.map((game, index) => (
            <div
              key={index}
              className="group relative bg-[#0d1525] border border-green-500/10 hover:border-green-500/30 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-300 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/0 group-hover:via-green-500/40 to-transparent transition-all duration-300" />

              {/* Icon */}
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                {game.icon}
              </div>

              <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-green-300 transition-colors duration-300">
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
