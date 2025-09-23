import { PageHeader } from "../../components/layout/PageHeader";
import { Placeholder } from "../../components/ui/placeholder";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function DashboardPage(): JSX.Element {
  useDocumentTitle("KitchenFlow · Dashboard");

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <PageHeader subtitle="Overview" title="Dashboard" />
      <Placeholder label="Incomplete entities" />
      <Placeholder label="Planner status" />
    </div>
  );
}
