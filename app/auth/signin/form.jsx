"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import gunes3 from '@/assets/guneslogin.jpg'
import Footer from "@/components/Footer";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ username: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid username or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (  
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 max-w-6xl">
    <div className="flex justify-center items-center">
      <Image
        src={gunes3}
        width={300}
        height={300}
        className="mx-auto rounded-md"
        alt="Picture of the author"
        priority={true}
      />
    </div>
    <div className="">
      <form onSubmit={onSubmit} className="h-[400px] lg:w-[400px] shadow-lg p-10">
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="mb-6">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            required
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Kullanıcı adı"
            className={`${input_style}`}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Şifre</label>
          <input
            required
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="********"
            className={`${input_style}`}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: loading ? "#ccc" : "#fdb44b" }}
          className="inline-block px-7 mt-5 py-4 text-white font-medium text-sm leading-snug uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out w-full"
          disabled={loading}
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  </div>
);
}