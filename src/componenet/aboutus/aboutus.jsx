import { Link } from "react-router-dom"
import { bg2,img1,img2,icon1,icon2,icon3,logo,facebook,bird,instagram} from "../../assets/data"
function Aboutus() {
    
    return (
      <div className="pl-10  pr-10 ">
        <div className="bg-no-repeat bg-cover rounded-2xl text-white bg-center" style={{backgroundImage:`url(${bg2})`}}>
          <div className="md:w-2xl pt-28 pr-20 pl-7 pb-16 md:p-16 md:pr-40">
            <h1 className="text-3xl md:text-4xl font-bold mt-14 mb-9">About Us</h1>
            <p className="opacity-75">Coffeeroasters began its journey of exotic discovery in 1999, highlighting 
              stories of coffee from around the world. We have since been dedicated to bring 
              the perfect cup - from bean to brew - in every shipment.</p>
          </div>
        </div>
        <div className="md:flex mt-20 pt-16 pb-16 gap-24 justify-items-center">
          <img src={img1}  />
          <div className="text-center mt-20 md:mt-0">
            <h1 className="text-4xl font-bold  mb-10">Our commitment</h1>
            <p className="opacity-75">We’re built on a simple mission and a commitment to doing good along the way. We want to make 
              it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. 
              To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand 
              the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers 
              and empower a global community of farmers through with well above fair-trade benchmarks. We also offer 
              training, support farm community initiatives, and invest in coffee plant science. Curating only the 
              finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
          </div>
        </div>
        <div className="lg:relative mt-32 mb-24 justify-items-center">
          
          <img src={img2} className="hidden lg:flex lg:absolute bottom-2/12 right-16" />
          <div className="bg-gray-900 text-white p-12 rounded-2xl ">
          <img src={img2} className="lg:hidden max-h-96 w-full " />
            <div className="lg:pr-12">
              <h1 className="lg:w-1/2 text-4xl font-bold mb-12 mt-20">Uncompromising quality</h1>
              <p className="lg:w-1/2 opacity-75 mb-20">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, 
              on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag 
              of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly 
              coffee, so that brewing is easy and enjoyable.</p>
            </div>
            
          </div>
        </div>
        <div className="p-12">
          <h1 className="text-2xl font-bold opacity-50 pb-16">Our headqurters</h1>
          <div className="justify-items-center sm:flex gap-10 md:justify-between  text-center">
            <div className="pt-5 justify-items-center">
              <img src={icon1} />
              <h1 className="text-3xl font-bold mb-8 mt-5 ">United Kingdom</h1>
              <div className="opacity-75">
                <p>68  Asfordby Rd</p>
                <p>Alcaston</p>
                <p>SY6 1YA</p>
                <p>+44 1241 918425</p>
              </div>
              
            </div>
            <div className="pt-5 justify-items-center">
              <img src={icon2} />
              <h1 className="text-3xl font-bold mb-8 mt-5">Canada</h1>
              <div className="opacity-75">
                <p>1528  Eglinton Avenue</p>
                <p>Toronto</p>
                <p>Ontario M4P 1A6</p>
                <p>+1 416 485 2997</p>
              </div>
              
            </div>
            <div className="pt-5 justify-items-center">
              <img src={icon3} />
              <h1  className="text-3xl font-bold mb-8 mt-5">Australia</h1>
              <div className="opacity-75">
                <p>36 Swanston Street</p>
                <p>Kewell</p>
                <p>Victoria</p>
                <p>+61 4 9928 3629</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className='lg:flex items-center justify-items-center  bg-gray-900 p-12 pt-8 pb-8 mb-32 gap-16'>
                <div className="flex font-bold text-3xl mb-5 text-white gap-2">
                    <img src={logo} className="h-6" />
                    <h1>coffeeroasters</h1>
                </div>
                <div>
                    <ul className="sm:flex gap-10 mb-5 text-white text-center">
                        <li className="opacity-50 hover:cursor-pointer hover:opacity-100"> <a href="#home">HOME</a></li>
                        <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to='/about'>HOMEABOUT US</Link></li>
                        <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to='/plan'>CREATE YOUR PLAN</Link></li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <img src={facebook} />
                    <img src={bird} />
                    <img src={instagram} />
                </div>
            </div>
      </div>
    )
  }
  
  export default Aboutus