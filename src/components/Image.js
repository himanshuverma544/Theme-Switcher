import { memoGetImage } from "../functions";

const Image = (props) => {

  try{
    const image = memoGetImage(props.name);
    if (!image) return null;
    return <img className={props.className} src={image} alt={props.alt}/>;
  }
  catch (error) {
    console.log(`Image with name "${props.name}" doesn't exist.`);
    return null;
  }
};

export default Image;