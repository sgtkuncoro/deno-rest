import { log } from "../../debs.ts";

// Simple default logger out of the box. You can customize it
// by overriding logger and handler named "default", or providing
// additional logger configurations. You can log any data type.

// custom configuration with 2 loggers (the default and `tasks` loggers)
await log.setup({
  handlers: {
    functionFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: (logRecord) => {
        const time = Date().slice(16, 21);
        let msg = `${time} [${logRecord.levelName}] ${logRecord.msg}`;

        logRecord.args.forEach((arg, index) => {
          msg += `, arg${index}: ${arg}`;
        });
        return msg;
      },
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "DEBUG",
      handlers: ["functionFmt"],
    },
    tests: {
      level: "CRITICAL",
      handlers: ["functionFmt"],
    },
  },
});

const logger = log.getLogger();

export default logger;
