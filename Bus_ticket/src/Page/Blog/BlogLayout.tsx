import { Outlet, useLocation } from 'react-router-dom'
import Blog_col from '../Blog/components/Blog_col'
import backgroundBlog from '../../assets/background.jpg'
import { blogData } from '../../Data/Blog'

function BlogLayout() {
  const location = useLocation()
  const isDetail = location.pathname !== '/blog'

  const blogPost = blogData.find((post) => post.path === location.pathname.replace('/blog/', ''))

  return (
    <>
      <div
        className='w-full h-50 flex items-center justify-center'
        style={{ backgroundImage: `url(${backgroundBlog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]'>
          <h1 className='text-4xl font-bold mb-4 text-center text-[#fff] px-[40%]'>
            {isDetail ? blogPost?.title : 'Blog'}
          </h1>
        </div>
      </div>
      <div className={` flex ${isDetail ? 'px-[25%]' : ''}  `}>
        <div className={isDetail ? 'w-4/5 bg-gray-100 pr-4  ' : ''}>
          <Outlet />
        </div>
        {isDetail && (
          <div className='w-120 p-4 bg-'>
            <Blog_col />
          </div>
        )}
      </div>{' '}
    </>
  )
}

export default BlogLayout
