import { serve } from "bun"

serve({
    port: 80,
    fetch(request: Request) {
      return new Response("Hello, Continis from bun.js");
    },
})