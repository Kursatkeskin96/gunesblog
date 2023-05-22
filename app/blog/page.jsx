'use client'
import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import styles from './styles.module.css';
import Footer from "@/components/Footer";

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
    <div>
      <div className={styles.homebackground}>
        <div className="flex flex-col items-center">
        <div className=" m-auto flex flex-col items-center mt-36">
        <h1 className="p-2 bg-black text-white text-4xl">Güneş'in Anı Defterine Hoş Geldiniz</h1>
          <Link href='/blog-yaz'><p className="mt-5 text-xl text-white bg-[#f59f26] p-1 rounded-lg">Anı Yazmak İçin Tıkla</p></Link>
          </div>
          </div>
          </div>
          <div className="pt-8 bg-slate-100">
          <div className="max-w-[85%] mx-auto">
          <h1 className="text-4xl font-bold">Güneş'in Anı Defteri</h1>
          <hr className="my-2"></hr>
          <p className="mt-6 mb-16">Güneş'in anı defterine hoş geldiniz. Bu sayfanın yapılışı ile, Güneş okumayı öğrenene kadar ona burada notlar yazarak ölümsüz anılar biriktirmek hedeflendi.
          Bu sayfayı görebilen herkesin en önemli ortak noktası olan biricimize, ömür boyu saklayıp okuyabileceği notlar yazalım. Yazı yazmak için lütfen <Link href='blog-yaz'><span className="border-b-2 border-orange-400">tıklayın</span></Link></p>
          </div>
      {blogs.map((blog) => (
       <BlogCard 
       key={blog._id}
        title={blog.title}
        blog={blog}
        cretor={blog.creator}
       />
      ))}
      </div>
      </div>
  );
}
