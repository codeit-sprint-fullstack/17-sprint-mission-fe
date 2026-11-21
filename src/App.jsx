import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout.jsx";
import HomePage from './pages/HomePage';
import PandaMarket from "./pages/PandaMarket.jsx";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Layout(Header + Footer) 안에서 Outlet 자리에 렌더링 되는 페이지들을 그룹화 */}
        <Route path="/" element={<Layout/>}>
          {/* Layout에 구성될 자식 라우트 자리 */}
          {/* index: 상위 패스("/")에서 Root 페이지를 의미 */}
          <Route index element={<HomePage/>}/>
          <Route path="/items" element={<PandaMarket/>}/>
          {/* 자식의 path는 "/" 없이 상대경로로 작성 */}
          {/* <Route path="/about" element={<AboutPage/>}/> */}
          {/* 단일 param 예제 */}
          {/* <Route path="users/:userId" element={<UserPage/>}/> */}
          {/* 다중 param 예제 */}
          {/* <Route path="products/:category/:productId" element={<ProductPage/>}/> */}

          {/* 마이페이지 실습용 */}
          {/* <Route path="login" element={<LoginPage/>}/>
          <Route path="logout" element={<LogoutPage/>}/>
          <Route path="mypage" element={<MyPage/>}/> */}

          {/* Posts, 블로그 실습용 라우터 -> 순서에 따라 라우팅됨 */}
          {/* posts/new -> posts/:postId */}
          {/* <Route path="posts" element={<PostListPage/>}/>
          <Route path="posts/new" element={<PostCreatePage/>}/>
          <Route path="posts/:postId" element={<PostDetailPage/>}/>
          <Route path="posts/:postId/edit" element={<PostEditPage/>}/>
          <Route path="posts/:postId/delete" element={<PostDeletePage/>}/> */}
        </Route>

        {/* 상위 Layout을 사용하지 않는 라우트 -> Header/ */}
        {/* <Route path="/notices" element={<NoticeLayout/>}>
          <Route path=":noticeId" element={<NoticePage/>}/>
        </Route> */}

        {/* 상위 라우팅 패턴 외의 모든 패턴은 NotFound처리 */}
        {/* <Route path="*" element={<NotFoundPage/>}/> */}

      </Routes>
    </BrowserRouter>
      
    </>
  );
}
