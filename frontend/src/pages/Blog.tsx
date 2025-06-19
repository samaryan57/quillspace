import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar.js";
import Avatar from "../components/Avatar.js";
import BlogPageSkeleton from "../components/BlogPageSkeleton.js";
import { useBlog } from "../hooks/index.js";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  if (loading) {
    return (
      <div>
        <AppBar />
        <BlogPageSkeleton />
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div>
        <div className="grid grid-cols-12 px-30 mt-30 max-w-screen-2xl mx-auto">
          <div className="col-span-7">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-400 text-md my-3">
              Posted on June 11, 2025
            </div>
            <div className="text-lg font-normal mt-10">{blog.content}</div>
          </div>

          <div className="col-start-9 col-span-4">
            <div className="border-b border-slate-200 pb-2 mb-5 text-lg font-light">
              Author
            </div>
            <div className="flex justify-between">
              <div className="my-auto">
                <Avatar name={blog.author.name} />
              </div>
              <div className="ml-5">
                <div className="text-2xl font-bold mb-2">
                  {blog.author.name}
                </div>
                <div className="text-slate-500">
                  Random catchphrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
