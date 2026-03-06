type Status = true | false | "partial";
type Row = {
  capability: string;
  apartmentIQ: Status | string;
  otherProviders: Status | string;
  manualSurveys: Status | string;
};
const rows: Row[] = [
  { capability: "Daily automated updates", apartmentIQ: true, otherProviders: true, manualSurveys: false },
  { capability: "Unit-level rent data", apartmentIQ: true, otherProviders: true, manualSurveys: "partial" },
  { capability: "99% concession accuracy", apartmentIQ: true, otherProviders: false, manualSurveys: false },
  { capability: "Occupancy percentages", apartmentIQ: true, otherProviders: false, manualSurveys: "partial" },
  { capability: "5+ years historical data", apartmentIQ: true, otherProviders: false, manualSurveys: false },
  { capability: "Property websites tracked", apartmentIQ: "1.2M+", otherProviders: "~250K", manualSurveys: "5–15" },
  { capability: "No manual effort required", apartmentIQ: true, otherProviders: true, manualSurveys: false },
  { capability: "Large, dedicated success team", apartmentIQ: true, otherProviders: false, manualSurveys: false },
  { capability: "Customizable portfolio report", apartmentIQ: true, otherProviders: false, manualSurveys: false },
  { capability: "Unlimited users on all plans", apartmentIQ: true, otherProviders: false, manualSurveys: true },
];

function StatusPill({ value }: { value: Status | string }) {
  if (value === "partial") {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
        <span className="text-lg font-bold leading-none text-amber-600">~</span>
      </span>
    );
  }
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-slate-700">{value}</span>;
  }
  if (value === true) {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
        <svg viewBox="0 0 20 20" className="h-5 w-5 text-emerald-600" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.704 5.292a1 1 0 010 1.416l-7.25 7.25a1 1 0 01-1.416 0l-3.25-3.25a1 1 0 011.416-1.416l2.542 2.542 6.542-6.542a1 1 0 011.416 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-100">
      <svg viewBox="0 0 20 20" className="h-5 w-5 text-rose-600" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default function FeatureMatrix() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
          {/* Header row */}
          <div className="grid grid-cols-4 items-center border-b border-slate-200 bg-slate-900 px-6 py-4 text-sm font-semibold">
            <div className="text-slate-300">Capability</div>
            <div className="text-center text-emerald-300">ApartmentIQ</div>
            <div className="text-center text-slate-200">Other Providers</div>
            <div className="text-center text-slate-200">Manual Surveys</div>
          </div>
          {/* Rows */}
          <div className="divide-y divide-slate-200">
            {rows.map((r) => (
              <div key={r.capability} className="grid grid-cols-4 items-center px-6 py-5">
                <div className="text-[15px] font-semibold text-slate-800">{r.capability}</div>
                <div className="flex justify-center">
                  <StatusPill value={r.apartmentIQ} />
                </div>
                <div className="flex justify-center">
                  <StatusPill value={r.otherProviders} />
                </div>
                <div className="flex justify-center">
                  <StatusPill value={r.manualSurveys} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Note: "~" indicates partial / inconsistent coverage compared to fully automated collection.
        </p>
      </div>
    </div>
  );
}
