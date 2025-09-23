interface PlaceholderProps {
  label: string;
}

export function Placeholder({ label }: PlaceholderProps): JSX.Element {
  return (
    <div className="flex min-h-[8rem] items-center justify-center rounded-lg border border-dashed border-muted-foreground/40 bg-muted/40 text-sm text-muted-foreground">
      {label}
    </div>
  );
}
