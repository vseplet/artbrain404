const init = async (im, path) => {
  console.log(im);
  await import(im.resolve(path));
};

export default {
  init
}
