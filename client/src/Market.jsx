import React, { useEffect, useState } from "react";
import { listProducts } from "./api";

function pageSize() {
  if (window.innerWidth < 744) return 4;
  if (window.innerWidth < 1280) return 6;
  return 10;
}

function Pagination({ page, count, select }) {
  if (count < 2) return null;
  const first = Math.max(1, Math.min(page - 2, count - 4));
  const numbers = Array.from({ length: Math.min(5, count) }, (_, index) => first + index);
  return (
    <nav className="paginationBar" aria-label="상품 목록 페이지">
      <button className="paginationButton" disabled={page === 1} onClick={() => select(page - 1)}>
        <img src="/images/icons/arrow_left.svg" alt="이전 페이지" />
      </button>
      {numbers.map((number) => (
        <button key={number} className={number === page ? "paginationButton active" : "paginationButton"}
          aria-current={number === page ? "page" : undefined} onClick={() => select(number)}>{number}</button>
      ))}
      <button className="paginationButton" disabled={page === count} onClick={() => select(page + 1)}>
        <img src="/images/icons/arrow_right.svg" alt="다음 페이지" />
      </button>
    </nav>
  );
}

export default function Market() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(pageSize);
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState({ list: [], totalCount: 0 });
  const [message, setMessage] = useState("");

  useEffect(() => {
    function resize() {
      const newSize = pageSize();
      if (newSize !== limit) {
        setLimit(newSize);
        setPage(1);
      }
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [limit]);

  useEffect(() => {
    const controller = new AbortController();
    setMessage("상품을 불러오는 중이에요.");
    listProducts(page, limit, keyword, controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;
        const lastPage = Math.max(1, Math.ceil(data.totalCount / limit));
        if (page > lastPage) {
          setPage(lastPage);
          return;
        }
        setResult(data);
        setMessage(data.list.length ? "" : keyword ? "검색 결과가 없어요." : "등록된 상품이 없어요.");
      })
      .catch(() => {
        if (!controller.signal.aborted) setMessage("상품을 불러올 수 없어요. 잠시 후 다시 시도해 주세요.");
      });
    return () => controller.abort();
  }, [page, limit, keyword]);

  function search(event) {
    event.preventDefault();
    setKeyword(input.trim());
    setPage(1);
  }

  return (
    <main className="page market">
      <div className="marketTools">
        <h1 className="pageTitle">판매 중인 상품</h1>
        <form role="search" className="searchBox" onSubmit={search}>
          <button aria-label="검색"><img src="/images/icons/ic_search.svg" alt="" /></button>
          <input aria-label="상품 검색" placeholder="검색할 상품을 입력해 주세요" value={input}
            onChange={(event) => setInput(event.target.value)} />
        </form>
        <a className="button action" href="/registration">상품 등록하기</a>
        <span className="sortLabel">최신순</span>
      </div>
      {message ? <p className="status" role="status">{message}</p> : (
        <>
          <div className="cardGrid">
            {result.list.map((item) => (
              <a className="itemCard" key={item.id} href={`/items/${encodeURIComponent(item.id)}`}>
                <img className="itemImage" src="/images/product-default.png" alt="상품 기본 이미지" role="img" />
                <h2>{item.name}</h2><strong>{item.price.toLocaleString("ko-KR")}원</strong>
              </a>
            ))}
          </div>
          <Pagination page={page} count={Math.ceil(result.totalCount / limit)} select={setPage} />
        </>
      )}
    </main>
  );
}
