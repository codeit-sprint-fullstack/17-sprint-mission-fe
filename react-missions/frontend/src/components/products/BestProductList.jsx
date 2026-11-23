import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css";

export default function BestProductList({
  loading,
  error,
  list,
  favorites,
  onFavorite,
}) {
  if (loading) return <p role="status">베스트 상품을 불러오는 중입니다.</p>;
  if (error) return <p role="alert">{error}</p>;
  if (list.length === 0) return <p>베스트 상품이 없습니다.</p>;

  return (
    <Swiper
      className="products-slider"
      modules={[Keyboard, A11y]}
      grabCursor
      slidesPerView={1}
      spaceBetween={16}
      breakpoints={{
        376: { slidesPerView: 2, spaceBetween: 20 },
        775: { slidesPerView: 4, spaceBetween: 24 },
      }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      aria-label="베스트 상품"
    >
      {list.map((product) => (
        <SwiperSlide key={product.id}>
          <article className="product-item">
            <ProductCard
              product={product}
              isBest
              favorite={favorites[product.id]}
              onFavorite={onFavorite}
            />
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
