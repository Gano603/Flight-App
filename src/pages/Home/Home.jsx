import React from 'react'

const Home = () => {

  const cardData= ()=>[
      {
        "title": "Explore our destinations",
        "content": "Find flights and fares",
        "imageUrl": "https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/miscellaneous/map/h2-destination-discovery-map-laptop.jpg"
      },
      {
        "title": "Elevate your experience",
        "content": "Purchase add-ons",
        "imageUrl": "https://www.qatarairways.com/content/dam/images/renditions/square/brand/qsuite/s-qsuite-ife-dine.jpg"
      },
      {
        "title": "Travel requirements",
        "content": "Find out more",
        "imageUrl": "https://www.qatarairways.com/content/dam/images/renditions/horizontal-3/brand/aircraft/a350/h3-a350-1000-doha2.jpg"
      },
      {
        "title": "Your perfect holiday awaits",
        "content": "Book a package",
        "imageUrl": "https://www.qatarairways.com/content/dam/images/renditions/horizontal-3/destinations/maldives/maldives/h3-maldives-beach-sunrise.jpg"
      }
  ];
  return (
    <>
      <div className="bg-mainImage1 bg-cover w-full md:h-[27rem]">
        <div className="relative md:top-10 md:w-[24rem] left-[6rem] md:h-[24rem] text-white">
          <h1 className='md:text-4xl font-thin jotia' >Experience unrivalled Premium Travel</h1>
          <p className='md:text-md md:my-8'>World's Best Business Class</p>
          <button className='md:text-md font-bold md:rounded-3xl md:py-3 md:px-5 border-[1px] border-white'>Book Now</button>
        </div>
      </div>
      <div className="bg-white mx-auto w-[80rem]">
      </div>
      <div className="bg-[#F2F3FA] jotia px-[5.4rem]">
        <div className="">
          <h1 className=' text-[#5A5B65] font-extralight md:pt-4 text-3xl'>Start Planning your next trip</h1>
          <p className=' text-[#5A5B65] font-extralight md:py-3 text-md'>Thinking of travelling somewhere soon? Here are some options to help you get started.</p>
          <div className='md:flex my-6 '>
            {cardData().map((card,index)=>(
              <div key={index} className='card bg-white md:w-[18rem] md:h-[20rem] mx-3 border-2 rounded-xl overflow-hidden'>
                <img className='' src={card.imageUrl} alt={card.title}/>
                <div className="mb-8">
                  <p className='text-3xl font-thin'>{card.title}</p>
                  <hr/>
                  <p className='font-semibold'>{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className='jotia text-[#5A5B65] font-extralight md:pt-4 text-3xl'>Our Latest flight deals</h1>
          <div className="search-location flex py-4">
              <p>From </p>
              <input type="search" placeholder="search" class="md:relative left-4 border-b-2 bg-[#F2F3FA]"/>
              
          </div> 
        </div>
        <div className="">
        </div>
      </div>
      <div className="">

      </div>
    </>
  )
}

export default Home