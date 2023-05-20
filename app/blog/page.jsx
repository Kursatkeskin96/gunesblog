'use client'
import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";

export default function Blogpage() {
  const { data: session, status } = useSession();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setBlogs(data);
    };
      fetchBlogs();
  }, []);

  return (
    <>
      {blogs.map((blog) => (
       <BlogCard 
       key={blog._id}
        title={blog.title}
        blog={blog}
       />
      ))}
      </>
  );
}
