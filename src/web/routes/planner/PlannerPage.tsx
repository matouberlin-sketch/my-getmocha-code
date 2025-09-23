import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PlannerHeader } from "../../components/layout/PlannerHeader";
import { Placeholder } from "../../components/ui/placeholder";

export function PlannerPage(): JSX.Element {
  useDocumentTitle("KitchenFlow · Planner");

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <PlannerHeader subtitle="Weekly planning" title="Planner" />
      <Placeholder label="Planner grid" />
      <Placeholder label="Planner tabs" />
    </div>
  );
}
