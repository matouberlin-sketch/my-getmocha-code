import { PageHeader } from "../../components/layout/PageHeader";
import { Placeholder } from "../../components/ui/placeholder";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function ImportRecipesPage(): JSX.Element {
  useDocumentTitle("KitchenFlow · Import Recipes");

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <PageHeader subtitle="Data" title="Import recipes" />
      <Placeholder label="Upload wizard" />
      <Placeholder label="Dry-run results" />
    </div>
  );
}
