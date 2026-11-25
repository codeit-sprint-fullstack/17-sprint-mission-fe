
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
// Outlet – layout 구성
// - Outlet은 중첩된 라우트(Nested Routes)를 렌더링하기 위한 컴포넌트
// - 부모 라우트가 렌더링되는 동안, 자식 라우트를 특정 위치에 렌더링할 수 있도록 돕는다.

// - 이를 통해 사용자는 Global 레이아웃(Layout)을 구성하여 활용할 수 있다.
export default function Layout(){
  return (
  <>
    <Header/>
    <main className='container'>
      <section id="home">
          {/* Outlet: 외부에서 주입될 자식 컴포넌트 */}
          <Outlet/>
        </section>
    </main>
    <Footer/>
  </>
  );
}
