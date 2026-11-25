export class HttpError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

export function handleError(error, _request, response, next) {
  if (response.headersSent) return next(error)

  if (error instanceof HttpError) {
    return response.status(error.status).json({ message: error.message })
  }
  if (error.name === 'ValidationError') {
    const message = Object.values(error.errors).map((field) => field.message).join(' ')
    return response.status(400).json({ message })
  }
  if (error.type === 'entity.parse.failed') {
    return response.status(400).json({ message: 'JSON 요청 본문을 확인해 주세요.' })
  }
  if (error.status === 400) {
    return response.status(400).json({ message: '요청 형식을 확인해 주세요.' })
  }
  if (error.status === 413) {
    return response.status(413).json({ message: '요청 본문이 너무 큽니다.' })
  }
  if (error.status === 415) {
    return response.status(415).json({ message: '지원하지 않는 요청 인코딩입니다.' })
  }

  console.error('API 요청 처리 실패', error.name)
  return response.status(500).json({ message: '서버에서 요청을 처리하지 못했습니다.' })
}
