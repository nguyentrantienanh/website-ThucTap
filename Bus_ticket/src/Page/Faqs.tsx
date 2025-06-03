import FAQ from "./FAQ/FAQ";
import BlogPost from "./Blog/components/Blog_Post";
import backgroundFAQs from '../assets/background.jpg'



function Faqs() {
  return (
    <>
    <div
        className='  w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgroundFAQs})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>FAQs</h1>
        </div>
      </div>
      <section className='flex flex-col gap-5  xl:px-[30%]'>
        <FAQ />
        <BlogPost />
      </section>
    </>
  );
}
export default Faqs;
