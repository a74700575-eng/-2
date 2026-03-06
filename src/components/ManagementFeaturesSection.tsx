const managementFeatures = [
  { icon: "🔒", text: "قفل/فتح الدردشة حسب الوقت أو حسب طلب المشرف" },
  { icon: "📌", text: "تثبيت الرسائل الهامة تلقائيًا" },
  { icon: "👋", text: "تخصيص رسالة الترحيب لكل عضو جديد" },
  { icon: "✏️", text: "تعديل القوانين داخل البوت بدون الحاجة لكود" },
  { icon: "📊", text: "عرض قائمة الأعضاء النشطين يوميًا" },
  { icon: "🎛️", text: "لوحة تحكم للمشرفين بالعربية" },
  { icon: "📝", text: "تسجيل كل الأحداث المهمة في الجروب (انضمام/خروج/تعديل)" },
  { icon: "🎨", text: "تخصيص ألوان أو رموز للرسائل المثبتة" },
  { icon: "👑", text: "إعداد مستويات مشرفين مختلفة مع صلاحيات متنوعة" },
  { icon: "👁️", text: "إخفاء/إظهار الرسائل المهمة عند الطلب" },
  { icon: "📅", text: "عرض النشاط الأسبوعي للأعضاء في جدول منسّق" },
  { icon: "🔔", text: "إرسال تنبيهات عند تغييرات في إعدادات الجروب" },
  { icon: "💬", text: "اختيار نوعية الردود التلقائية (لطيفة، رسمية، فكاهية)" },
  { icon: "⏰", text: "إمكانية جدولة الرسائل الهامة مسبقًا" },
  { icon: "🏆", text: "ميزة \"التحدي اليومي\" لكل المشرفين" },
  { icon: "📜", text: "تذكير الأعضاء بالقوانين بشكل دوري بطريقة ودية" },
  { icon: "💡", text: "ميزة \"صندوق الاقتراحات\" للعضو لاقتراح أفكار جديدة" },
  { icon: "✨", text: "واجهة رسائل مزخرفة وجميلة داخل الجروب" },
  { icon: "😊", text: "دعم استخدام Emoji وStickers في التفاعلات التلقائية" },
  { icon: "🎉", text: "رسائل مخصصة عند وصول عدد معين من الأعضاء" },
];

export default function ManagementFeaturesSection() {
  return (
    <section className="py-20 px-6 bg-[#0d1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-300 text-sm font-medium">
              ⚙️ مميزات تنظيمية وإدارية
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ٢٠ ميزة إدارية متكاملة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            أدوات احترافية لإدارة جروبك بكل سهولة وكفاءة
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {managementFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-blue-500/20 rounded-2xl p-4 flex items-start gap-3 card-glow"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">
                {feature.icon}
              </span>
              <p className="text-slate-300 text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
