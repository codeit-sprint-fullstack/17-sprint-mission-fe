export const API_BASE_URL = "https://panda-market-api-crud.vercel.app";

export function makeQuery({ page = 1, pageSize = 10, keyword = "" } = {}) {
  const params = new URLSearchParams({ page, pageSize, keyword });
  return `?${params}`;
}

export function requestApi(path, options = {}) {
  return fetch(`${API_BASE_URL}${path}`, options);
}

function getErrorDetail(body) {
  if (!body.trim()) return "";

  try {
    const payload = JSON.parse(body);
    if (typeof payload === "string") return payload;
    if (payload && typeof payload === "object") {
      return payload.message ?? payload.error ?? payload.detail ?? body;
    }
  } catch {
    return body;
  }

  return body;
}

export async function parseApiResponse(response, operation) {
  if (!response.ok) {
    const body = await response.text();
    const detail = getErrorDetail(body);
    const message = `${operation} 요청 실패: HTTP ${response.status}${detail ? ` - ${detail}` : ""}`;
    const error = new Error(message);
    error.status = response.status;
    error.body = body;
    throw error;
  }

  // DELETE의 204 응답은 본문이 없으므로 JSON 파싱을 건너뜁니다.
  if (response.status === 204) return null;
  return response.json();
}
