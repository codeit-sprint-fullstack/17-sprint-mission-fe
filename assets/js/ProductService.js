const BASE_URL = 'https://panda-market-api-crud.vercel.app';
const PRODUCT_URL = `${BASE_URL}/products`;

export async function getProductList({
    page = 1,
    pageSize = 10,
    keyword = '',
} = {}) {
    try {
        const params = new URLSearchParams({ page, pageSize, keyword });
        const res = await fetch(`${PRODUCT_URL}?${params}`);

        if (!res.ok) throw new Error(`상품 목록 조회 실패: ${res.status}`);

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function getProduct(id) {
    try {
        const res = await fetch(`${PRODUCT_URL}/${id}`);

        if (!res.ok) throw new Error(`상품 상세 조회 실패: ${res.status}`);

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function createProduct({
    name,
    description,
    price,
    tags,
    images,
}) {
    try {
        const res = await fetch(PRODUCT_URL, {
            method: 'POST',
            body: JSON.stringify({ name, description, price, tags, images }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) throw new Error(`상품 등록 실패: ${res.status}`);

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function patchProduct(id, productData) {
    try {
        const res = await fetch(`${PRODUCT_URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(productData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) throw new Error(`상품 수정 실패: ${res.status}`);

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteProduct(id) {
    try {
        const res = await fetch(`${PRODUCT_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) throw new Error(`상품 삭제 실패: ${res.status}`);

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
