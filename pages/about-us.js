import React from 'react';

const AboutUs = () => {
  return (
    <div className='max-w-7xl sm:px-10 px-4 m-auto'>
      <div className='flex xl:flex-row flex-col justify-between pt-10  m-auto gap-5'>
        <div className='flex flex-col py-10 flex-1'>
          <h1 className='text-black font-bold lg:text-[35px] sm:text-[30px] text-[22px] leading-tight'>
            About Flamin' Signs and Boxes
          </h1>
          <div className='flex flex-col gap-4'>
            <span className='text-gray-700 font-[400] text-base lg:max-w-lg'>
              Around 10 years ago, Mick had a small business as a picture framer
              making his own mouldings in his shed. He could not compete with
              the cheap framing mouldings that were made in China so business
              was slow.
            </span>

            <span className='text-gray-700 font-[400] text-base lg:max-w-lg'>
              His uncle gave him a book on Pyrography and Mick purchased a
              Pyrography tool with the view to using the tool on his picture
              frames and framed mirrors as a unique touch.
            </span>

            <span className='text-[#e7bd26] font-[400] text-base lg:max-w-lg'>
              Flamin' Frames was open for business.
            </span>
          </div>
        </div>
        <div className='flex flex-1'>
          <img src='/about.png' alt='img' className='' />
        </div>
      </div>

      <div className='flex flex-col gap-7 my-10'>
        <span className='text-gray-700 font-[400] text-base '>
          After an unsuccessful stint at various markets trying to sell his
          frames and mirrors, a passerby asked Mick if he could make a sign for
          his property (like the one Mick had made up for his Flamin' Frames
          business). The customer absolutely loved the finished sign so,
          'Flamin' Signs' was born. Since then, Mick has honed his craft to
          include hand burnt original artworks on large timber plaques and
          various sized timber jewellery boxes. 'Flamin' Signs and boxes' was
          born. Mick also hand burns calligraphy onto his sentimental Olive Wood
          Hearts and Mango Wood Boxes
        </span>
      </div>
      <div>
        <span className='text-black font-bold lg:text-[33px] sm:text-[30px] text-[22px] leading-tight my-10'>
          Flamin' Signs And Boxes provides a unique gift idea for the person who
          has everything.
        </span>
      </div>

      <div className='flex lg:flex-row flex-col gap-8 my-10'>
        <div className='flex flex-col gap-7 justify-center flex-1'>
          <span className='text-gray-700 font-[400] text-base '>
            After 6 years of exclusively hand burning all content 12 hours a
            day, 7 days a week, Mick's wrist and forearm were in agony, so he
            invested in a laser engraver in early 2017 to take the work load of
            his arm. Now, all his signs and named/image boxes are laser engraved
            and he exclusively hand burns his artworks into his boxes and
            plaques and hand burns names into his Olive Wood Hearts at his shop
            at Queen Victoria Market.
          </span>
          <span className='text-gray-700 font-[400] text-base'>
            A new 2017 product is custom wood shock proof wood veneer and shock
            proof, wood look synthetic phone cases where he can laser engrave
            any image into the phone cases. In 2019, Mick moved into a container
            shop within Queen Vic Market where he installed another laser
            engraver and now is the only on the spot engraver of phone cases and
            Mango Wood boxes in Australia.
          </span>
        </div>

        <div className='flex-1 flex items-center justify-center'>
          <img src='/image 3.png' alt='img' className=' ' />
        </div>
      </div>

      <div className='flex flex-col gap-7 my-4'>
        <span className='text-gray-700 font-[400] text-base '>
          As of March 2020, Australia shut it's borders to international
          tourists and Australians were advised to not travel and to stay home
          due to Covid19. This resulted in a loss of 98% of foot traffic through
          the market. Due to Government rulings, the market had closed while the
          country was battling to control the virus. Mick has moved all his
          focus online to provide a direct gift giving service for people
          staying home and still wanting to buy gifts for loved ones and have it
          sent straight to their home.
        </span>

        <span className='text-gray-700 font-[400] text-base '>
          Since March, Mick has become creative with his time in the garage and
          has introduced Fractal Burnt Charcuterie/Platter Boards, Personalised
          Timber Growth Ruler Charts and Mango Wood Watch Organiser Boxes. Once
          the restrictions were lifted and the market reopened, Mick made the
          difficult decision to leave Queen Victoria Market and work exclusively
          from his garage at home. The costs of leasing premises in the city,
          along with the vast associated costs were too high in relation to the
          low foot traffic through the market. Mick will periodically attend the
          market on a casual basis going forward.{' '}
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
