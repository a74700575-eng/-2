import { Bot } from "grammy";

// دالة الترحيب الرئيسية
async function startCommand(ctx) {
  const firstName = ctx.from?.first_name || "صديقي";
  const username = ctx.from?.username ? `@${ctx.from.username}` : "";
  
  const welcomeMessage = `
🌟 *أهلاً بك يا ${firstName}!*

${username ? `${username} ` : ""}مرحباً بك في بوت إدارة المجموعات!

🎯 *ماذا يمكنني أن أفعل لك؟*

• إدارة الاعضاء والمجموعات 🔧
• الأوامر الإدارية ⚙️  
• الألعاب الجماعية 🎮
• الميزات التفاعلية ✨

📋 *للبدء، أضفني إلى مجموعتك وأمنحني صلاحيات الإدارة*

💡 أرسل /help لرؤية جميع الأوامر
  `;
  
  await ctx.reply(welcomeMessage, { parse_mode: "Markdown" });
}

// أمر المساعدة
async function helpCommand(ctx) {
  const helpMessage = `
📖 *دليل الأوامر*

*الأوامر الأساسية:*
/start - بدء البوت
/help - عرض هذه المساعدة
/id - معرفة معرفك

*إدارة المجموعة:*
/kick - طرد عضو
/ban - حظر عضو
/unban - فك الحظر
/mute - كتم صوت عضو
/unmute - إلغاء كتم الصوت

*المجموعة:*
/rules - عرض قوانين المجموعة
/setrules - تعيين قوانين جديدة
/welcome - رسالة الترحيب
/poll - إنشاء استطلاع

*الألعاب:*
/dice - رمي نرد
/ball - كرة قدم
/basket - سلة
/memory - لعبة الذاكرة

✨ اكتشف المزيد من الأوامر!
  `;
  
  await ctx.reply(helpMessage, { parse_mode: "Markdown" });
}

// أمر المعلومات
async function idCommand(ctx) {
  if (!ctx.from) return;
  
  const idInfo = `
🆔 *معلومات حسابك:*

• الاسم الأول: ${ctx.from.first_name}
• الاسم الأخير: ${ctx.from.last_name || "غير محدد"}
• اسم المستخدم: ${ctx.from.username ? `@${ctx.from.username}` : "غير محدد"}
• اللغة: ${ctx.from.language_code}
• معرفك: \`${ctx.from.id}\`
  `;
  
  await ctx.reply(idInfo, { parse_mode: "Markdown" });
}

// طرد عضو (يتطلب رد على رسالة)
async function kickCommand(ctx) {
  if (!ctx.chat || !ctx.from) {
    await ctx.reply("❌ هذا الأمر يعمل فقط في المجموعات!");
    return;
  }

  if (!ctx.msg?.reply_to_message) {
    await ctx.reply("⚠️ رد على رسالة العضو المر طرده!");
    return;
  }

  const userId = ctx.msg.reply_to_message.from?.id;
  if (!userId) {
    await ctx.reply("❌ لا أستطيع تحديد العضو!");
    return;
  }

  try {
    await ctx.api.banChatMember(ctx.chat.id, userId);
    await ctx.api.unbanChatMember(ctx.chat.id, userId);
    await ctx.reply("✅ تم طرد العضو من المجموعة!");
  } catch (error) {
    await ctx.reply("❌ لم أتمكن من طرد العضو. تأكد من أنني أدمن!");
  }
}

// كتم صوت عضو
async function muteCommand(ctx) {
  if (!ctx.chat || !ctx.from) {
    await ctx.reply("❌ هذا الأمر يعمل فقط في المجموعات!");
    return;
  }

  if (!ctx.msg?.reply_to_message) {
    await ctx.reply("⚠️ رد على رسالة العضو المر كتم صوته!");
    return;
  }

  const userId = ctx.msg.reply_to_message.from?.id;
  if (!userId) {
    await ctx.reply("❌ لا أستطيع تحديد العضو!");
    return;
  }

  try {
    // كتم الصوت لمدة 24 ساعة (الحد الأقصى)
    await ctx.api.restrictChatMember(ctx.chat.id, userId, {
      until_date: Math.floor(Date.now() / 1000) + 86400,
      permissions: {
        can_send_messages: false,
        can_send_media_messages: false,
        can_send_other_messages: false,
      }
    });
    await ctx.reply("✅ تم كتم صوت العضو!");
  } catch (error) {
    await ctx.reply("❌ لم أتمكن من كتم الصوت. تأكد من أنني أدمن!");
  }
}

