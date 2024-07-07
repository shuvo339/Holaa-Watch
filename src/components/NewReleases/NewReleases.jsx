import arrow from '../../assets/icons/release-arrow.png'
import sliderarrow from '../../assets/icons/slider-arrow.png'
import release1 from '../../assets/watch/Release-1.png'
import release2 from '../../assets/watch/Release-2.png'
import release3 from '../../assets/watch/Release-3.png'
import release4 from '../../assets/watch/Release-4.png'
import release5 from '../../assets/watch/Release-5.png'
import release6 from '../../assets/watch/Release-6.png'
const NewReleases = () => {
    return (
        <div className="mt-[80px] px-[110px] mx-auto">
            <div className="flex justify-between items-center">
                <div className='flex gap-6 items-center justify-center'>
                    <h2 className="text-[50px] text-white font-extrabold">NEW RELEASES</h2>
                    <div>
                    <img src={arrow} alt="" />
                    </div>
                </div>
                <div>
                    <img src={sliderarrow} alt="" />
                </div>
            </div>
            <div className='flex gap-5 justify-center items-center mt-[10px]'>
                <img src={release1} alt="" />
                <img src={release2} alt="" />
              
                    <img className='-ml-12 -mr-12 z-10' src={release3} alt="" />
                
                    <img src={release4} alt="" />
                    <img src={release5} alt="" />
                    <img src={release6} alt="" />
            </div>
        </div>
    );
};

export default NewReleases;