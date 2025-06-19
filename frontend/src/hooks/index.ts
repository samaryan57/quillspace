import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config.js";

interface Blog {
  title: string;
  content: string;
  id: string;
  author: { name: string };
}

export const useBlog = (id: string) => {
  const [blog, setBlog] = useState<Blog>({
    title: "",
    content: "",
    id: "",
    author: { name: "" },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlog(response.data.blog);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return { blog, loading };
};

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlogs(response.data.blogs);
      setLoading(false);
    }

    fetchData();
  }, []);

  return { blogs, loading };
};
