const navTabs = [
  "Overview",
  "Performance",
  "Pricing & Availability",
  "Forecasts",
  "Rent Roll",
  "Rent Comps",
  "New Supply",
  "Demographics",
  "Financials",
  "Taxes",
  "Deed",
  "Mortgage",
  "Transactions",
];

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Row 1: Back + Logo */}
      <div className="relative flex items-center justify-center h-11 px-6">
        <button className="absolute left-6 flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
            <path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to search
        </button>

        {/* Center: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-indigo-700 rounded flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="7" width="5" height="8" fill="white" rx="0.5" />
              <rect x="9" y="4" width="5" height="11" fill="white" rx="0.5" />
              <rect x="5" y="10" width="4" height="5" fill="white" rx="0" />
              <path d="M1 8L8 2L15 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <span className="text-[15px] font-semibold text-gray-900 tracking-tight">ApartmentIQ</span>
        </div>
      </div>

      {/* Row 2: Nav Tabs */}
      <div className="border-t border-gray-100 overflow-x-auto scrollbar-none">
        <div className="flex min-w-max px-4">
          {navTabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                i === 0
                  ? "border-indigo-600 text-indigo-600 font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
