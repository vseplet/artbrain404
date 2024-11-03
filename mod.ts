const asyncFunctionFromString = (path) => {
  return new Function(`return async function(path) {
    await import(path)
  }`)(path);
};

const init = async (im, path) => {
  console.log(im);
  // await import(im.resolve(path));
  asyncFunctionFromString()(path)
};

export default {
  init
}
