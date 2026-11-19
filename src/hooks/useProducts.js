import { useEffect, useState } from 'react'
import axios from 'axios'
import { getProducts } from '../api/products'

export function useProducts({ page, pageSize, keyword }) {
  const [products, setProducts] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchProducts() {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getProducts({
          page,
          pageSize,
          keyword,
          signal: controller.signal,
        })
        setProducts(data.list)
        setTotalCount(data.totalCount)
      } catch (e) {
        if (axios.isCancel(e)) return
        setError(e)
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    fetchProducts()
    return () => controller.abort()
  }, [page, pageSize, keyword])

  return { products, totalCount, isLoading, error }
}
