import { Suspense, useState, useTransition } from "react";
import IndexPage from "./Pages/IndexPage.js";
import Page1 from "./Pages/Page1/Page1.js";
import Page2 from "./Pages/Page2/Page2.js";
import Page3 from "./Pages/Page3/Page3.js";
import Page4 from "./Pages/Page4/Page4.js";
import Layout from "./Layout.js";
import LoadSpinner from "./Components/UI/LoadingSpinner/LoadingSpinner.js";
import "./App.css";

export default function App() {
  return (
    <Suspense fallback={<LoadSpinner />}>
      <Router />
    </Suspense>
  );
}

function Router() {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === "/") {
    content = <IndexPage navigate={navigate} />;
  } else if (page === "/1") {
    content = <Page1 navigate={navigate} />;
  } else if (page === "/2") {
    content = <Page2 navigate={navigate} />;
  } else if (page === "/3") {
    content = <Page3 navigate={navigate} />;
  } else if (page === "/4") {
    content = <Page4 navigate={navigate} />;
  }
  return <Layout isPending={isPending}>{content}</Layout>;
}

<Suspense fallback={<LoadSpinner />}>
  <Router />
</Suspense>;
