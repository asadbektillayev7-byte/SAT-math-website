type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TestPage({ params }: Props) {
  const { locale } = await params;
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl font-semibold">Test Page</h1>
      <p className="font-body text-lg text-ink/60 mt-4">
        Locale: <strong>{locale}</strong>
      </p>
      <p className="font-body text-base text-ink/40 mt-2">
        If you can see this, routing is working correctly.
      </p>
    </div>
  );
}
