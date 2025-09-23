import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PageHeader } from "../../components/layout/PageHeader";
import { Placeholder } from "../../components/ui/placeholder";

export function RecipeDetailPage(): JSX.Element {
  const { recipeId } = useParams();
  useDocumentTitle(`KitchenFlow · Recipe ${recipeId ?? ""}`);

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <PageHeader subtitle="Recipe" title={`Recipe ${recipeId ?? ""}`} />
      <Placeholder label="Supplier options" />
      <Placeholder label="Nutrition & allergens" />
    </div>
  );
}
