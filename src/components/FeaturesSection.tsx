const features = [
  {
    number: "١",
    emoji: "📋",
    title: "تنظيم الدردشة والقوانين",
    description: "تحكم كامل في دردشة جروبك مع نظام قوانين متكامل",
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    bgGradient: "from-blue-500/10 to-blue-600/5",
    items: [
      { icon: "🔒", text: "قفل/فتح الدردشة حسب الحاجة" },
      { icon: "📌", text: "تثبيت رسائل القوانين والإعلانات تلقائيًا" },
      { icon: "✏️", text: "تعديل رسالة الترحيب والقوانين بسهولة" },
      { icon: "🔄", text: "ردود تلقائية للأسئلة المتكررة" },
      { icon: "👥", text: "قبول/رفض أعضاء جدد تلقائيًا حسب الإعدادات" },
    ],
  },
  {
    number: "٢",
    emoji: "⚖️",
    title: "إدارة المخالفات",
    description: "نظام تحذيرات ذكي يحافظ على النظام والانضباط",
    color: "#f97316",
    gradient: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/20",
    bgGradient: "from-orange-500/10 to-orange-600/5",
    items: [
      { icon: "⚠️", text: "نظام تحذيرات تلقائي لكل مخالفة" },
      { icon: "🔢", text: "عدد التحذيرات قابل للتخصيص" },
      { icon: "🚫", text: "الطرد أو التقييد بعد تجاوز التحذيرات" },
      { icon: "📊", text: "سجل مخالفات لكل عضو مع إشعارات فورية" },
      { icon: "🎛️", text: "تخصيص صلاحيات لكل مشرف على حدة" },
    ],
  },
  {
    number: "٣",
    emoji: "🛡️",
    title: "حماية الجروب الأساسية",
    description: "درع حماية متكامل ضد السبام والمحتوى الضار",
    color: "#10b981",
    gradient: "from-green-500 to-teal-500",
    borderColor: "border-green-500/20",
    bgGradient: "from-green-500/10 to-green-600/5",
    items: [
      { icon: "🔗", text: "منع الروابط الغير مرغوبة والإعلانات" },
      { icon: "🚨", text: "كشف السبام والرسائل المكررة" },
      { icon: "🤬", text: "فلترة الكلمات المسيئة" },
      { icon: "📁", text: "حماية الملفات قبل نشرها" },
    ],
  },
  {
    number: "٤",
    emoji: "😊",
    title: "تفاعل بسيط مع الأعضاء",
    description: "تجربة ممتعة وودودة تجعل الجروب أكثر حيوية",
    color: "#8b5cf6",
    gradient: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/20",
    bgGradient: "from-purple-500/10 to-purple-600/5",
    items: [
      { icon: "👋", text: "ردود ودودة عند مناداة البوت باسمه" },
      { icon: "😄", text: "ردود هزلية خفيفة عند كلمات محددة" },
      { icon: "🎮", text: "ألعاب صغيرة اختيارية بدون التأثير على التنظيم" },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d1120]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">✨ المميزات الكاملة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            كل ما تحتاجه لإدارة جروبك
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            أربعة أنظمة متكاملة تعمل معًا لضمان جروب منظم وآمن وممتع
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${feature.bgGradient} border ${feature.borderColor} rounded-3xl p-8 overflow-hidden group shine`}
              style={{
                boxShadow: `0 0 40px ${feature.color}08`,
                transition: "all 0.4s ease",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${feature.color}10, transparent 60%)` }}
              />

              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)` }}
              />

              {/* Feature header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                    boxShadow: `0 0 20px ${feature.color}20`,
                  }}
                >
                  {feature.emoji}
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 mb-1 font-medium">
                    النظام {feature.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{feature.description}</p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-5 relative z-10"
                style={{ background: `linear-gradient(90deg, ${feature.color}30, transparent)` }}
              />

              {/* Feature items */}
              <ul className="space-y-3 relative z-10">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 group/item">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                      style={{ background: `${feature.color}10`, border: `1px solid ${feature.color}20` }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Number watermark */}
              <div
                className="absolute bottom-4 left-6 text-8xl font-black opacity-5 select-none pointer-events-none"
                style={{ color: feature.color }}
              >
                {feature.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
