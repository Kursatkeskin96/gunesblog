
const BlogCard = ({ blog }) => {
    // Format the createdAt date
    const createdAtDate = new Date(blog.createdAt);
    const formattedDate = createdAtDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
   <div className="shadow-lg p-3 w-[70%] my-5 mx-auto text-center">
    <div className="indent-5 text-4xl mt-3 text-left">
      {blog.title}
    </div>
    <hr className="my-5"></hr>
    <div className="indent-5 mt-5 text-left text-gray-500 pb-10">
      {blog.text}
      <p className="text-right mt-5">{blog.creator}</p>
      <p className="text-right">{formattedDate}</p>
    </div>
   </div>
  );
};

export default BlogCard;