export default function ProductCard({ products }) {
  return (
    <article>
      {products.images[0] ? (
        // 데이터에 이미지가 있을 때
        // 데이터에 이미지가 url 링크로 있는데 해당 링크에서 이미지를 정상적으로 불러오지 못함
        <img
          className="no-Image"
          src={products.images[0]}
          alt={products.name}
          onError={(e) => {
            e.currentTarget.src = "/images/no_image.png";
          }}
        />
      ) : (
        // 데이터에 이미지가 아에 존재하지 않을 때
        <img
          className="no-Image"
          src="/images/no_image.png"
          alt="이미지 없음"
        />
      )}
      <p>{products.name}</p>
      <p>{products.price}원</p>
      <p>♡{products.favoriteCount}</p>
    </article>
  );
}
