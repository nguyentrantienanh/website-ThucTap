import LogoBooking from '../assets/logo-adamas-boutique-hotel.svg';
   
import { useState } from "react";
import IconFC from './IconFC';
import'./Header.css';
/*Nav*/
const Nav = [
  { title: 'Trang chủ', id: 1, icon: 'home', link: '#' ,
   },
  { title: 'Phòng nghỉ', id: 2, icon: 'Rooms',  link: '#',
    sub: [{
        title: 'Deluxe City View',
        link: '#',
      },
      {
        title: 'Senior Deluxe City View',
        link: '#',
      },
      {
        title: 'Triple City View',
        link: '#',
      },
      {
        title: 'Premier Sea View',
        link: '#',
      },
      {
        title: 'Studio Suite Sea View',
        link: '#',
      },
      {
        title: 'President Suite Sea View',
        link: '#',
      },  
    ],
   },
  { title: 'Ẩm thực', id: 3, icon: 'Cuisine', link: '#' },
  { title: 'Hội nghị & sự kiện', id: 4, icon: 'Conferences & Events', link: '#',
    sub: [{
        title: 'CRYSTAL',
        link: '#',
      },
      {
        title: 'ROYAL',
        link: '#',
      },
    ],
    },
  { title: 'Tiện ích', id: 5, icon: 'Utilities', link: '#', },
  { title: 'Ưu đãi', id: 6, icon: 'Promotion', link: '#' },
  { title: 'Trải nghiệm', id: 7, icon: 'Experience', link: '#' },
  { title: 'Liên hệ', id: 8, icon: 'Contact', link: '#' },
];
 
