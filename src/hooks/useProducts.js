import { useEffect, useState } from 'react'
import axios from 'axios'
import { getProducts } from '../api/products'

export function useProducts({ page, pageSize, orderBy, keyword }) {
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
          orderBy,
          keyword,
          signal: controller.signal,
        })
        setProducts(data.list)
        setTotalCount(data.totalCount)
        setIsLoading(false)
      } catch (e) {
        if (axios.isCancel(e)) return
        setError(e)
        setIsLoading(false)
      }
    }

    fetchProducts()
    return () => controller.abort()
  }, [page, pageSize, orderBy, keyword])

  return { products, totalCount, isLoading, error }
}
