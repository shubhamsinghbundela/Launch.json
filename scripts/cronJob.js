console.log("⏰ Cron job started");
console.log("ENV =", process.env.ENV);

setInterval(() => {
  console.log("Processing scheduled task...");
}, 3000);
