import { CDN_PNG } from "../utils/constants";

const FoodCarousel = ({carouselInfo}) => {
    
    const {action , imageId, id} = carouselInfo;

    return (
        <img className="h-[180px] w-[144px]" src={CDN_PNG+imageId}/>
        

    );
}

export default FoodCarousel;