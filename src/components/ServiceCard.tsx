type ServiceCardProps = {
  service: {
    title: string;
    description: string;
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col rounded-md border border-line bg-white p-6">
      <h3 className="type-h3 text-ink">{service.title}</h3>
      <p className="type-body mt-3 text-muted">{service.description}</p>
    </article>
  );
}
