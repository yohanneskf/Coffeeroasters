import './home.css';
import {bg1,bg4,kopi1,kopi2,kopi3,kopi4,coffee,ship,car,logo,instagram,bird,facebook} from '../../assets/data.js'
import { Link } from 'react-router-dom';
function Home() {
  

    return (
        <div className='scroll-smooth '>
            <div className="bg bg-no-repeat ml-10 mr-10 bg-cover rounded-2xl bg-center " id='home' style={{backgroundImage:`url(${bg1})`}}>
                <div className='md:w-md ml-7 md:ml-20 pt-28 pr-20 text-white'>
                    <div className='text-3xl md:text-5xl font-bold'>
                        <h1 >Great coffee</h1>
                        <h1>Made simple.</h1>
                    </div>
                    <p className='pt-10 pb-10 opacity-80'>Start your mornings with the world’s best coffees. 
                        Try our expertly curated artisan coffees from our best roasters 
                        delivered directly to your door, at your schedule.</p>
                    <Link to='/plan'><p className='bg-teal-600 w-60 text-center p-5 font-bold rounded-2xl shadow cursor-pointer'>Create Your Plan</p></Link>
                </div>
            </div>
            <div className="bg-no-repeat h-auto mb-24 ml-24 mr-24 bg-contain lg:flex pt-36 gap-10 text-center sm:text-start lg:text-center justify-items-center" style={{backgroundImage:`url(${bg4})`}}>
                <div className='sm:flex lg:inline pb-24 justify-items-center'>
                    <div ><img src={kopi1}  /></div>
                    <div><h1 className='lg:pt-16 pb-8 font-bold text-xl '>Gran Espresso</h1>
                    <p className='opacity-70'>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </div>
                </div>
                <div className='sm:flex lg:inline pb-24 justify-items-center'>
                    <div ><img src={kopi2}  /></div>
                    <div><h1 className='lg:pt-16 pb-8 font-bold text-xl '>Planalto</h1>
                    <p className='opacity-70'>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                </div>
                <div className='sm:flex lg:inline pb-24 justify-items-center'>
                    <div><img src={kopi3}  /></div>
                    <div><h1 className='lg:pt-16 pb-8 font-bold text-xl '>Piccollo</h1>
                    <p className='opacity-70'>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </div>
                <div className='sm:flex lg:inline pb-24 justify-items-center'>
                    <div><img src={kopi4}  /></div>
                    <div><h1 className='lg:pt-16 pb-8 font-bold text-xl '>Danche</h1>
                    <p className='opacity-70'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                    </div>
                </div>
            </div>
            <div className='mb-48'>
                <div className='res ml-10 mr-10 bg-gray-900 h-[60rem] sm:h-[47rem] lg:h-[37rem] rounded-2xl'>
                    <div className='text-white  text-center justify-items-center '>
                        <h1 className='text-3xl font-bold pt-24 pb-16'>Why choose us?</h1>
                        <p className=' sm:w-lg opacity-75 p-10'>A large part of our role is choosing which particular coffees will be featured 
                            in our range. This means working closely with the best coffee growers to give 
                            you a more impactful experience on every level.</p>
                    </div>
                    <div className='justify-items-center ml-10 mr-10'>
                        <div className='lg:flex gap-12 '>
                            <div className='sm:flex lg:inline gap-10 mb-7 p-6 lg:pt-12 bg-teal-600 text-center rounded-2xl text-white justify-items-center'>
                                <img src={coffee} className='m-10'/>
                                <div className='sm:text-start lg:text-center justify-items-center'><div><p className='text-2xl font-bold mt-12 mb-8 start-0'>Best quality</p>
                                <p className='opacity-75'>Discover an endless variety of the world’s best artisan 
                                                          coffee from each of our roasters.</p></div></div>
                            </div>
                            <div className='sm:flex lg:inline gap-10 p-6 lg:pt-12 bg-teal-600 mb-7 text-center rounded-2xl text-white justify-items-center'>
                                <img src={ship} className='m-10' />
                                <div className='sm:text-start lg:text-center justify-items-center'><div><h1 className='text-2xl font-bold mt-12 mb-8'> Exclusive benefits</h1>
                                <p className='opacity-75'>Special offers and swag when you subscribe, 
                                                          including 30% off your first shipment.</p></div></div>
                            </div>
                            <div className='sm:flex lg:inline gap-10 p-6 lg:pt-12 bg-teal-600 mb-7 text-center rounded-2xl text-white justify-items-center'>
                                <img src={car} className='m-10' />
                                <div className='sm:text-start lg:text-center justify-items-center'><div><h1 className='text-2xl font-bold mt-12 mb-8'>Free shipping</h1>
                                <p className='opacity-75'> We cover the cost and coffee is delivered fast. 
                                                          Peak freshness: guaranteed.</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative mt-[37rem] sm:mt-[25rem] lg:mt-[15rem] ml-10 lg:ml-30 mr-10 pb-40 '>
                <div className='mb-12 text-2xl font-bold opacity-50 text-center justify-items-center lg:text-start'>How it works</div>
                <div className='hidden lg:inline  relative mb-20'>
                    <div className='border text-amber-600 w-5/6 '></div>
                    <div className='absolute -top-3.5 flex sm:gap-28 lg:gap-80 '>
                        <div className='h-8 w-8 rounded-full border-2 border-teal-600'></div>
                        <div className='h-8 w-8 rounded-full border-2 border-teal-600'></div>
                        <div className='h-8 w-8 rounded-full border-2 border-teal-600'></div>
                    </div>
                </div>
                <div className='md:flex gap-6 text-center justify-items-center md:text-start'>
                    <div className='md:h-80 md:w-80 md:pl-0 md:pr-10 text-center justify-items-center md:text-start'>
                        <h1 className='text-6xl font-bold text-amber-600 opacity-40'>01</h1>
                        <h1 className='text-3xl font-bold pt-7 pb-7 md:w-48'>Pick your coffee</h1>
                        <p className='opacity-75 pb-9'>Select from our evolving range of artisan coffees. Our beans are ethically
                            sourced and we pay fair prices for them. There are new coffees in 
                            all profiles every month for you to try out.</p>
                    </div>
                    <div className='md:h-80 md:w-80 md:pl-0 md:pr-10 text-center justify-items-center md:text-start  '>
                        <h1 className='text-6xl font-bold text-amber-600 opacity-40'>02</h1>
                        <h1 className='text-3xl font-bold pt-7 pb-7 md:w-48'>Choose the frequency</h1>
                        <p className='opacity-75 pb-9'> Customize your order frequency, quantity, even your roast 
                            style and grind type. Pause, skip or cancel your subscription
                             with no commitment through our online portal.</p>
                    </div>
                    <div className='md:h-80 md:w-80 md:pl-0 md:pr-10 text-center justify-items-center md:text-start '>
                        <h1 className='text-6xl font-bold text-amber-600 opacity-40 '>03</h1>
                        <h1 className='text-3xl font-bold pt-7 pb-7 md:w-48'>Receive and enjoy!</h1>
                        <p className='opacity-75 pb-9'>We ship your package within 48 hours, freshly roasted. Sit back 
                            and enjoy award-winning world-class coffees curated to provide a 
                            distinct tasting experience.</p>
                    </div>
                </div>
                <div className='mt-20 '>
                    <Link to='/plan'><p className='bg-teal-600 text-white w-60 text-center p-5 font-bold rounded-2xl shadow
                         cursor-pointer'>
                        Create Your Plan</p></Link>
                </div>
                
            </div>
            <div className='lg:flex items-center justify-items-center ml-10 mr-10 bg-gray-900 p-12 pt-8 pb-8 mb-32 gap-16'>
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
  
  export default Home