require("dotenv").config();
const { Telegraf } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf(process.env.BOT_TOKEN);

// ساده‌ترین حالت DB (فعلاً memory، بعداً Supabase)
let users = {};

function isPro(id) {
  return users[id]?.status === "PRO";
}

// START
bot.start((ctx) => {
  const id = ctx.chat.id;
  users[id] = users[id] || { status: "FREE" };

  ctx.reply(
`🔥 HASHNEXUS SaaS

/growth <niche>
/security
/upgrade`
  );
});

// GROWTH ENGINE
bot.command("growth", (ctx) => {
  const id = ctx.chat.id;
  const niche = ctx.message.text.split(" ").slice(1).join(" ");

  ctx.reply(
`🚀 Growth Engine

Niche: ${niche}

- Viral ideas
- Reels scripts
- Hashtags`
  );
});

// SECURITY (PRO ONLY)
bot.command("security", (ctx) => {
  const id = ctx.chat.id;

  if (!isPro(id)) {
    return ctx.reply("🔒 PRO REQUIRED");
  }

  ctx.reply(
`🛡 Security Report

- Risk LOW
- Login OK
- 2FA recommended`
  );
});

// UPGRADE
bot.command("upgrade", (ctx) => {
  ctx.reply(
`💳 Upgrade to PRO

Pay with crypto:
👉 (NOWPayments link later)

After payment you get PRO unlocked.`
  );
});

bot.launch();
console.log("HASHNEXUS SaaS RUNNING...");
