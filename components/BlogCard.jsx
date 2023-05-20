"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const BlogCard = ({ blog }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
   <div className="shadow-lg p-3 w-[70%] my-10 mx-auto text-center">
    <div className="text-4xl">
      {blog.title}
    </div>
    <div className="mt-5">
      {blog.text}
      {blog.creator}
    </div>
   </div>
  );
};

export default BlogCard;