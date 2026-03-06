const TopNav = () => {
  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1L1 6v9h4v-5h6v5h4V6L8 1z" />
            </svg>
          </div>
          <span className="text-base font-semibold text-foreground">PropertyIQ</span>
        </div>

        {/* Center tabs */}
        <div className="hidden md:flex items-center gap-1">
          {["Overview", "Financials", "Location", "Documents"].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                i === 2
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Share
          </button>
          <button className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded font-medium hover:bg-primary/90 transition-colors">
            Request Tour
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
