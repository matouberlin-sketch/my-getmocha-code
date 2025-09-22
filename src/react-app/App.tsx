import { Suspense } from "react";

import { AppRouter } from "./routes/AppRouter";
import { FullscreenLoader } from "./components/layout/FullscreenLoader";

function App(): JSX.Element {
  return (
    <Suspense fallback={<FullscreenLoader />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
