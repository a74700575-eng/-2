const features = [
  {
    emoji: "📋",
    title: "تنظيم الدردشة",
    color: "#3b82f6",
    items: [
      "قفل/فتح الدردشة حسب الحاجة",
      "تثبيت رسائل القوانين تلقائيًا",
      "رسالة ترحيب مخصصة للأعضاء الجدد",
      "ردود تلقائية للأسئلة المتكررة",
    ],
  },
  {
    emoji: "⚖️",
    title: "إدارة المخالفات",
    color: "#f97316",
    items: [
      "نظام تحذيرات تلقائي لكل مخالفة",
      "عدد التحذيرات قابل للتخصيص",
      "طرد أو تقييد بعد تجاوز الحد",
      "سجل مخالفات لكل عضو",
    ],
  },
  {
    emoji: "🛡️",
    title: "حماية الجروب",
    color: "#10b981",
    items: [
      "منع الروابط والإعلانات الغير مرغوبة",
      "كشف السبام والرسائل المكررة",
      "فلترة الكلمات المسيئة",
      "حماية من الفيضان (Flood)",
    ],
  },
  {
    emoji: "🎮",
    title: "ألعاب وتفاعل",
    color: "#8b5cf6",
    items: [
      "ألعاب جماعية تنافسية (Trivia، تخمين...)",
      "ألعاب فردية ترفيهية",
      "نظام نقاط ولوحة متصدرين",
      "ردود ودودة وهزلية تلقائية",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">
            كل ما تحتاجه لإدارة جروبك
          </h2>
          <p className="text-slate-400 text-lg">
            أربعة أنظمة متكاملة تعمل معًا لضمان جروب منظم وآمن وممتع
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0d1525] border border-white/8 hover:border-white/15 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
                >
                  {feature.emoji}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              </div>

              <ul className="space-y-2.5">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: feature.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
