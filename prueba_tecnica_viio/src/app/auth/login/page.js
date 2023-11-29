import Login from "@/components/Login";

export default function LoginPage() {
  return (
    <main
      className="text-center flex min-h-screen flex-col items-center  px-5 py-10 gap-5
    
      md:px-10 md:py-20 lg:px-20 lg:py-20 xl:px-40 xl:py-20 2xl:px-80 2xl:py-20"
    >
      <h1 className="text-2xl font-bold mb-10">MAYNOOTH</h1>

      <Login />
    </main>
  );
}
