import thumd1 from '../../../assets/blog/thumb_1.png'
import thumd2 from '../../../assets/blog/thumb_2.png'
import thumd3 from '../../../assets/blog/thumb_3.png'
import thumd4 from '../../../assets/blog/thumb_4.png'
import thumd5 from '../../../assets/blog/thumb_5.png'
import thumd6 from '../../../assets/blog/thumb_6.png'
import thumd7 from '../../../assets/blog/thumb_7.png'
import thumd8 from '../../../assets/blog/thumb_8.png'

import Icon from '../../../icons/Icon'; 
import { Link } from 'react-router-dom';

   export const blogData  = [
    {
      id: 1,
      title: 'Why Choose ViserBus? Benefits of Booking Your Travel with Us.',
      image: thumd1,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog1',
      Date: '2023-10-01'
    },
    {
      id: 2,
      title: 'Top 10 Tips for Stress-Free Bus Travel: Make Every Journey Comfortable and Enjoyable.',
      image: thumd2,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog2',
      Date: '2023-10-01'
    },
    {
      id: 3,
      title: 'How to Book Bus Tickets Online: A Step-by-Step Guide for First-Time Users',
      image: thumd3,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog3'
    },
    {
      id: 4,
      title: 'Exploring the Benefits of Online Bus Ticket Booking: Convenience and Savings',
      image: thumd4,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog4',
      Date: '2023-10-01'
    },
    {
      id: 5,
      title: 'The Future of Bus Travel: Innovations and Trends in the Industry',
      image: thumd5,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog5',
      Date: '2023-10-01'
    },
    {
      id: 6,
      title: 'How to Choose the Right Bus Service for Your Journey: A Comprehensive Guide',
      image: thumd6,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog6',
      Date: '2023-10-01'
    },
    {
      id: 7,
      title: 'The Ultimate Guide to Bus Travel Etiquette: Do’s and Don’ts for a Pleasant Journey',
      image: thumd7,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog7',
      Date: '2023-10-01'
    },
    {
      id: 8,
      title: 'Exploring Scenic Routes: The Most Beautiful Bus Journeys Around the World',
      image: thumd8,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog8',
      Date: '2023-10-01'
    }
  ]

function Blog() {

  return (
    <>
    
      <section className='flex flex-col gap-5 xl:px-[20%]'>
         <div className='grid grid-cols-4   items-center justify-items-center gap-5 py-10 '>
        {blogData.map((post) => (
          <div key={post.id} className='p-5 shadow-xl  '>
            <img src={post.image} alt={post.title} className='w-full h-60 object-cover rounded-lg' />
            <div className='   mt-3'>
              <i className='text-[#1db000]'>
                <Icon name='calendar' />
              </i>
            </div>
            <Link to={post.path}>
              <h2 className='text-xl font-semibold  line-clamp-1 text-ellipsis'>{post.title}</h2>
              <p className='text-gray-600 mt-2 line-clamp-1 text-ellipsis'>{post.content}</p>
            </Link>
            
          </div>
        ))}
      </div>
      </section>
     
    </>
  );
}
export default Blog;