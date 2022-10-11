import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(): Response {
    const users = [{ name: "Anand Raja" }, { name: "Rajesh" }];
    return new Response(JSON.stringify(users));
  },
};