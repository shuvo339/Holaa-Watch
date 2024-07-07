import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import NewReleases from '../NewReleases/NewReleases';
import WatchList from '../WatchList/WatchList';
import './home.css'

const Home = () => {
    return (
        <div className='bg-[#101010]'>
            <div className='bg-image'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <WatchList></WatchList>
            <NewReleases></NewReleases>
        </div>
    );
};

export default Home;
