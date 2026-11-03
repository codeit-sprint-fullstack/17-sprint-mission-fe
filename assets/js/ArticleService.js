const BASE_URL = 'https://panda-market-api-crud.vercel.app';
const ARTICLE_URL = `${BASE_URL}/articles`;

export function getArticleList({ page = 1, pageSize = 10, keyword = '' } = {}) {
    const params = new URLSearchParams({ page, pageSize, keyword });

    return fetch(`${ARTICLE_URL}?${params}`)
        .then((res) => {
            if (!res.ok) throw new Error(`게시글 목록 조회 실패: ${res.status}`);
            return res.json();
        })
        .catch((error) => console.log(error.message));
}

export function getArticle(id) {
    return fetch(`${ARTICLE_URL}/${id}`)
        .then((res) => {
            if (!res.ok) throw new Error(`게시글 상세 조회 실패: ${res.status}`);
            return res.json();
        })
        .catch((error) => console.log(error.message));
}

export function createArticle({ title, content, image }) {
    return fetch(ARTICLE_URL, {
        method: 'POST',
        body: JSON.stringify({ title, content, image }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error(`게시글 등록 실패: ${res.status}`);
            return res.json();
        })
        .catch((error) => console.log(error.message));
}

export function patchArticle(id, articleData) {
    return fetch(`${ARTICLE_URL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(articleData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error(`게시글 수정 실패: ${res.status}`);
            return res.json();
        })
        .catch((error) => console.log(error.message));
}

export function deleteArticle(id) {
    return fetch(`${ARTICLE_URL}/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
            if (!res.ok) throw new Error(`게시글 삭제 실패: ${res.status}`);
            return res.json();
        })
        .catch((error) => console.log(error.message));
}
