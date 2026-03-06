const stats = [
  { label: "Asking Price", value: "$2,450,000", sub: "↑ 4.2% vs last year" },
  { label: "Price / SF", value: "$342", sub: "7,165 SF total" },
  { label: "Cap Rate", value: "6.8%", sub: "Stabilized" },
  { label: "NOI", value: "$166,600", sub: "Annual" },
  { label: "Occupancy", value: "94%", sub: "12 of 13 units" },
];

const badges = ["Mixed-Use", "Value-Add", "Opportunity Zone"];

const PropertyOverview = () => {
  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs font-medium bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-bold text-foreground leading-tight">
              438 Meridian Boulevard
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              San Francisco, CA 94103 &nbsp;·&nbsp; SoMa District &nbsp;·&nbsp; APN 3715-042-008
            </p>
          </div>

          <div className="flex gap-2 shrink-0">
            <button className="text-sm border border-border text-foreground px-4 py-2 rounded font-medium hover:bg-accent/40 transition-colors">
              Save
            </button>
            <button className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded font-medium hover:bg-primary/90 transition-colors">
              Contact Broker
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden mb-7 h-56">
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Primary Photo</span>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
            >
              <span className="text-slate-400 text-xs">Photo {i + 1}</span>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {stats.map(({ label, value, sub }) => (
            <div key={label} className="bg-surface px-5 py-4">
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="text-xl font-bold text-foreground leading-tight">{value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
