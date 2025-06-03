import thumd3 from '../../../../assets/blog/thumb_2.png';
import { blogData }  from '../../components/Blog_card-home';
import Icon from '../../../../icons/Icon';

function  Blog3() {
  const blagPost = blogData;
  return (
     <section>
      <div className='flex flex-col bg-[#fff]  justify-center py-10'>
        <img src={thumd3} alt="Blog Thumbnail" className='w-full h-full object-cover mb-5' />
          <div className='flex   gap-3 text-gray-500'>
            <span className=' text-[#40c640] '>
              <Icon name='calendar' />
            </span>
          
          <span className='text-sm mb-3'>{blagPost[2].Date}</span>
          </div>
         <strong className='text-[27px] font-semibold  '> {blagPost[2].title}</strong>
        <div  className='flex flex-col my-4'>
           <strong className=' text-[20px] text-gray-700'>From setting clear retirement goals to estimating your future exstrongenses and income needs, ViserBus offers a seamless travel experience with numerous benefits.</strong>
          <span className='text-gray-500 '> we'll guide you through the process of creating a solid retirement plan tailored to your unique circumstances. Whether you're decades away from retirement or nearing your retirement age, this guide offers valuable insights to help you make informed decisions and take proactive steps towards achieving your retirement objectives.</span>
        </div>
        <div className='  bg-gray-200 p-7 text-gray-500 text-center text-[17px] border-l-4 border-[#40c640]'>
          <p className=' '>Aenean metus lectus at id. Morbi aliquet commodo a sodales eget. Eu justo ante nibh et a turpis, aliquam phasellus hymenaeos, imperdiet eget cras sociosqu, tincidunt a amet. Faucibus urna luctus, arcu ni</p>
        </div>
        <div className='flex flex-col my-4'>
          <strong className=' text-[20px] text-gray-700'> Planning for retirement doesn't end with accumulating savings</strong>
          <span className='text-gray-500 '>It also involves developing a sustainable withdrawal strategy to ensure your funds last throughout your retirement years. We'll discuss key factors to consider when creating a withdrawal plan, such as your expected lifespan, inflation, and investment returns, to help you strike the right balance between enjoying your retirement lifestyle and preserving your financial security.</span>
        </div>
        <div className='flex flex-col my-4'>
          <strong className=' text-[20px] text-gray-700'>Planning before starting</strong>
          <span className='text-gray-500 '>Whether you're just starting your career, mid-career, or approaching retirement age, it's never too early or too late to begin planning for your future. Join us as we empower you with the knowledge and tools you need to take control of your retirement destiny and embark on the path towards a financially secure and fulfilling retirement.</span>
        </div>
        <div className='flex flex-col my-4'>
          <strong className=' text-[20px] text-gray-700'>From setting clear retirement goals to estimating your future expenses and income needs</strong>
          <span className='text-gray-500 '> we'll guide you through the process of creating a solid retirement plan tailored to your unique circumstances. Whether you're decades away from retirement or nearing your retirement age, this guide offers valuable insights to help you make informed decisions and take proactive steps towards achieving your retirement objectives.</span>
        </div>
        <div className='flex gap-4 items-center  h-10  mt-5'>
          <strong className=' text-[20px] text-gray-700'>Share On
          </strong>
          <span className='flex gap-3  '>
            <Icon name='facebook' />
            <Icon name='twitter' />
            <Icon name='youtube' />
            <Icon name='instagram' />
          </span>
        </div>
       
      
      </div>
     </section>
  );
}
export default Blog3;