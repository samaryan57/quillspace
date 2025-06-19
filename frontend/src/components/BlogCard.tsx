import { Link } from "react-router-dom";
import Avatar from "./Avatar.js";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="mt-7 border-slate-200 border-b-1 cursor-pointer">
        <div className="flex my-1">
          <div className="flex flex-col justify-center">
            <Avatar name={authorName} />
          </div>
          <div className="font-light text-sm ml-2 flex flex-col justify-center">
            {`${authorName} `} &middot;
          </div>
          <div className="font-extralight text-sm text-slate-600 ml-1 flex flex-col justify-center">{`${publishedDate}`}</div>
        </div>
        <div className="text-2xl font-bold mb-1 mt-3">{title}</div>
        <div className="text-xl font-light font-['EB_Garamond'] mb-8">
          {content.length > 199
            ? `${content.slice(0, 199)}...`
            : `${content}...`}
        </div>
        <div className="text-slate-400 text-sm font-light pb-8">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
