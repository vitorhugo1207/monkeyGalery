import Banner from '../banner/Banner.jsx';
import Footer from '../footer/Footer.jsx';
import Gallery from '../gallery/Gallery.jsx';
import Header from '../header/Header.jsx';
import ModalBox from '../modal/Modal.jsx';

export default function Home() {
    return (
        <>
            <ModalBox />
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </>
    )    
}