// فك كتم الصوت
async function unmuteCommand(ctx) {
  if (!ctx.chat || !ctx.from) {
    await ctx.reply("❌ هذا الأمر يعمل فقط في المجموعات!");
    return;
  }

  if (!ctx.msg?.reply_to_message) {
    await ctx.reply("⚠️ رد على رسالة العضو!");
    return;
  }

  const userId = ctx.msg.reply_to_message.from?.id;
  if (!userId) {
    await ctx.reply("❌ لا أستطيع تحديد العضو!");
    return;
  }

  try {
    await ctx.api.restrictChatMember(ctx.chat.id, userId, {
      permissions: {
        can_send_messages: true,
        can_send_media_messages: true,
        can_send_other_messages: true,
        can_add_web_page_previews: true,
      }
    });
    await ctx.reply("✅ تم فك كتم الصوت!");
  } catch (error) {
    await ctx.reply("❌ لم أتمكن من فك الكتم. تأكد من أنني أدمن!");
  }
}

// حظر عضو
async function banCommand(ctx) {
  if (!ctx.chat || !ctx.from) {
    await ctx.reply("❌ هذا الأمر يعمل فقط في المجموعات!");
    return;
  }

  if (!ctx.msg?.reply_to_message) {
    await ctx.reply("⚠️ رد على رسالة العضو المر حظره!");
    return;
  }

  const userId = ctx.msg.reply_to_message.from?.id;
  if (!userId) {
    await ctx.reply("❌ لا أستطيع تحديد العضو!");
    return;
  }

  try {
    await ctx.api.banChatMember(ctx.chat.id, userId);
    await ctx.reply("✅ تم حظر العضو!");
  } catch (error) {
    await ctx.reply("❌ لم أتمكن من حظر العضو. تأكد من أنني أدمن!");
  }
}

// فك الحظر
async function unbanCommand(ctx) {
  if (!ctx.chat || !ctx.from) {
    await ctx.reply("❌ هذا الأمر يعمل فقط في المجموعات!");
    return;
  }

  if (!ctx.msg?.reply_to_message) {
    await ctx.reply("⚠️ رد على رسالة العضو!");
    return;
  }

  const userId = ctx.msg.reply_to_message.from?.id;
  if (!userId) {
    await ctx.reply("❌ لا أستطيع تحديد العضو!");
    return;
  }

  try {
    await ctx.api.unbanChatMember(ctx.chat.id, userId);
    await ctx.reply("✅ تم فك الحظر!");
  } catch (error) {
    await ctx.reply("❌ لم أتمكن من فك الحظر. تأكد من أنني أدمن!");
  }
}

// رسالة الترحيب
async function welcomeCommand(ctx) {
  const welcomeText = `
🎉 *مرحباً بك في مجموعتنا!*

نحن سعيدون بانضمامك الينا 🎊

يرجى قراءة قوانين المجموعة قبل المشاركة.
  `;
  
  await ctx.reply(welcomeText, { parse_mode: "Markdown" });
}

// بدء البوت - لا يتم الإنشاء إلا إذا كان هناك token
let bot;

if (!process.env.BOT_TOKEN) {
  console.log("⚠️ يرجى تعيين BOT_TOKEN في ملف .env");
  console.log("💡 احصل على التوكن من @BotFather على التيليجرام");
  console.log("");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📝 للبدء:");
  console.log("1. اذهب إلى @BotFather على التيليجرام");
  console.log("2. أرسل /newbot لإنشاء بوت جديد");
  console.log("3. انسخ التوكن وضعه في ملف bot/.env");
  console.log("   مثال: BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz");
  console.log("4. أعد تشغيل البوت: bun run start");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
} else {
  bot = new Bot(process.env.BOT_TOKEN);
  
  // الأوامر
  bot.command("start", startCommand);
  bot.command("help", helpCommand);
  bot.command("id", idCommand);
  bot.command("kick", kickCommand);
  bot.command("ban", banCommand);
  bot.command("unban", unbanCommand);
  bot.command("mute", muteCommand);
  bot.command("unmute", unmuteCommand);
  bot.command("welcome", welcomeCommand);

  // الأوامر التفاعلية
  bot.on("message:text", async (ctx) => {
    const text = ctx.message.text.toLowerCase();
    
    if (text.includes("مرحبا") || text.includes("hello") || text.includes("hi")) {
      const name = ctx.from?.first_name || "صديقي";
      await ctx.reply(`أهلاً ${name}! 👋\n\nكيف يمكنني مساعدتك اليوم؟`);
    }
    
    if (text.includes("شكرا") || text.includes("thanks") || text.includes("thank")) {
      await ctx.reply("عفواً! 😊\nخدمة المزيد من واجبي!");
    }
  });

  // معالجة الأخطاء
  bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error on ${ctx.update.update_id}:`, err.error);
  });

  console.log("🤖 جاري بدء البوت...");
  bot.start();
  console.log("✅ تم بدء البوت بنجاح!");
}
