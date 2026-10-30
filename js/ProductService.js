const baseURL = "https://panda-market-api-crud.vercel.app";

async function getProductList(
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
) {
  try {
    const url = new URL(`${baseURL}/products`);
    url.searchParams.append("page", page);
    url.searchParams.append("pageSize", pageSize);
    url.searchParams.append("orderBy", orderBy);
    if (keyword) {
      url.searchParams.append("keyword", keyword);
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getProduct(id) {
  const url = new URL(`${baseURL}/products/${id}`);

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

async function createProduct(name, description, price, tags, images) {
  const url = new URL(`${baseURL}/products`);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      tags: tags,
      price: price,
      description: description,
      images: images,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

async function patchProduct(id, productData) {
  const url = new URL(`${baseURL}/products/${id}`);

  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  return data;
}

async function deleteProduct(id) {
  const url = new URL(`${baseURL}/products/${id}`);

  const res = await fetch(url, {
    method: "DELETE",
  });

  const data = await res.json();
  return data;
}
