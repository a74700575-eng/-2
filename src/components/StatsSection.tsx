const stats = [
  {
    value: "٤",
    label: "أنظمة متكاملة",
    sublabel: "تعمل معًا بتناسق",
    icon: "⚙️",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
  },
  {
    value: "+٢٠",
    label: "أمر متاح",
    sublabel: "لإدارة كاملة",
    icon: "📋",
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    glow: "shadow-purple-500/10",
  },
  {
    value: "٢٤/٧",
    label: "حماية مستمرة",
    sublabel: "بدون انقطاع",
    icon: "🛡️",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/10",
  },
  {
    value: "١٠٠٪",
    label: "تلقائي بالكامل",
    sublabel: "بدون تدخل يدوي",
    icon: "🤖",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20",
    glow: "shadow-amber-500/10",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-6 relative">
      {/* Section divider top */}
      <div className="section-divider mb-16" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b ${stat.gradient} border ${stat.border} rounded-2xl p-6 text-center card-glow overflow-hidden group`}
              style={{ boxShadow: `0 0 30px ${stat.color}10` }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sublabel}</div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}08, transparent 70%)` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider mt-16" />
    </section>
  );
}
