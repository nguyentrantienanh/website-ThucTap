import thumd1 from '../../../assets/blog/blog.png'
import thumd2 from '../../../assets/blog/thumb_66a3399ae9b3b1721973146.png'
import thumd3 from '../../../assets/blog/thumb_66a339b749cad1721973175.png'
import Icon from '../../../icons/Icon'
import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: 'Why Choose ViserBus? Benefits of Booking Your Travel with Us.',
    image: thumd1,
    date: '22 Jul 2024',
    path: 'blog1'
  },
  {
    id: 2,
    title: 'Top 10 Tips for Stress-Free Bus Travel: Make Every Journey Comfortable and Enjoyable.',
    image: thumd2,
    date: '22 Jul 2024',
    path: 'blog2'
  },
  {
    id: 3,
    title: 'How to Book Bus Tickets Online: A Step-by-Step Guide for First-Time Users',
    image: thumd3,
    date: '22 Jul 2024',
    path: 'blog3'
  },
  {
    id: 4,
    title: 'Exploring the Benefits of Online Bus Ticket Booking: Convenience and Savings',
    image: thumd1,
    date: '22 Jul 2024',
    path: 'blog4'
  },
  {
    id: 5,
    title: 'The Future of Bus Travel: Innovations and Trends in the Industry',
    image: thumd2,
    date: '22 Jul 2024',
    path: 'blog5'
  },
  {
    id: 6,
    title: 'How to Choose the Right Bus Service for Your Journey: A Comprehensive Guide',
    image: thumd3,
    date: '22 Jul 2024',
    path: 'blog6'
  },
  {
    id: 7,
    title: 'The Ultimate Guide to Bus Travel Etiquette: Do’s and Don’ts for a Pleasant Journey',
    image: thumd1,
    date: '22 Jul 2024',
    path: 'blog7'
  },
  {
    id: 8,
    title: 'Exploring Scenic Routes: The Most Beautiful Bus Journeys Around the World',
    image: thumd2,
    date: '22 Jul 2024',
    path: 'blog8'
  }
];

function BlogCol() {
  return (
    <nav className="flex flex-col gap-4 w-64 bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Blog List</h3>
      <ul className="flex flex-col gap-3">
        {blogs.map(post => (
          <li key={post.id}>
            <Link to={post.path} className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded transition">
              <img src={post.image} alt={post.title} className="w-12 h-10 object-cover rounded" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Icon name="calendar" /> {post.date}
                </span>
                <span className="text-sm font-medium line-clamp-2">{post.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BlogCol;
