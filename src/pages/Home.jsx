import BestProducts from "../components/BestProducts";
import SellingProducts from "../components/SellingProducts";
import useMediaPageSize from "../hooks/useMediaPageSize";

export default function Home() {
  const { pageSize, bestPageSize } = useMediaPageSize();

  return (
    <main className="page">
      <BestProducts pageSize={bestPageSize} />
      <SellingProducts pageSize={pageSize} />
    </main>
  );
}
