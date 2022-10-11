import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(_req, ctx): Response {

    const { id } = ctx.params;
    const users = [
      { uuid: crypto.randomUUID(), YouTyped: id, favorite: 'Deno Fresh', name: 'Bob' },
      { uuid: crypto.randomUUID(), YouTyped: Math.floor(Math.random() * 15).toString(), favorite: 'Angular', name: 'Anand Raja' }
    ];
    
    return new Response(JSON.stringify(users), 
      { 
        headers: { "Content-Type": "application/json" } 
      });
  },
  GET(_req, ctx): Response {
    const { id } = ctx.params;
    return new Response(`Hello World, ${id}`);
  }
}; 
