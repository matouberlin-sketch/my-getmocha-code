import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Placeholder } from "../../components/ui/placeholder";
import { PageHeader } from "../../components/layout/PageHeader";

export function ItemDetailPage(): JSX.Element {
  const { itemId } = useParams();
  useDocumentTitle(`KitchenFlow · Item ${itemId ?? ""}`);

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <PageHeader subtitle="Ingredient" title={`Item ${itemId ?? ""}`} />
      <Placeholder label="Where-used tree" />
      <Placeholder label="Supplier matrix" />
    </div>
  );
}
