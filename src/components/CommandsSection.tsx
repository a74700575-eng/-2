const commandGroups = [
  {
    title: "أوامر التنظيم",
    emoji: "📋",
    color: "#3b82f6",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/10",
    tagBg: "bg-blue-500/15",
    tagText: "text-blue-300",
    hoverBorder: "hover:border-blue-500/40",
    commands: [
      { cmd: "/lock", desc: "قفل الدردشة – منع الأعضاء من الإرسال" },
      { cmd: "/unlock", desc: "فتح الدردشة للجميع" },
      { cmd: "/pin", desc: "تثبيت رسالة مهمة في الجروب" },
      { cmd: "/unpin", desc: "إلغاء تثبيت الرسالة" },
      { cmd: "/setwelcome", desc: "تعديل رسالة الترحيب للأعضاء الجدد" },
      { cmd: "/setrules", desc: "تعديل قوانين الجروب" },
      { cmd: "/rules", desc: "عرض قوانين الجروب" },
      { cmd: "/addreply", desc: "إضافة رد تلقائي لسؤال متكرر" },
    ],
  },
  {
    title: "أوامر المخالفات",
    emoji: "⚖️",
    color: "#f97316",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/10",
    tagBg: "bg-orange-500/15",
    tagText: "text-orange-300",
    hoverBorder: "hover:border-orange-500/40",
    commands: [
      { cmd: "/warn", desc: "إعطاء تحذير لعضو مخالف" },
      { cmd: "/warnings", desc: "عرض عدد تحذيرات عضو معين" },
      { cmd: "/resetwarn", desc: "إعادة تعيين تحذيرات عضو" },
      { cmd: "/setwarnlimit", desc: "تحديد عدد التحذيرات قبل الطرد" },
      { cmd: "/kick", desc: "طرد عضو من الجروب" },
      { cmd: "/ban", desc: "حظر عضو بشكل دائم" },
      { cmd: "/unban", desc: "رفع الحظر عن عضو" },
      { cmd: "/mute", desc: "تقييد عضو من الإرسال مؤقتًا" },
    ],
  },
  {
    title: "أوامر الحماية",
    emoji: "🛡️",
    color: "#10b981",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/10",
    tagBg: "bg-green-500/15",
    tagText: "text-green-300",
    hoverBorder: "hover:border-green-500/40",
    commands: [
      { cmd: "/antilink on/off", desc: "تفعيل/إيقاف منع الروابط" },
      { cmd: "/antispam on/off", desc: "تفعيل/إيقاف مكافحة السبام" },
      { cmd: "/addfilter", desc: "إضافة كلمة للفلتر المحظور" },
      { cmd: "/removefilter", desc: "حذف كلمة من الفلتر" },
      { cmd: "/filters", desc: "عرض قائمة الكلمات المحظورة" },
      { cmd: "/antiflood on/off", desc: "منع الفيضان (رسائل متكررة)" },
    ],
  },
  {
    title: "أوامر عامة",
    emoji: "⚙️",
    color: "#8b5cf6",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/10",
    tagBg: "bg-purple-500/15",
    tagText: "text-purple-300",
    hoverBorder: "hover:border-purple-500/40",
    commands: [
      { cmd: "/start", desc: "بدء تشغيل البوت والترحيب" },
      { cmd: "/help", desc: "عرض قائمة الأوامر المتاحة" },
      { cmd: "/admins", desc: "عرض قائمة المشرفين" },
      { cmd: "/id", desc: "معرفة ID المستخدم أو الجروب" },
      { cmd: "/info", desc: "معلومات عن عضو معين" },
      { cmd: "/game", desc: "تشغيل لعبة صغيرة في الجروب" },
    ],
  },
];

export default function CommandsSection() {
  return (
    <section id="commands" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060b18]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-teal-300 text-sm font-medium">📟 الأوامر المتاحة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            أوامر البوت الكاملة
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            أكثر من ٢٠ أمر لإدارة جروبك بشكل احترافي وكامل
          </p>
        </div>

        {/* Commands grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commandGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`relative bg-[#0d1525] border ${group.borderColor} ${group.hoverBorder} rounded-3xl p-6 transition-all duration-300 overflow-hidden group`}
              style={{ boxShadow: `0 0 40px ${group.color}06` }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, transparent, ${group.color}50, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${group.color}08, transparent 60%)` }}
              />

              {/* Group header */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${group.color}15`, border: `1px solid ${group.color}30` }}
                >
                  {group.emoji}
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
                <span className="mr-auto text-xs text-slate-600 bg-white/5 px-2 py-1 rounded-full">
                  {group.commands.length} أمر
                </span>
              </div>

              {/* Commands list */}
              <div className="space-y-1.5 relative z-10">
                {group.commands.map((command, cmdIndex) => (
                  <div
                    key={cmdIndex}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/cmd"
                  >
                    <span
                      className={`command-tag text-xs font-mono px-2.5 py-1 rounded-lg ${group.tagBg} ${group.tagText} flex-shrink-0 border`}
                      style={{ borderColor: `${group.color}20` }}
                    >
                      {command.cmd}
                    </span>
                    <span className="text-slate-500 group-hover/cmd:text-slate-400 text-sm transition-colors">
                      {command.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 relative bg-amber-500/5 border border-amber-500/15 rounded-2xl p-5 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)" }} />
          <p className="text-amber-300/80 text-sm">
            💡 <strong>ملاحظة:</strong> جميع أوامر الإدارة تتطلب صلاحيات مشرف في الجروب. يمكن تخصيص صلاحيات كل مشرف على حدة.
          </p>
        </div>
      </div>
    </section>
  );
}
