export default function ItemCard({ itemData }) {
  return (
    <article>
      {itemData.images[0] ? (
        <img src={itemData.images[0]} alt={itemData.name} />
      ) : (
        <img
          className="no-Image"
          src="/images/no_image.png"
          alt="이미지 없음"
        />
      )}
      <p>{itemData.name}</p>
      <p>{itemData.price}원</p>
      <p>♡{itemData.favoriteCount}</p>
    </article>
  );
}
