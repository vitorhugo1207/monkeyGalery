import Carousel from 'react-bootstrap/Carousel';
import './banner.css';

export default function Banner() {
    function getImg() {
        let listImage = [];
        
        for (let i = 0; i < 4; i++){
            listImage.push(
                <Carousel.Item>
                    <img src={`https://www.placemonkeys.com/1920/1080?random=${i}`} alt="monkey" />
                </Carousel.Item>
            );
        }

        return listImage;
    }

    return (
        <div id='divBanner'>
            <Carousel fade id='carousel'>
                {getImg()}
            </Carousel>
        </div>
      );
}