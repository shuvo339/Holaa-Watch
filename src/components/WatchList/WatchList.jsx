import watchtime from '../../assets/icons/watch-time.png'
import star from '../../assets/icons/star.png'
import quality from '../../assets/icons/quality.png'
import sronle from '../../assets/watch/Sronle.png'
import monky from '../../assets/watch/Monky.png'
import universes from '../../assets/watch/Universes.png'
import war from '../../assets/watch/War.png'

const WatchList = () => {
    return (
        <div className='relative w-[1800px] h-[454px] mx-auto rounded-[50px] -mt-[35px]' style={{
            background: 'linear-gradient(to right, #181818 100%, #151515 100%)',
        }}>
            {/* // Watch List  */}
            <div className='absolute mx-auto left-[127px] flex justify-center items-center gap-[30px] -top-[92px]'>
                {/* single movie  */}
                <div className=' flex flex-col justify-center items-center'>
                    <img src={sronle} alt="" />
                    <h2 className='text-[35px] font-semibold text-white pt-[11px]'>SAMELILL SRONLE</h2>

                    {/* movie details  */}
                    <div className='flex justify-center items-center gap-[15px] pt-[5px] pb-[7.5px] font-jost'>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <p>9.5</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]' >
                            <div>
                                <img src={watchtime} alt="" />
                            </div>
                            <p>02h</p>
                            <p>30m</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={quality} alt="" />
                            </div>
                            <p>4k</p>
                            <p>Quality</p>
                        </div>
                    </div>
                    <p className='text-sm text-[#999999] font-jost'>Action, Comedy</p>
                </div>

                {/* single movie  */}
                <div className=' flex flex-col justify-center items-center'>
                    <img src={monky} alt="" />
                    <h2 className='text-[35px] font-semibold text-white pt-[11px]'>THE FAMILY MONKY</h2>

                    {/* movie details  */}
                    <div className='flex justify-center items-center gap-[15px] pt-[5px] pb-[7.5px] font-jost'>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <p>9.5</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]' >
                            <div>
                                <img src={watchtime} alt="" />
                            </div>
                            <p>02h</p>
                            <p>30m</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={quality} alt="" />
                            </div>
                            <p>4k</p>
                            <p>Quality</p>
                        </div>
                    </div>
                    <p className='text-sm text-[#999999] font-jost'>Action, Comedy</p>
                </div>

                {/* single movie  */}
                <div className=' flex flex-col justify-center items-center'>
                    <img src={universes} alt="" />
                    <h2 className='text-[35px] font-semibold text-white pt-[11px]'>CHIEFLY UNIVERSES</h2>

                    {/* movie details  */}
                    <div className='flex justify-center items-center gap-[15px] pt-[5px] pb-[7.5px] font-jost'>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <p>9.5</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]' >
                            <div>
                                <img src={watchtime} alt="" />
                            </div>
                            <p>02h</p>
                            <p>30m</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={quality} alt="" />
                            </div>
                            <p>4k</p>
                            <p>Quality</p>
                        </div>
                    </div>
                    <p className='text-sm text-[#999999] font-jost'>Comedy, Crime</p>
                </div>

                {/* single movie  */}
                <div className=' flex flex-col justify-center items-center'>
                    <img src={war} alt="" />
                    <h2 className='text-[35px] font-semibold text-white pt-[11px]'>WORLD WAR 02</h2>

                    {/* movie details  */}
                    <div className='flex justify-center items-center gap-[15px] pt-[5px] pb-[7.5px] font-jost'>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <p>9.5</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]' >
                            <div>
                                <img src={watchtime} alt="" />
                            </div>
                            <p>02h</p>
                            <p>30m</p>
                        </div>
                        <div className='flex justify-center gap-1 items-center text-[#999999]'>
                            <div>
                                <img src={quality} alt="" />
                            </div>
                            <p>4k</p>
                            <p>Quality</p>
                        </div>
                    </div>
                    <p className='text-sm text-[#999999] font-jost'>Action, Comedy</p>
                </div>

            </div>

        </div>
    );
};

export default WatchList;