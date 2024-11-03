const init = () => {
  console.log(import.meta);
  import.meta.url = "/Users/sevapp";
  console.log(import.meta);
  console.log(Deno.cwd());
  await import("./config.ts")
};

export default {
  init
}
