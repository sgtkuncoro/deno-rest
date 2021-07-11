import { oak } from "./debs.ts";
import log from "./src/common/logger.ts";
import dbConnect from "./src/common/db.ts";
import { initModels, initRouters } from "./src/main.ts";
import { config } from "./src/config/settings.ts";

// Register models
initModels(dbConnect);

// Init routes
const app = new oak.Application();
initRouters(app);

app.use((ctx) => {
  ctx.response.body = "Hello Cak!";
});

app.addEventListener("listen", () => {
  log.info(
    `Server listening at: ${config.appProtocol}://${config.appHost}:${config.appPort}`
  );
});

await app.listen({ port: config.appPort });
