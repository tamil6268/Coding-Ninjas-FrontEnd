import FirstPage from '../Common/FirstPage.jsx';
import SecondPage from '../Common/SecondPage.jsx';
import ThirdPage from '../Common/ThirdPage.jsx';
import FourthPage from '../Common/FourthPage.jsx';
import Footer from '../Components/Footer.jsx';
function Home(){
    return(
        <div>
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            <FourthPage/>
            <Footer/>
        </div>
    )
}
export default Home;