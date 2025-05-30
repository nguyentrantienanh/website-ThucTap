import { Outlet, useLocation } from 'react-router-dom';
import Blog_col from './Blog/Blog_col';

function BlogLayout() {
  const location = useLocation();
  const isDetail = location.pathname !== '/blog' && location.pathname !== '/blog/';

  return (
    <div className="flex ">
      <div className={isDetail ? "w-3/5 bg-gray-100 p-4  " : " bg-gray-100    "}>
        <Outlet />
      </div>
      {isDetail && (
        <div className="w-2/5 p-4">
          <Blog_col />
        </div>
      )}
    </div>
  );
}

export default BlogLayout;