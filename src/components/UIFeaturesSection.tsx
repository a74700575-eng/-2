const uiFeatures = [
  {
    icon: "✨",
    title: "رسائل مزخرفة",
    desc: "واجهة رسائل مزخرفة بالألوان والرموز",
  },
  {
    icon: "📄",
    title: "رسائل طويلة منسّقة",
    desc: "دعم الرسائل الطويلة بشكل منسّق وجميل",
  },
  {
    icon: "🎛️",
    title: "تصميم الأزرار",
    desc: "إمكانية تغيير تصميم زر الردود",
  },
  {
    icon: "😊",
    title: "Emojis ديناميكية",
    desc: "استخدام الـ Emojis وStickers بشكل ديناميكي",
  },
  {
    icon: "🏆",
    title: "لوحة متصدرين ملونة",
    desc: "تصميم لوحة المتصدرين ملونة وجذابة",
  },
  {
    icon: "🎊",
    title: "رسائل فوز متحركة",
    desc: "رسائل تهنئة متحركة عند الفوز في لعبة",
  },
  {
    icon: "🎬",
    title: "GIF في الألعاب",
    desc: "استخدام صور GIF داخل الألعاب الجماعية",
  },
  {
    icon: "📊",
    title: "قوائم نقاط أنيقة",
    desc: "تصميم أنيق لقوائم النقاط والترتيب",
  },
  {
    icon: "🎉",
    title: "ترحيب مخصص",
    desc: "رسائل تهنئة مخصصة للأعضاء الجدد",
  },
  {
    icon: "👋",
    title: "وداع مبتكر",
    desc: "رسائل وداع مبتكرة للأعضاء المغادرين",
  },
  {
    icon: "🔊",
    title: "مؤثرات صوتية",
    desc: "تخصيص الصوتيات القصيرة في الردود",
  },
  {
    icon: "🎮",
    title: "تنبيهات الألعاب",
    desc: "رسائل تنبيهات مزخرفة عند بدء/انتهاء اللعبة",
  },
  {
    icon: "📈",
    title: "إحصائيات رسومية",
    desc: "عرض إحصائيات الجروب بشكل رسومي بالرموز",
  },
  {
    icon: "🎭",
    title: "ثيمات أسبوعية",
    desc: "تصميم خاص بالأحداث الأسبوعية للجروب",
  },
  {
    icon: "🖋️",
    title: "خطوط مزخرفة",
    desc: "استخدام خطوط مزخرفة في النصوص التفاعلية",
  },
];

export default function UIFeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-300 text-sm font-medium">
              🌟 مميزات جمالية وتجربة مستخدم
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ١٥ ميزة جمالية رائعة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            تجربة بصرية مميزة تجعل جروبك يبدو احترافيًا وجذابًا
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {uiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-pink-500/20 rounded-2xl p-5 card-glow"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-bold mb-1 text-sm">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
