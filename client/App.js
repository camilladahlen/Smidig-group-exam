import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { BubblePage } from "./pages/BubblePage";
import Footer from "./components/Footer";
import { LoginPage } from "./pages/loginPage";
import { useLoading } from "./library/useloading";
import { fetchLogin } from "./library/apiMethods";
import { LoadingComponent } from "./components/loadingComponent";
import { ErrorComponent } from "./components/errorComponent";
import { Tutorial } from "./pages/Tutorial";


export function App() {
  const { data, error, loading, reload } = useLoading(fetchLogin);

  if (loading) {
    return <LoadingComponent message={"Fetching user data, please wait..."} />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path={"/"} element={<Tutorial />} />
          <Route path={"/personalise"} element={<BubblePage />} />

          <Route
            path={"/login/*"}
            element={<LoginPage config={data?.config} reload={reload} />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
