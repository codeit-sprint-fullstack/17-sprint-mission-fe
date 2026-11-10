import itemData from "./itemData";
import ItemCard from "./ItemCard";

export default function BestItem() {
  return (
    <section>
      <h3>베스트 상품</h3>
      {itemData.map((item) => (
        <ItemCard key={item.id} itemData={item} />
      ))}
    </section>
  );
}
