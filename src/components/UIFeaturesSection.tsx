const uiFeatures = [
  { icon: "✨", title: "رسائل مزخرفة", desc: "واجهة رسائل مزخرفة بالألوان والرموز" },
  { icon: "📄", title: "رسائل طويلة منسّقة", desc: "دعم الرسائل الطويلة بشكل منسّق وجميل" },
  { icon: "🎛️", title: "تصميم الأزرار", desc: "إمكانية تغيير تصميم زر الردود" },
  { icon: "😊", title: "Emojis ديناميكية", desc: "استخدام الـ Emojis وStickers بشكل ديناميكي" },
  { icon: "🏆", title: "لوحة متصدرين ملونة", desc: "تصميم لوحة المتصدرين ملونة وجذابة" },
  { icon: "🎊", title: "رسائل فوز متحركة", desc: "رسائل تهنئة متحركة عند الفوز في لعبة" },
  { icon: "🎬", title: "GIF في الألعاب", desc: "استخدام صور GIF داخل الألعاب الجماعية" },
  { icon: "📊", title: "قوائم نقاط أنيقة", desc: "تصميم أنيق لقوائم النقاط والترتيب" },
  { icon: "🎉", title: "ترحيب مخصص", desc: "رسائل تهنئة مخصصة للأعضاء الجدد" },
  { icon: "👋", title: "وداع مبتكر", desc: "رسائل وداع مبتكرة للأعضاء المغادرين" },
  { icon: "🔊", title: "مؤثرات صوتية", desc: "تخصيص الصوتيات القصيرة في الردود" },
  { icon: "🎮", title: "تنبيهات الألعاب", desc: "رسائل تنبيهات مزخرفة عند بدء/انتهاء اللعبة" },
  { icon: "📈", title: "إحصائيات رسومية", desc: "عرض إحصائيات الجروب بشكل رسومي بالرموز" },
  { icon: "🎭", title: "ثيمات أسبوعية", desc: "تصميم خاص بالأحداث الأسبوعية للجروب" },
  { icon: "🖋️", title: "خطوط مزخرفة", desc: "استخدام خطوط مزخرفة في النصوص التفاعلية" },
];

export default function UIFeaturesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060b18]" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-300 text-sm font-medium">🌟 مميزات جمالية وتجربة مستخدم</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ١٥ ميزة جمالية رائعة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            تجربة بصرية مميزة تجعل جروبك يبدو احترافيًا وجذابًا
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {uiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#0d1525] border border-pink-500/10 hover:border-pink-500/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 transition-colors duration-300 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/0 group-hover:via-pink-500/40 to-transparent transition-all duration-300" />

              {/* Icon */}
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                {feature.icon}
              </div>

              <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-pink-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-500 text-xs leading-relaxed transition-colors duration-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
