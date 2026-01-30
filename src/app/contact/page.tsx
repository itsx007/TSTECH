export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Reach out for quotations, testing workflows, or technical discussions.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border border-slate-200 p-5 text-sm text-slate-600">
          <p className="text-base font-semibold text-slate-900">TSTech</p>
          <p>Foshan Thermal Safety Technology Development Co., Ltd.</p>
          <p>Industrial instrumentation and thermal safety solutions.</p>
        </div>
        <form className="space-y-4 rounded-lg border border-slate-200 p-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              type="email"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="min-h-[120px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <button
            type="button"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

