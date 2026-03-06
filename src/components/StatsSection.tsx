const stats = [
  { value: "٤", label: "أنظمة متكاملة", icon: "⚙️" },
  { value: "+٢٠", label: "أمر متاح", icon: "📋" },
  { value: "٢٤/٧", label: "حماية مستمرة", icon: "🛡️" },
  { value: "١٠٠٪", label: "تلقائي بالكامل", icon: "🤖" },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-white/10 rounded-2xl p-6 text-center card-glow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
