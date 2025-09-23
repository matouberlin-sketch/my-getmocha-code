import { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

interface PlannerHeaderProps {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}

export function PlannerHeader({ title, subtitle, actions }: PlannerHeaderProps): JSX.Element {
  return <PageHeader actions={actions} subtitle={subtitle} title={title} />;
}
