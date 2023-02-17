export function getImage(name) 
{
  let image = require(`./assets/images/${name}`);
  return image;
}