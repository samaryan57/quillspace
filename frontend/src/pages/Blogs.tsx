import AppBar from "../components/AppBar.js";
import BlogCard from "../components/BlogCard.js";
import BlogCardSkeleton from "../components/BlogCardSkeleton.js";
import { useBlogs } from "../hooks/index.js";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex flex-col">
        <AppBar />
        <div className="mt-16 flex justify-center">
          <div className="max-w-3xl w-full">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <AppBar />
      <div className="mt-16 flex justify-center">
        <div className="max-w-3xl w-full">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={"June 10, 2025"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
