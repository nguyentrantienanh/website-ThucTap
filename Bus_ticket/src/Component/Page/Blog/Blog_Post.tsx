import { Link } from 'react-router-dom'
import thumd1 from '../../../assets/blog/blog.png'
import thumd2 from '../../../assets/blog/thumb_66a3399ae9b3b1721973146.png'
import thumd3 from '../../../assets/blog/thumb_66a339b749cad1721973175.png'
import Icon from '../../../icons/Icon' // Assuming you have an Icon component for icons

function BlogPost() {
  const blogPost = [
    {
      id: 1,
      title: 'Why Choose ViserBus? Benefits of Booking Your Travel with Us.',
      image: thumd1,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog1'
    },
    {
      id: 2,
      title: 'Top 10 Tips for Stress-Free Bus Travel: Make Every Journey Comfortable and Enjoyable.',
      image: thumd2,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog2'
    },
    {
      id: 3,
      title: 'How to Book Bus Tickets Online: A Step-by-Step Guide for First-Time Users',
      image: thumd3,
      content: 'From setting clear retirement goals to estimating your future expenses and income needs',
      path: 'blog3'
    }
  ]

  return (
    <>
      <div className='grid grid-cols-3   items-center justify-items-center gap-5 py-10 '>
        {blogPost.map((post) => (
          <div key={post.id} className='p-5 shadow-xl  '>
            <img src={post.image} alt={post.title} className='w-full h-60 object-cover rounded-lg' />
            <div className='   mt-3'>
              <i className='text-[#1db000]'>
                <Icon name='calendar' />
              </i>
            </div>

            <Link to={`/blog/${post.path}`}>
              <h2 className='text-xl font-semibold  line-clamp-1 text-ellipsis  '>{post.title}</h2>
              <p className='text-gray-600 mt-2 line-clamp-1 text-ellipsis  '>{post.content}</p>
            </Link>
          </div>
        ))}
      </div>
     
    </>
  )
}

export default BlogPost
