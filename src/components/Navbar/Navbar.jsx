import logo from '../../assets/logo.svg'
import navicon1 from '../../assets/icons/nav-icon-1.png'
import navicon2 from '../../assets/icons/nav-icon-2.png'
import navicon3 from '../../assets/icons/nav-icon-3.png'

const Navbar = () => {
    return (
        <div className='pl-[60px] pr-[50px] pt-9 flex justify-between items-center'>
                    {/* navbar left  */}
                  <div className='flex'>
                    {/* logo  */}
                  <div className='w-[130px] mr-[35px]'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='size-[50px] rounded-full border flex justify-center items-center'>
                        <img src={navicon1} alt="" />
                    </div>
                  </div>
                  
                    {/* navbar right  */}
                  <div className='flex'>
                    {/* subcribe button  */}
                     <div className='mr-[17.5px] flex text-white w-[170px] h-[60px] rounded-full justify-center items-center' style={{ background: 'linear-gradient(to right, rgb(90, 13, 255), rgb(255, 41, 184), rgb(255, 88, 28))' }}>
                      <div>
                      <img  src={navicon2} alt="" />
                      </div>
                        <h2 className='pl-[7px] text-lg font-semibold'>SUBSCRIBE NOW</h2>
                     </div>
                     {/* profile  */}
                     <div className='size-[60px] rounded-full flex justify-center items-center' style={{ background: 'rgba(255, 255, 255, 0.3)' }}>
                        <img src={navicon3} alt="" />
                    </div>
                  </div>
                </div>
    );
};

export default Navbar;