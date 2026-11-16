import BestProducts from '../components/BestProducts'
import AllProducts from '../components/AllProducts'
import './MarketPage.css'

function MarketPage() {
  return (
    <div className="market-page">
      <BestProducts />
      <AllProducts />
    </div>
  )
}

export default MarketPage
