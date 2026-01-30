export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Support for thermal safety programs, from instrument commissioning to
          long-term calibration and training.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Installation & Commissioning",
            body: "On-site setup, verification, and baseline performance checks.",
          },
          {
            title: "Calibration & Maintenance",
            body: "Scheduled calibration and preventative maintenance plans.",
          },
          {
            title: "Application Support",
            body: "Guidance on test protocols for battery safety and process risk.",
          },
          {
            title: "Training",
            body: "Operator training focused on safe, repeatable workflows.",
          },
        ].map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-slate-200 p-5"
          >
            <h2 className="text-base font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{service.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

