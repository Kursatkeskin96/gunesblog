import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <>
      <section className="bg-ct-blue-600">
        <div className="mx-auto h-full flex justify-center items-center">
          <div className="bg-white py-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}