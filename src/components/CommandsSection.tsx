const commandGroups = [
  {
    title: "أوامر التنظيم",
    emoji: "📋",
    color: "blue",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    tagColor: "bg-blue-500/20 text-blue-300",
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
    color: "orange",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    tagColor: "bg-orange-500/20 text-orange-300",
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
    color: "green",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
    tagColor: "bg-green-500/20 text-green-300",
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
    color: "purple",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    tagColor: "bg-purple-500/20 text-purple-300",
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
    <section id="commands" className="py-20 px-6 bg-[#0d1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-teal-300 text-sm font-medium">
              📟 الأوامر المتاحة
            </span>
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
              className={`bg-[#1a1f2e] border ${group.borderColor} rounded-3xl p-6 card-glow`}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 ${group.bgColor} border ${group.borderColor} rounded-xl flex items-center justify-center text-xl`}
                >
                  {group.emoji}
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>

              {/* Commands list */}
              <div className="space-y-2">
                {group.commands.map((command, cmdIndex) => (
                  <div
                    key={cmdIndex}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <span
                      className={`command-tag text-xs font-mono px-2 py-1 rounded-lg ${group.tagColor} flex-shrink-0`}
                    >
                      {command.cmd}
                    </span>
                    <span className="text-slate-400 text-sm">
                      {command.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-[#1a1f2e] border border-yellow-500/20 rounded-2xl p-6 text-center">
          <p className="text-yellow-300/80 text-sm">
            💡 <strong>ملاحظة:</strong> جميع أوامر الإدارة تتطلب صلاحيات مشرف
            في الجروب. يمكن تخصيص صلاحيات كل مشرف على حدة.
          </p>
        </div>
      </div>
    </section>
  );
}
