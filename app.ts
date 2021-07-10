import { Application } from "./debs.ts";
import log from "./src/common/logger.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello Cak!";
});

app.addEventListener("listen", () => {
  log.info(`Server listening at: http://localhost:8000`);
});

await app.listen({ port: 8000 });
