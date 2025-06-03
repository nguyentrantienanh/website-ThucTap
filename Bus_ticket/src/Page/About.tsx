import backgroundAbout from '../assets/background.jpg'
import AboutBus from '../assets/about/aboutbus.jpg'
import FAQ from './FAQ/FAQ'

function About() {
  return (
    <>
      <div
        className='  w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgroundAbout})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>About Us</h1>
        </div>
      </div>

      <section className='grid grid-cols-1 gap-5 px-10 py-5 bg-[#f9f9f9] xl:px-[30%]'>
        <div className=' grid grid-cols-2'>
          <div>
            <strong>Know Few Words About Autobus</strong>
            <p>
              Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sit reprehenderit non voluptas quam
              quod facilis, doloribus impedit magni. Numquam ipsum placeat ullam alias temporibus non quas aperiam odio
              pariatur.
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eveniet inventore blanditiis maxime
              doloremque minima. Quisquam, ex! Architecto laudantium culpa cupiditate hic facere est magni, possimus
              repudiandae, rerum eius omnis.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              excepturi sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero
              temporibus illum quis beatae quam officia ad.ri sed possimus recusandae temporibus tempore, aspernatur,
              autem sequi natus iste fugit. Eaque vero temporibus sed possimus recusandae temporibus tempore,
              aspernatur, autem sequi natus iste fugit. Eaque vero temporibus illum quis beatae quam officia ad.
            </span>
          </div>
          <div>
            {' '}
            <img src={AboutBus} alt='' />
          </div>
        </div>
        <div>
          <strong>About Us</strong>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem,
            blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit
            expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum
            necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae
            illum tenetur voluptates veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel
            temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi,
            reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet
            voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?
          </span>
        </div>
        <div className='flex flex-col gap-3'>
          <strong>Why Make Bus Reservations With AutoBus</strong>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem,
            blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit
            expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum
            necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae
            illum tenetur voluptates veritatis?
          </span>

          <ul className='list-disc pl-5'>
            <li>Free Cancellation</li>
            <li>Instant Refunds</li>
            <li>Easy & Quick Bus Booking</li>
            <li>Exciting Cashback & Bus Offers</li>
            <li>Best Price Assured</li>
            <li>24/7 Customer Assistance</li>
          </ul>
        </div>
        <div>
          <FAQ />
        </div>
      </section>
    </>
  )
}
export default About
