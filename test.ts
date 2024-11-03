const init = async (im) => {
  console.log(im);
  await import(im.resolve('./cfg.ts'));
  console.log(import.meta);
  import.meta.url = "/Users/sevapp";
  console.log(import.meta);
  console.log(Deno.cwd());
  await import("./config.ts")
};

export default {
  init
}
