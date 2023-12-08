import './gallery.css';
import Button from 'react-bootstrap/Button';

export default function Gallery() {
    function getImgLandscape() {
        let randomNumber = Math.random() * 100;
        let listImage;
        
        listImage = (<img src={`https://www.placemonkeys.com/1920/1080?random=${randomNumber}`} className="w-100 shadow-1-strong rounded mb-4" alt="monkey" />);

        return listImage;
    }

    function getImgPortrait() {
        let randomNumber = Math.random() * 100;
        let listImage;

        listImage = (<img src={`https://www.placemonkeys.com/720/1920?random=${randomNumber}`} className="w-100 shadow-1-strong rounded mb-4" alt="monkey" />);

        return listImage;
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex > 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    function handleButtonShowMore() {
        for (let i = 1; i < 4; i++){
            for (let x = 0; x < 4; x++){
                let imgs = [];
    
                let img1 = document.createElement('img');
                img1.src = `https://www.placemonkeys.com/720/1280?random=${Math.random() * 100}`;
                img1.className = "w-100 shadow-1-strong rounded mb-4";
                img1.alt = "monkey";
                imgs.push(img1)
    
                let img2 = document.createElement('img');
                img2.src = `https://www.placemonkeys.com/1280/720?random=${Math.random() * 100}`;
                img2.className = "w-100 shadow-1-strong rounded mb-4";
                img2.alt = "monkey";
                imgs.push(img2);
    
                imgs = shuffle(imgs);
    
                imgs.forEach(img => {
                    document.getElementById(`col${i}`).appendChild(img);
                });
            }       
        }
    }
    
    return (
        <div id='mainGallery'>
            <h1 id='galleryTitle'>Gallery</h1>

            <div id='gallery'>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" id='col1'>
                        {getImgLandscape()}
                        {getImgPortrait()}
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0" id='col2'>
                        {getImgPortrait()}
                        {getImgLandscape()}
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0" id='col3'>
                        {getImgLandscape()}
                        {getImgPortrait()}
                    </div>
                </div>

                <div className="d-flex justify-content-center p-1">
                    <Button centered="true" variant="primary" size="lg" id='buttonShowMore' onClick={handleButtonShowMore}>
                        Show More
                    </Button>
                </div>
            </div>
        </div>
    )
}