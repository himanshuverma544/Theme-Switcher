export const memoGetImage = memoFunc(getImage);

function getImage(name) 
{
  let image = require(`./assets/images/${name}`);
  return image;
}

function memoFunc(func)
{
  var cache = {};
  
  return function (...args) {
    const key = args;

    if (key in cache) {
      return cache[key];
    }
    else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  }
}

