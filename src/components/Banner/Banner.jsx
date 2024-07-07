import lefticon1 from '../../assets/icons/left-icon-1.png'
import lefticon3 from '../../assets/icons/left-icon-3.png'
import righticon1 from '../../assets/icons/right-icon-1.png'
import righticon2 from '../../assets/icons/right-icon-2.png'
import righticon3 from '../../assets/icons/right-icon-3.png'
import righticon4 from '../../assets/icons/right-icon-4.png'
import righticon5 from '../../assets/icons/right-icon-5.png'
import righticon6 from '../../assets/icons/right-icon-6.png'
import righticon7 from '../../assets/icons/right-icon-7.png'
import review from '../../assets/icons/reviews.png'
import watchtime from '../../assets/icons/watch-time.png'
import addlist from '../../assets/icons/add-to-list.png'
import play from '../../assets/icons/play-trailer.png'
import quality from '../../assets/icons/quality.png'

const Banner = () => {
    return (
        <div className='flex'>
        {/* banner-left  */}
            <div className='pl-[50px]'>
                <div className='pt-[320px]'>
                    <img src={lefticon1} alt="" />
                </div>
                <div className='pt-[91px]'>
                    <h1><span className='text-[60px] font-bold text-white'>01</span><span className='text-[30px] font-bold text-white opacity-20'>/05</span></h1>
                </div>
                <div className='pt-[176px]'>
                    <img src={lefticon3} alt="" />
                </div>
            </div>

            {/* Banner center  */}
            <div className='pt-[142px] pl-[780px]'>
               <div>
               <h2 className='text-[150px] leading-[155px] font-extrabold text-white'>THE LORD <br />OF THE RINGS</h2>
               </div>
            
            <div className='flex gap-[15px] py-5'>
                <div className='w-[150px] h-[46px] text-lg rounded-full flex justify-center gap-2 items-center text-[#E2E2E2]'   style={{ background: 'linear-gradient(132.31deg, rgba(255, 255, 255, 0.27) 10.407%, rgba(255, 255, 255, 0.09) 87.499%)' }}>
                    <div>
                    <img src={review} alt="" />
                    </div>
                    <p>4.9</p>
                    <p>Reviews</p>
                </div>
                <div className='w-[132px] h-[46px] text-lg rounded-full flex justify-center gap-2 items-center text-[#E2E2E2]'   style={{ background: 'linear-gradient(132.31deg, rgba(255, 255, 255, 0.27) 10.407%, rgba(255, 255, 255, 0.09) 87.499%)' }}>
                    <div>
                    <img src={watchtime} alt="" />
                    </div>
                    <p>02h</p>
                    <p>30m</p>
                </div>
                <div className='w-[142px] h-[46px] text-lg rounded-full flex justify-center gap-2 items-center text-[#E2E2E2]'   style={{ background: 'linear-gradient(132.31deg, rgba(255, 255, 255, 0.27) 10.407%, rgba(255, 255, 255, 0.09) 87.499%)' }}>
                    <div>
                    <img src={quality} alt="" />
                    </div>
                    <p>4k</p>
                    <p>Quality</p>
                </div>
            </div>
            
            <p className='text-[22px] text-[#999999] font-jost leading-[34px]'>The Lord of the Rings is a trilogy of epic fantasy adventure films directed.</p>
            
            <div className='flex gap-5 pt-5'>
            <div className='flex text-lg text-white w-[200px] h-[73px] rounded-full justify-center items-center' style={{ background: 'linear-gradient(to right, rgb(90, 13, 255), rgb(255, 41, 184), rgb(255, 88, 28))' }}>
              <div>
              <img  src={play} alt="" />
              </div>
                <h2 className='pl-[7px] text-lg font-semibold'>PLAY TRAILER</h2>
             </div>

             <div className='w-[200px] border border-white h-[73px] border-opacity-25 text-lg font-semibold rounded-full flex justify-center gap-2 items-center text-white opacity-80' >
                    <div>
                    <img src={addlist} alt="" />
                    </div>
                    <p>ADD TO LIST</p>
                </div>
            </div>
            </div>

            {/* banner right  */}
            <div className='w-[95px] bg-opacity-50 h-[611.35px] px-[14px] py-[20px] flex flex-col justify-center items-center gap-[18px] rounded-full ml-[184px] mt-[114px]'  style={{ 
            background: 'linear-gradient(146.18deg, rgba(255, 255, 255, 0.49) 0.271%, rgba(255, 255, 255, 0.1) 0.281%, rgba(255, 255, 255, 0.11) 99.741%)',
        }}>
             <div className='size-[64.14px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src={righticon1} alt="" />
            </div>
             <div className='size-[64.14px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src={righticon2} alt="" />
            </div>
             <div className='size-[64.14px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src={righticon3} alt="" />
            </div>

             <div className='h-[65px] z-10 mr-[128px] w-[196px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C] p-[1.5px] box-border'>
                <div className='flex h-full w-full items-center rounded-full justify-center bg-[#4d4c4c] back' >
                    <h2 className='text-lg font-semibold text-white pr-3'>ADD TO PLAYLIST</h2>
                    <img src={righticon4} alt="" />
                </div>
            </div>

             <div className='size-[64.14px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src={righticon5} alt="" />
            </div>
             <div className='size-[64.14px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src={righticon6} alt="" />
            </div>
             <div className='size-[64.14px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src={righticon7} alt="" />
            </div>

            </div>
        </div>
    );
};

export default Banner;