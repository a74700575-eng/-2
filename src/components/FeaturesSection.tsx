const features = [
  {
    number: "١",
    emoji: "📋",
    title: "تنظيم الدردشة والقوانين",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
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
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
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
    color: "green",
    gradient: "from-green-500 to-teal-500",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
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
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    items: [
      { icon: "👋", text: "ردود ودودة عند مناداة البوت باسمه" },
      { icon: "😄", text: "ردود هزلية خفيفة عند كلمات محددة" },
      { icon: "🎮", text: "ألعاب صغيرة اختيارية بدون التأثير على التنظيم" },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">
              ✨ المميزات الكاملة
            </span>
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
              className={`bg-[#1a1f2e] border ${feature.borderColor} rounded-3xl p-8 card-glow`}
            >
              {/* Feature header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 ${feature.bgColor} border ${feature.borderColor} rounded-2xl flex items-center justify-center text-2xl`}
                >
                  {feature.emoji}
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">
                    النظام {feature.number}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Feature items */}
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-slate-300 leading-relaxed">
                      {item.text}
                    </span>
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
