const interactiveFeatures = [
  {
    icon: "🤖",
    title: "ردود تلقائية",
    desc: "ردود تلقائية عند مناداة البوت باسمه",
  },
  {
    icon: "🗳️",
    title: "تصويت على القرارات",
    desc: "ألعاب تصويتية للتصويت على القوانين أو القرارات",
  },
  {
    icon: "🏅",
    title: "مسابقات أسبوعية",
    desc: "مسابقات أسبوعية مع جوائز رمزية",
  },
  {
    icon: "💪",
    title: "رسائل تشجيعية",
    desc: "إرسال رسائل تشجيعية للأعضاء النشطين",
  },
  {
    icon: "👤",
    title: "اقتراح أعضاء",
    desc: "اقتراح أعضاء جدد حسب نشاطهم",
  },
  {
    icon: "📅",
    title: "إشعارات يومية",
    desc: "إشعارات يومية للفعاليات والتحديات",
  },
  {
    icon: "⭐",
    title: "نظام نقاط",
    desc: "نقاط تتراكم أسبوعيًا لكل عضو",
  },
  {
    icon: "👥",
    title: "لوحة نقاط الفرق",
    desc: "لوحة نقاط جماعية لكل الفرق",
  },
  {
    icon: "⏱️",
    title: "تحديات مؤقتة",
    desc: "تشغيل تحديات مؤقتة لمدة محددة",
  },
  {
    icon: "📸",
    title: "مشاركة الوسائط",
    desc: "مشاركة تحديات الصور والفيديو داخل الجروب",
  },
  {
    icon: "🎯",
    title: "رسائل الإنجازات",
    desc: "رسائل تحفيزية قصيرة عند تسجيل إنجاز",
  },
  {
    icon: "💬",
    title: "ردود التفاعل",
    desc: "الردود التلقائية على رسائل التفاعل (جيد، ممتاز، رائع)",
  },
  {
    icon: "🔔",
    title: "إشعارات الألعاب",
    desc: "إشعارات تلقائية عند بدء الألعاب الجماعية",
  },
  {
    icon: "📢",
    title: "تذكير المشاركة",
    desc: "تذكير الأعضاء بالمشاركة في الألعاب اليومية",
  },
  {
    icon: "🤝",
    title: "تحفيز الخاسرين",
    desc: "إشعارات للفريق الخاسر بطريقة ودية وتحفيزية",
  },
];

export default function InteractiveFeaturesSection() {
  return (
    <section className="py-20 px-6 bg-[#0d1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-teal-300 text-sm font-medium">
              📊 مميزات تفاعلية وإضافية
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ١٥ ميزة تفاعلية متقدمة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            أدوات تفاعلية تحفّز الأعضاء وتزيد من نشاط الجروب
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {interactiveFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-teal-500/20 rounded-2xl p-5 card-glow"
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

        {/* Total features summary */}
        <div className="mt-16 bg-gradient-to-l from-blue-600/10 via-purple-600/10 to-teal-600/10 border border-white/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              ملخص المميزات الكاملة
            </h3>
            <p className="text-slate-400">
              أكثر من ٨٥ ميزة في بوت واحد متكامل
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { count: "٢٠", label: "ميزة إدارية", icon: "⚙️", color: "text-blue-400" },
              { count: "٢٠", label: "لعبة جماعية", icon: "🎮", color: "text-green-400" },
              { count: "١٥", label: "لعبة فردية", icon: "🕹️", color: "text-purple-400" },
              { count: "١٥", label: "ميزة جمالية", icon: "🌟", color: "text-pink-400" },
              { count: "١٥", label: "ميزة تفاعلية", icon: "📊", color: "text-teal-400" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className={`text-2xl font-bold ${item.color}`}>
                  {item.count}
                </div>
                <div className="text-slate-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
