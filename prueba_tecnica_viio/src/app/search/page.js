import PrivateRoute from "@/components/PrivateRoute";
import SearchProducts from "@/components/SearchProducts";

export default function SearchPage() {
  return (
    <PrivateRoute>
      <main
        className="flex min-h-screen flex-col items-center  px-5 py-10 gap-5
    
      md:px-10 md:py-20 lg:px-20 lg:py-20 xl:px-40 xl:py-20 2xl:px-80 2xl:py-20
    "
      >
        <SearchProducts />
      </main>
    </PrivateRoute>
  );
}
