console.log(import.meta);
import.meta.url = "/Users/sevapp";
console.log(Deno.cwd());
await import("./config.ts")
