import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/loginPage";
import { useLoading } from "./library/useloading";
import { fetchLogin } from "./library/apiMethods";
import { LoadingComponent } from "./components/loadingComponent";
import { ErrorComponent } from "./components/errorComponent";
import { GalleryPage } from "./pages/GalleryPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AccountDetailPage } from "./pages/AccountDetailPage";
import { PageComponent } from "./components/pageComponent";
import { OnboardingPage } from "./pages/OnboardingPage";
import { PaymentPlanPage } from "./pages/PaymentPlanPage";

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
          <Route
            path={"/register"}
            element={<PageComponent userData={data} page={<RegisterPage />} />}
          />
          <Route
            path={"/accountDetail"}
            element={
              <PageComponent userData={data} page={<AccountDetailPage />} />
            }
          />
          <Route
            path={"/payments"}
            element={
              <PageComponent userData={data} page={<PaymentPlanPage />} />
            }
          />
          <Route
            path={"/matches"}
            element={<PageComponent userData={data} page={<GalleryPage />} />}
          />
          <Route
            path={"/login/*"}
            element={<LoginPage config={data?.config} reload={reload} />}
          />
          <Route
            path={"/onboarding/*"}
            element={
              <PageComponent
                userData={data}
                backgroundColor={"#121212"}
                page={<OnboardingPage />}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
