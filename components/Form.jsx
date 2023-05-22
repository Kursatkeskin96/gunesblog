import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div className="bg-slate-100 h-screen">
    <section className="max-w-md sm:max-w-sm mx-auto pt-20">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-gray-700 font-medium">
          Baslik
        </label>
        <input
          id="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Basliginizi yazin"
          required
          className="p-2 mt-1 block w-full border-gray-300 focus:border-primary-orange focus:ring focus:ring-primary-orange focus:ring-opacity-50 shadow-sm"
        />
      </div>
  
      <div>
        <label className="text-gray-700 font-medium">
         Mesaj
        </label>
        <textarea
          id="text"
          value={post.text}
          onChange={(e) => setPost({ ...post, text: e.target.value })}
          type="text"
          placeholder="Mesajinizi yazin"
          required
          className="p-2 resize-none h-52 mt-1 block w-full border-gray-300 focus:border-primary-orange focus:ring focus:ring-primary-orange focus:ring-opacity-50 shadow-sm"
        />
      </div>
  
      <div className="flex justify-end">
        <Link href="/blog" className="text-primary-orange hover:text-primary-orange-dark px-5 py-1.5">
          Iptal
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {submitting ? "Gonderiliyor.." : "Gonder"}
        </button>
      </div>
    </form>
  </section>  
  </div>
);
};

export default Form;