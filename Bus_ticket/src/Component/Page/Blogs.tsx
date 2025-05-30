import Bloghome from "./Blog/Blog_card-home";
import Blog1 from './Blog/Content/Blog1';
import Blog2 from "./Blog/Content/Blog2";
import Blog3 from "./Blog/Content/Blog3";
import Blog4 from "./Blog/Content/Blog4";
import Blog5 from "./Blog/Content/Blog5";
import Blog6 from "./Blog/Content/Blog6";
import Blog7 from "./Blog/Content/Blog7";
import Blog8 from "./Blog/Content/Blog8";
import BlogLayout from "./BlogLayout";
 
import { Routes, Route } from 'react-router-dom'




function Blog() {
  return (
    <>
      <Routes>
      <Route path="/" element={<BlogLayout />}>
        <Route index element={<Bloghome />} />
        <Route path="blog1" element={<Blog1 />} />
        <Route path="blog2" element={<Blog2 />} />
        <Route path="blog3" element={<Blog3 />} />
        <Route path="blog4" element={<Blog4 />} />
        <Route path="blog5" element={<Blog5 />} />
        <Route path="blog6" element={<Blog6 />} />
        <Route path="blog7" element={<Blog7 />} />
        <Route path="blog8" element={<Blog8 />} />
      </Route>
    </Routes>
    </>
  );
}
export default Blog;