const baseURL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(
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

export async function getProduct(id) {
  try {
    const url = new URL(`${baseURL}/products/${id}`);

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

export async function createProduct(name, description, price, tags, images) {
  try {
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

    if (!res.ok) {
      throw new Error("상품을 추가하는데 실패했습니다.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function patchProduct(id, productData) {
  try {
    const url = new URL(`${baseURL}/products/${id}`);

    const res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(productData),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteProduct(id) {
  try {
    const url = new URL(`${baseURL}/products/${id}`);

    const res = await fetch(url, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("상품을 삭제하는 데 실패했습니다.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
