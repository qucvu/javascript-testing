import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import LazyLoad from "Components/LazyLoad";
import Loading from "Components/Loading";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("Pages/Hompage/Homepage"));
const DetailPage = lazy(() => import("Pages/DetailPage/DetailPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LazyLoad loading={true} message={"Loading..."} />}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="details/:id" element={<DetailPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
