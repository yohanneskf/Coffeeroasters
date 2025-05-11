import { bg3,up,down,facebook,bird,instagram,logo } from "../../assets/data.js"
import { Link } from "react-router-dom"
import { useState } from "react"
function Creatplan() {
  
  const [val1,setVal1]=useState(false);
  const [val2,setVal2]=useState(false);
  const [val3,setVal3]=useState(false);
  const [val4,setVal4]=useState(false);
  const [val5,setVal5]=useState(false);
  const img1=val1?up:down;
  const img2=val2?up:down;
  const img3=val3?up:down;
  const img4=val4?up:down;
  const img5=val5?up:down;

    return (
      <div className="pl-10 pr-10">
        <div className="bg-no-repeat h-96 bg-cover rounded-2xl bg-center" style={{backgroundImage:`url(${bg3})`}}>
          <div className="text-white md:w-2xl pl-7 pt-28 pr-20 md:p-24 md:pr-36">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 mt-7">Create a plan</h1>
            <p className="opacity-75">Build a subscription plan that best fits your needs. 
              We offer an assortment of the best artisan coffees from around 
              the globe delivered fresh to your door.</p>
          </div>
        </div>
        <div className="bg-gray-900 mt-24 mb-24 rounded-2xl">
          <div className='relative p-24'>
            <div className=' w-2xl relative mb-20'>
              <div className='border text-orange-200'></div>
                <div className='absolute -top-3.5 flex gap-72'>
                  <div className='h-8 w-8 rounded-full border-2 border-teal-600'></div>
                  <div className='h-8 w-8 rounded-full border-2 border-teal-600'></div>
                  <div className='h-8 w-8 rounded-full border-2 border-teal-600'></div>
                  </div>
                </div>
                <div className='flex gap-6 text-white'>
                  <div className='h-80 w-80 pl-0 pr-10 '>
                    <h1 className='text-6xl font-bold text-orange-200'>01</h1>
                    <h1 className='text-3xl font-bold pt-7 pb-7 w-48'>Pick your coffee</h1>
                    <p className='opacity-75 pb-9'>Select from our evolving range of artisan coffees. Our beans are ethically
                            sourced and we pay fair prices for them. There are new coffees in 
                            all profiles every month for you to try out.</p>
                    </div>
                    <div className='h-80 w-80 pl-0 pr-10 '>
                        <h1 className='text-6xl font-bold text-orange-200'>02</h1>
                        <h1 className='text-3xl font-bold pt-7 pb-7 w-48'>Choose the frequency</h1>
                        <p className='opacity-75 pb-9'> Customize your order frequency, quantity, even your roast 
                            style and grind type. Pause, skip or cancel your subscription
                             with no commitment through our online portal.</p>
                    </div>
                    <div className='h-80 w-80 pl-0 pr-10 '>
                        <h1 className='text-6xl font-bold text-orange-200 '>03</h1>
                        <h1 className='text-3xl font-bold pt-7 pb-7 w-48'>Receive and enjoy!</h1>
                        <p className='opacity-75 pb-9'>We ship your package within 48 hours, freshly roasted. Sit back 
                            and enjoy award-winning world-class coffees curated to provide a 
                            distinct tasting experience.</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className="flex p-24 pt-0 gap-24">
          <div className="mr-14 w-96">
            <div className="flex gap-5 text-xl font-bold opacity-25 border-b pb-4 pt-4">
              <h1>01</h1><h1>Preference</h1>
            </div>
            <div className="flex gap-5 text-xl font-bold opacity-25 border-b pb-4 pt-4">
              <h1>02</h1><h1>Bean Type</h1>
            </div>
            <div className="flex gap-5 text-xl font-bold opacity-25 border-b pb-4 pt-4">
              <h1>03</h1><h1>Quantity</h1>
            </div>
            <div className="flex gap-5 text-xl font-bold opacity-25 border-b pb-4 pt-4">
              <h1>04</h1><h1>Grind Option</h1>
            </div>
            <div className="flex gap-5 text-xl font-bold opacity-25 border-b pb-4 pt-4">
              <h1>05</h1><h1>Deliveries</h1>
            </div>
          </div>
          <div>
            <div className="">
              <div className="text-4xl font-bold opacity-50 mt-5 mb-9 flex justify-between">
                <h1>How do you drink your coffee?</h1> <img src={img1} className="w-7 " onClick={()=>{setVal1(!val1)}}  />
              </div>{val1?
              <div className="flex gap-5 pt-10">
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Capsule</h1>
                  <p className="opacity-75">Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-teal-600 text-white rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Filter</h1>
                  <p className="opacity-75">For pour over or drip methods like Aeropress, Chemex, and V60</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-orange-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Espresso</h1>
                  <p className="opacity-75">Dense and finely ground beans for an intense, flavorful experience</p>
                </div>
              </div>:""}
            </div>
            <div>
              <div className="text-4xl font-bold opacity-50 mt-5 mb-9 flex justify-between">
              <h1>What type of coffee?</h1> <img src={img2} className="w-7 " onClick={()=>{setVal2(!val2)}} />
                
              </div>{val2?
              <div className="flex gap-5 pt-7">
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Single Origin</h1>
                  <p className="opacity-75">Distinct, high quality coffee from a specific family-owned farm</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-teal-600 text-white rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Decaf</h1>
                  <p className="opacity-75">Just like regular coffee, except the caffeine has been removed</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Blended</h1>
                  <p className="opacity-75">Combination of two or three dark roasted beans of organic coffees</p>
                </div>
              </div>:''}
            </div>
            <div>
              <div className="text-4xl font-bold opacity-50 mt-5 mb-9 flex justify-between">
              <h1>How much would you like?</h1> <img src={img3} className="w-7 "  onClick={()=>{setVal3(!val3)}}/>
                
              </div>{val3?
              <div className="flex gap-5 pt-7">
                <div className="p-4 pt-12 pb-16 bg-teal-600 text-white rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">250g</h1>
                  <p className="opacity-75">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">500g</h1>
                  <p className="opacity-75">Perfect option for a couple. Yields about 40 delectable cups.</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">1000g</h1>
                  <p className="opacity-75">Perfect for offices and events. Yields about 90 delightful cups.</p>
                </div>
              </div>:''}
            </div>
            <div>
              <div className="text-4xl font-bold opacity-50 mt-5 mb-9 flex justify-between">
              <h1>Want us to grind them?</h1> <img src={img4} className="w-7 "  onClick={()=>{setVal4(!val4)}}/>
                
              </div>{val4?
              <div className="flex gap-5 pt-7">
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Wholebean</h1>
                  <p className="opacity-75">Best choice if you cherish the full sensory experience</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Filter</h1>
                  <p className="opacity-75">For drip or pour-over coffee methods such as V60 or Aeropress</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-teal-600 text-white rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Cafetiere</h1>
                  <p className="opacity-75"> Course ground beans specially suited for french press coffee</p>
                </div>
              </div>:""}
            </div>
            <div>
              <div className="text-4xl font-bold opacity-50 mt-5 mb-9 flex justify-between">
              <h1>How often should we deliver?</h1> <img src={img5} className="w-7 "  onClick={()=>{setVal5(!val5)}}/>
                
              </div>{val5?
              <div className="flex gap-5 pt-7">
                <div className="p-4 pt-12 pb-16 bg-teal-600 text-white rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Every week</h1>
                  <p className="opacity-75">$7.20 per shipment. Includes free first-class shipping.</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Every 2 week</h1>
                  <p className="opacity-75">$9.60 per shipment. Includes free priority shipping.</p>
                </div>
                <div className="p-4 pt-12 pb-16 bg-gray-100 rounded-2xl">
                  <h1 className="text-xl font-bold mb-5">Every month</h1>
                  <p className="opacity-75">$12.00 per shipment. Includes free priority shipping.</p>
                </div>
              </div>:""}
              <div className="bg-gray-900 text-white p-14 mt-14 rounded-2xl pt-7">
                <h1 className="opacity-50 pr-12 pl-10">Order Summary</h1>
                <p className="text-xl font-bold pt-7 pr-12 pl-10">“I drink my coffee as <span className="text-teal-600"> Filter</span>, with a 
                <span className="text-teal-600"> Decaf</span> type of bean. <span className="text-teal-600"> 250g </span>ground ala 
                <span className="text-teal-600"> Cafetiare</span>, 
                  sent to me <span className="text-teal-600"> Every Week</span>.”</p>
              </div>
              <div className="flex justify-end">
                <div className='mt-14 '>
                    <Link to='/plan'><p className='bg-teal-500 text-white w-60 text-center p-5 font-bold rounded-2xl shadow cursor-pointer'>Create Your Plan</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center bg-gray-900 p-12 pt-8 pb-8 mb-32 gap-16'>
          <div className="flex font-bold text-3xl text-white gap-2">
            <img src={logo} className="h-6" />
            <h1>coffeeroasters</h1>
          </div>
          <div>
            <ul className="flex gap-10 text-white">
              <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to='/'>HOME</Link></li>
              <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to='/about'>ABOUT US</Link></li>
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
  
  export default Creatplan