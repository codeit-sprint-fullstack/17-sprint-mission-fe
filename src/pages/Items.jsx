import SellingProducts from "../components/SellingProducts";
import useMediaPageSize from "../hooks/useMediaPageSize";

export default function Items() {
  const { pageSize } = useMediaPageSize();

  return (
    <main className="page">
      <SellingProducts pageSize={pageSize} />
    </main>
  );
}
