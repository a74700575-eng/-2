const interactiveFeatures = [
  { icon: "🤖", title: "ردود تلقائية", desc: "ردود تلقائية عند مناداة البوت باسمه" },
  { icon: "🗳️", title: "تصويت على القرارات", desc: "ألعاب تصويتية للتصويت على القوانين أو القرارات" },
  { icon: "🏅", title: "مسابقات أسبوعية", desc: "مسابقات أسبوعية مع جوائز رمزية" },
  { icon: "💪", title: "رسائل تشجيعية", desc: "إرسال رسائل تشجيعية للأعضاء النشطين" },
  { icon: "👤", title: "اقتراح أعضاء", desc: "اقتراح أعضاء جدد حسب نشاطهم" },
  { icon: "📅", title: "إشعارات يومية", desc: "إشعارات يومية للفعاليات والتحديات" },
  { icon: "⭐", title: "نظام نقاط", desc: "نقاط تتراكم أسبوعيًا لكل عضو" },
  { icon: "👥", title: "لوحة نقاط الفرق", desc: "لوحة نقاط جماعية لكل الفرق" },
  { icon: "⏱️", title: "تحديات مؤقتة", desc: "تشغيل تحديات مؤقتة لمدة محددة" },
  { icon: "📸", title: "مشاركة الوسائط", desc: "مشاركة تحديات الصور والفيديو داخل الجروب" },
  { icon: "🎯", title: "رسائل الإنجازات", desc: "رسائل تحفيزية قصيرة عند تسجيل إنجاز" },
  { icon: "💬", title: "ردود التفاعل", desc: "الردود التلقائية على رسائل التفاعل" },
  { icon: "🔔", title: "إشعارات الألعاب", desc: "إشعارات تلقائية عند بدء الألعاب الجماعية" },
  { icon: "📢", title: "تذكير المشاركة", desc: "تذكير الأعضاء بالمشاركة في الألعاب اليومية" },
  { icon: "🤝", title: "تحفيز الخاسرين", desc: "إشعارات للفريق الخاسر بطريقة ودية وتحفيزية" },
];

const summaryItems = [
  { count: "٢٠", label: "ميزة إدارية", icon: "⚙️", color: "#3b82f6", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { count: "٢٠", label: "لعبة جماعية", icon: "🎮", color: "#10b981", bg: "bg-green-500/10", border: "border-green-500/20" },
  { count: "١٥", label: "لعبة فردية", icon: "🕹️", color: "#8b5cf6", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { count: "١٥", label: "ميزة جمالية", icon: "🌟", color: "#ec4899", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { count: "١٥", label: "ميزة تفاعلية", icon: "📊", color: "#14b8a6", bg: "bg-teal-500/10", border: "border-teal-500/20" },
];

export default function InteractiveFeaturesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d1120]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-teal-300 text-sm font-medium">📊 مميزات تفاعلية وإضافية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ١٥ ميزة تفاعلية متقدمة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            أدوات تفاعلية تحفّز الأعضاء وتزيد من نشاط الجروب
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {interactiveFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#0d1525] border border-teal-500/10 hover:border-teal-500/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 transition-colors duration-300 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/0 group-hover:via-teal-500/40 to-transparent transition-all duration-300" />

              {/* Icon */}
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                {feature.icon}
              </div>

              <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-teal-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-500 text-xs leading-relaxed transition-colors duration-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Total features summary */}
        <div className="relative bg-gradient-to-br from-blue-600/8 via-purple-600/8 to-teal-600/8 border border-white/8 rounded-3xl p-10 overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), rgba(20,184,166,0.5), transparent)" }} />

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-2xl text-2xl mb-4">
              🎯
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              ملخص المميزات الكاملة
            </h3>
            <p className="text-slate-400">
              أكثر من <span className="gradient-text font-bold text-xl">٨٥ ميزة</span> في بوت واحد متكامل
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {summaryItems.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} border ${item.border} rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.count}
                </div>
                <div className="text-slate-400 text-xs font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Total count */}
          <div className="relative z-10 mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
              <span className="text-slate-400 text-sm">المجموع الكلي:</span>
              <span className="gradient-text text-2xl font-black">٨٥+</span>
              <span className="text-slate-400 text-sm">ميزة متكاملة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
