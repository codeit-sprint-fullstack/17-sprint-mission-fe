export default function ProductCard({ testData }) {
  return (
    <article>
      {testData.images[0] ? (
        <img src={testData.images[0]} alt={testData.name} />
      ) : (
        <img
          className="no-Image"
          src="/images/no_image.png"
          alt="이미지 없음"
        />
      )}
      <p>{testData.name}</p>
      <p>{testData.price}원</p>
      <p>♡{testData.favoriteCount}</p>
    </article>
  );
}
