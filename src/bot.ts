import { env } from "node:process";
import { Bot, GrammyError, HttpError } from "grammy";

const { TELEGRAM_API_KEY: telegramBotApi } = env;

const bot = new Bot(telegramBotApi);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => {
    ctx.reply("Got another message", { parse_mode: "MarkdownV2" });
});

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
});

bot.start();
