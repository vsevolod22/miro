import { setupWorker } from "msw/browser";
import { boardsHandlers } from "./handlers/boards";
import { authHandlers } from "./handlers/auth";
const handlers = [...boardsHandlers,...authHandlers];
export const worker = setupWorker(...handlers);