function Header() {
  /*submenu*/
const [isSubMenuOpen, setIsSubMenuOpen] = useState<number | null>(null);
const handleSubMenuToggle = (id: number) => {
  setIsSubMenuOpen(isSubMenuOpen === id ? null : id);
}

 /*MenuHamberger*/
const [isNavOpen, setIsNavOpen] = useState(false);

const handleToggle = () => {
  setIsNavOpen(!isNavOpen);
 };
 
    /*Nav*/ 
  const NavBar = Nav.map(Nav => (
    <li key={Nav.id} className=' py-4 sticky group flex items-center justify-center max-[1025px]:border-t-2 border-t-3 border-transparent hover:border-[rgb(118,78,42)] transition duration-800'>
      <a
        className="flex flex-col items-center text-[#784717]"
        href={Nav.link}
        
   
      >
       <a className='text-[#FCC24E] text-5xl max-[1441px]:text-2xl max-[1025px]:text-[18px] '><IconFC name={Nav.icon}/></a>
        <div className='text-2xl max-[1441px]:text-[18px] max-[1025px]:text-[14px]'>{Nav.title}</div>
      </a>
      <div className='absolute left-0 top-full hidden mt-1 transition  group-hover:block   shadow-xl min-w-max bg-[#fff]'>
        <ul>
          <div className='  divide-y-1 divide-gray-300'>
            
            {Nav.sub && Nav.sub.map((subItem, index) => (
              <li key={index} className=' p-2 hover:bg-yellow-800  transition duration-300 text-gray-700 hover:text-yellow-50 hover:border-none'>
                <a href={subItem.link}>{subItem.title}</a>
              </li>
            ))}
          </div>
           
        </ul>
      </div>
      
    </li>
    
  ));

  const address = "20A Trần Quang Khải, Phòng Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa, Việt Nam";
  const phone = "+84 123 456 789";
  /*clicl language*/
const[Language, setLanguage] = useState<'VI' | 'EN'>('VI');
 const LanguageSwitch = () => {
  return (
  <div className='flex gap-2 items-center text-[#784717] text-[28px] max-[1441px]:text-[14px] max-[1025px]:text-[14px] max-[770px]:text-[20px] max-[378px]:text-[13px]'>
      <span onClick={() => setLanguage('VI')}  className={`cursor-pointer ${Language === 'VI' ? 'text-gray-400':'hover:text-[#FCC24E]'}   transition duration-500`}>
        VI
      </span>
      <p className="cursor-context-menu">/</p>
      <span onClick={() => setLanguage('EN')} className={`cursor-pointer ${Language === 'EN' ? 'text-gray-400':'hover:text-[#FCC24E]'}   transition duration-500`}>
        EN
      </span>
 </div>
  );
};




  return (
    <>
        <header className="max-lg:hidden h-12  max-[1441px]:h-7 w-auto bg-[rgb(118,78,42)] ">
            <div className=' flex justify-between items-center w-auto h-12 px-50 text-[#fff] max-[1441px]:h-7 max-[1441px]:px-30'>
              <a href=""><div className=' flex items-center font-medium gap-5 text-2xl  max-[1441px]:text-[14px]'> <IconFC name={'address'}/>
                <p>{address}</p> </div>  </a>
             <a href=""> <div className='gap-1 flex items-center font-medium   text-2xl max-[1441px]:text-[14px]'> <IconFC name={'phone'}/>
                <p>{phone}</p></div></a>

              </div>
        </header>
        <div className=' flex justify-between items-center px-50 max-[1441px]:px-30 max-[1025px]:!px-20 max-[769px]:!px-10 max-[426px]:!px-9 max-[376px]:!px-2'>
            <button className='flex bg-[#5d4024] text-red-50 border-none px-[40px] py-[16px] text-2xl max-[1441px]:px-[20px] max-[1441px]:py-[8px] max-[1441px]:text-[18px]  transition duration-500 hover:bg-[rgb(179,135,92)] max-[426px]:text-[13px] max-[426px]:!px-[4px] '><span className='pr-5 max-[1441px]:pr-3 max-[426px]:pr-1 items-center justify-center'>Đặt phòng</span> 
                <IconFC name={'arrow'}/>
            </button>
            <img className=' h-40 max-[1441px]:h-30 max-[1310px]:h-24 max-[425px]:h-15' src={LogoBooking} alt="Logo"  />
            <div className='  icon flex items-center gap-[20px] text-[25px] max-[1441px]:gap-[10px] max-[1441px]:text-[13px]' >
                <a className='max-lg:hidden  Facebook' href="#">
                            <IconFC name='facebook' />
                        </a>  
                        <a className='max-lg:hidden  Instagram' href="#">
                            <IconFC name='instagram'/>
                        </a>
                        <a className='max-lg:hidden   Tripadvisor  ' href='#'  >
                            <IconFC name='Tripadvisortter' />
                        </a>
                <div className=' max-lg:hidden pl-5 flex items-center gap-[2px]'>
                   {LanguageSwitch()}
                </div>
                
                <button onClick={handleToggle} className=''>
                    <div className=' text-3xl max-[1025px]:text-[20px] pl-5 max-[1441px]:text-[30px] max-[1310px]:text-[20px]'>
                        {isNavOpen ? <i className="showMenuNav fa-solid fa-xmark"></i> : <i className=" fa-solid fa-bars hover:text-[#FCC24E] transition duration-500"></i>}
                    </div>  
                </button>       
            </div>
        </div>
        
            <div className='sticky top-0 z-10 bg-[#fff]'>
              <ul className='max-[1441px]:gap-[80px] max-[1100px]:gap-[30px] max-[1310px]:gap-[50px] max-[1025px]:px-10 max-[1025px]:gap-[50px] flex justify-center items-center gap-[200px] max-lg:hidden border-t-1 border-[#dfdfdf]'>
            {NavBar}
            </ul>
         </div>

            <div className={`top-24 max-[380px]:top-15  w-full h-full bg-black opacity-30  min-[770px]:hidden absolute  ${isNavOpen ? 'transition duration-500  translate-x-0 min-[769px]:translate-x-[800px]' : 'transition duration-500  translate-x-[1450px] '} `}>
            </div>


            <div className={ `  top-24 flex max-[380px]:top-15 max-[380px]:w-[230px] w-30% h-full bg-[#fff]  min-[770px]:hidden absolute   ${isNavOpen ? 'transition duration-550 inline ease-in-out translate-x-0 min-[769px]:translate-x-[-500px]' : 'transition inline duration-500   translate-x-[-1500px] '} `}>
               
               <div className=' py-2 flex w-10 pl-6 text-2xl'>
                 {LanguageSwitch()}
               </div>
                  
               
               <div className=' flex '>
                <ul className= 'gap-[20px] px-5'>
               {Nav.map((Nav) => (
                <li key={Nav.id} className=''>
                <a
                    className="    "
                    href={Nav.link}
                    > 

                    <div className=' flex gap-[10px] justify-center items-center'><a className='text-[#FCC24E]'><IconFC name={Nav.icon}/></a>
                      <div className='py-3 w-50  max-[380px]:py-2   max-[380px]:w-37 max-[380px]:text-[13px]   text-[18px] '>{Nav.title}
                        {Nav.sub && Nav.sub.length > 0 && (
                         <a   onClick={() => handleSubMenuToggle(Nav.id)} className=' float-right '>{isSubMenuOpen === Nav.id ? <IconFC name={'chevrondown'}/> : <IconFC name={'chevronup'}/>}</a> 
                          )}  
                  </div>
                  </div>
                </a>
              <div className={` top-full ${isSubMenuOpen === Nav.id ? '  ' :'  hidden  ' } `}>
              <ul className='w-full '>
                {Nav.sub && Nav.sub.length > 0 && (
                  <div className=' border-t-2 hover:border-transparent transition duration-400 cursor-pointer divide-y-1 divide-gray-300'>
                  {Nav.sub && Nav.sub.map((subItem, index) => (
                    <li key={index} className='py-1 px-1 max-[380px]:p-0 hover:bg-yellow-800 transition duration-300 text-gray-700 hover:text-yellow-50 hover:border-none'>
                      <a className="   text-[14px] max-[380px]:text-[10px] " href={subItem.link}>{subItem.title}</a>
                    </li>
                  ))}
                </div>)}
              </ul>
              </div>
                 </li>    
              ))}
                  </ul>
               </div>             
                <div className='px-[10px] py-[15px] items-start flex w-80  max-[378px]:w-60 max-[378px]:text-[12px] gap-[10px]   text-[15px] max-[380px]:text-[15px] pl-5'>
                <i className=' text-[#FCC24E] text-2xl max-[380px]:text-[15px] p-0 m-0 '><IconFC name={'address'}/></i>
                <p className=''>{address}</p>
               </div>
                <div className='  flex w-80 items-start gap-[10px] max-[378px]:w-60 max-[378px]:text-[12px]   text-[15px] max-[380px]:text-[15px] pl-5'>
                  <i className='text-[#FCC24E] text-2xl max-[380px]:text-[15px]   '><IconFC name={'phone'}/></i>
                  <p className=''>{phone}</p>
                  </div>
                  <div className=' flex pt-5 align-center justify-center gap-[10px]  '>
                    <a className='  Facebook' href="#">
                            <IconFC name='facebook' />
                        </a>  
                        <a className='  Instagram' href="#">
                            <IconFC name='instagram'/>
                        </a>
                        <a className='    Tripadvisor  ' href='#'  >
                            <IconFC name='Tripadvisortter' />
                        </a>
                 
                  </div> 
            </div>
            <div className={` flex w-full h-full  absolute top-50 max-[1450px]:top-37    max-[1310px]:top-30 max-[770px]:top-25  bg-[#fff]  ${isNavOpen ? 'transition duration-500 inline translate-x-0 max-[770px]:translate-x-[-1450px]' : 'transition duration-500 translate-x-[-4000px]  max-[1450px]:translate-x-[-1450px] '} `}>
                <div className=' flex '>
                      <ul className= 'gap-[20px]  px-70 max- max-[1450px]:px-30 max-[1450px]:pr-20 '>
                    {Nav.map((Nav) => (
                      <li key={Nav.id} className=''>
                      <a
                          className="   text-[#784717]"
                          href={Nav.link}
                          > 
                          <div className=' flex gap-[10px] justify-center items-center'><a className=' min-[770px]:hidden'><IconFC name={Nav.icon}/></a>
                            <div className='py-3 w-120 max-[1450px]:w-70  max-[1450px]:py-1 max-[1310px]:w-45  px-1 text-[38px] max-[1450px]:text-[20px] max-[1310px]:text-[15px]  max-[770px]:text-lg '>{Nav.title}
                              {Nav.sub && Nav.sub.length > 0 && (
                               <a   onClick={() => handleSubMenuToggle(Nav.id)} className=' float-right '>{isSubMenuOpen === Nav.id ? <IconFC name={'chevrondown'}/> : <IconFC name={'chevronup'}/>}</a> 
                                )}  
                        </div>
                        </div>
                      </a>
                    <div className={` top-full ${isSubMenuOpen === Nav.id ? '  ' :'  hidden  ' } `}>
                    <ul className='w-full   max-[770px]:w-[200px] '>
                      {Nav.sub && Nav.sub.length > 0 && (
                        <div className=' border-t-2 hover:border-transparent transition duration-400 cursor-pointer divide-y-1 divide-gray-300'>
                        {Nav.sub && Nav.sub.map((subItem, index) => (
                          <li key={index} className=' bg-amber-300 max-[1310px]:py-1 py-2 px-1 hover:bg-yellow-800 transition duration-300 text-gray-700 hover:text-yellow-50 hover:border-none'>
                            <a className=" pl-1  text-[30px] max-[1450px]:text-[15px] max-[1310px]:text-[12px]  max-[770px]:text-sm" href={subItem.link}>{subItem.title}</a>
                          </li>
                        ))}
                      </div>)}
                    </ul>
                      </div>
                     </li>
                  ))}
                  </ul>
                  <div>
                    <div className=''>
                        <iframe className=' max-[1310px]:pl-10 w-[1400px]  h-[700px] max-[1450px]:w-[900px] max-[1450px]:h-[380px] max-[1310px]:w-[600px] max-[1310px]:h-[300PX] max-[770px]:hidden' data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15596.876986944912!2d109.1959979!3d12.233429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067afcd045dbf%3A0x4feb318618fc1dcf!2sAdamas%20Boutique%20Hotel!5e0!3m2!1svi!2s!4v1714620728105!5m2!1svi!2s"       loading="lazy"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15596.876986944912!2d109.1959979!3d12.233429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067afcd045dbf%3A0x4feb318618fc1dcf!2sAdamas%20Boutique%20Hotel!5e0!3m2!1svi!2s!4v1714620728105!5m2!1svi!2s"></iframe>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
}
export default Header;