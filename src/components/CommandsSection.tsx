const commands = [
  { cmd: "/lock", desc: "قفل الدردشة", color: "#3b82f6" },
  { cmd: "/unlock", desc: "فتح الدردشة", color: "#3b82f6" },
  { cmd: "/pin", desc: "تثبيت رسالة", color: "#3b82f6" },
  { cmd: "/setwelcome", desc: "تعديل رسالة الترحيب", color: "#3b82f6" },
  { cmd: "/setrules", desc: "تعديل قوانين الجروب", color: "#3b82f6" },
  { cmd: "/warn", desc: "تحذير عضو مخالف", color: "#f97316" },
  { cmd: "/kick", desc: "طرد عضو", color: "#f97316" },
  { cmd: "/ban", desc: "حظر عضو بشكل دائم", color: "#f97316" },
  { cmd: "/unban", desc: "رفع الحظر عن عضو", color: "#f97316" },
  { cmd: "/mute", desc: "تقييد عضو مؤقتًا", color: "#f97316" },
  { cmd: "/antilink", desc: "تفعيل/إيقاف منع الروابط", color: "#10b981" },
  { cmd: "/antispam", desc: "تفعيل/إيقاف مكافحة السبام", color: "#10b981" },
  { cmd: "/addfilter", desc: "إضافة كلمة محظورة", color: "#10b981" },
  { cmd: "/help", desc: "عرض قائمة الأوامر", color: "#8b5cf6" },
  { cmd: "/admins", desc: "عرض قائمة المشرفين", color: "#8b5cf6" },
  { cmd: "/game", desc: "تشغيل لعبة في الجروب", color: "#8b5cf6" },
];

export default function CommandsSection() {
  return (
    <section id="commands" className="py-20 px-6 bg-[#060b18]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">
            أوامر البوت
          </h2>
          <p className="text-slate-400 text-lg">
            أكثر من ٢٠ أمر لإدارة جروبك بشكل كامل
          </p>
        </div>

        {/* Commands grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {commands.map((command, index) => (
            <div
              key={index}
              className="bg-[#0d1525] border border-white/8 hover:border-white/15 rounded-xl p-4 flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span
                className="command-tag text-xs font-mono px-2.5 py-1 rounded-lg flex-shrink-0"
                style={{
                  background: `${command.color}15`,
                  color: command.color,
                  border: `1px solid ${command.color}30`,
                }}
              >
                {command.cmd}
              </span>
              <span className="text-slate-400 text-sm">{command.desc}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 text-center">
          <p className="text-amber-300/80 text-sm">
            💡 جميع أوامر الإدارة تتطلب صلاحيات مشرف في الجروب
          </p>
        </div>
      </div>
    </section>
  );
}
