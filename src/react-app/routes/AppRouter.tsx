import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { AppLayout } from "../components/layout/AppShell";
import { RouteErrorBoundary } from "../components/layout/RouteErrorBoundary";

const PlannerPage = lazy(() => import("../pages/PlannerPage"));
const BreakdownPage = lazy(() => import("../pages/BreakdownPage"));
const LineCookPage = lazy(() => import("../pages/LineCookPage"));
const OrderListPage = lazy(() => import("../pages/OrderListPage"));
const ItemDetailPage = lazy(() => import("../pages/ItemDetailPage"));
const RecipeDetailPage = lazy(() => import("../pages/RecipeDetailPage"));
const ImportRecipesPage = lazy(() => import("../pages/ImportRecipesPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <PlannerPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "planner", element: <PlannerPage /> },
      { path: "planner/breakdown", element: <BreakdownPage /> },
      { path: "planner/line-cook", element: <LineCookPage /> },
      { path: "planner/orders", element: <OrderListPage /> },
      { path: "items/:itemId", element: <ItemDetailPage /> },
      { path: "recipes/:recipeId", element: <RecipeDetailPage /> },
      { path: "import/recipes", element: <ImportRecipesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export function AppRouter(): JSX.Element {
  return <RouterProvider router={router} />;
}
