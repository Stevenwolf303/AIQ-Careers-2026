type CategoryKey = "transit" | "grocery" | "dining" | "school" | "park";

const categories: { key: CategoryKey; label: string; color: string }[] = [
  { key: "transit", label: "Transit", color: "#3b82f6" },
  { key: "grocery", label: "Grocery", color: "#22c55e" },
  { key: "dining", label: "Dining", color: "#f59e0b" },
  { key: "school", label: "School", color: "#8b5cf6" },
  { key: "park", label: "Park", color: "#10b981" },
];

const pins: { id: number; x: number; y: number; category: CategoryKey; name: string }[] = [
  { id: 1, x: 50, y: 50, category: "transit", name: "Subject Property" },
  { id: 2, x: 30, y: 35, category: "transit", name: "Montgomery St BART" },
  { id: 3, x: 65, y: 28, category: "transit", name: "Civic Center BART" },
  { id: 4, x: 42, y: 68, category: "grocery", name: "Whole Foods" },
  { id: 5, x: 72, y: 55, category: "grocery", name: "Safeway SoMa" },
  { id: 6, x: 25, y: 60, category: "dining", name: "The Embarcadero" },
  { id: 7, x: 58, y: 72, category: "dining", name: "Bix Restaurant" },
  { id: 8, x: 80, y: 38, category: "school", name: "City College SF" },
  { id: 9, x: 35, y: 80, category: "park", name: "Yerba Buena Gardens" },
  { id: 10, x: 62, y: 42, category: "transit", name: "4th & King Caltrain" },
];

const colorMap: Record<CategoryKey, string> = {
  transit: "#3b82f6",
  grocery: "#22c55e",
  dining: "#f59e0b",
  school: "#8b5cf6",
  park: "#10b981",
};

const PropertyMap = () => {
  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden">
      {/* Map area */}
      <div className="relative bg-gradient-to-br from-slate-100 to-blue-50 h-72">
        {/* Grid lines to simulate map tiles */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Streets */}
          {[15, 30, 45, 60, 75].map((y) => (
            <line key={`h${y}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#d1d5db" strokeWidth="1" />
          ))}
          {[20, 35, 50, 65, 80].map((x) => (
            <line key={`v${x}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%" stroke="#d1d5db" strokeWidth="1" />
          ))}
          {/* Major roads */}
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#9ca3af" strokeWidth="2.5" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#9ca3af" strokeWidth="2.5" />
          {/* Blocks */}
          <rect x="20%" y="15%" width="15%" height="15%" fill="#e2e8f0" rx="1" />
          <rect x="50%" y="15%" width="13%" height="18%" fill="#e2e8f0" rx="1" />
          <rect x="35%" y="35%" width="12%" height="12%" fill="#dbeafe" rx="1" />
          <rect x="65%" y="55%" width="14%" height="17%" fill="#e2e8f0" rx="1" />
          <rect x="20%" y="60%" width="12%" height="18%" fill="#dcfce7" rx="1" />
        </svg>

        {/* Radius circle */}
        <div
          className="absolute border-2 border-primary/30 rounded-full bg-primary/5"
          style={{
            left: "50%",
            top: "50%",
            width: "70%",
            aspectRatio: "1",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Pins */}
        {pins.map((pin) => (
          <div
            key={pin.id}
            className="absolute group"
            style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -50%)" }}
          >
            {pin.id === 1 ? (
              /* Subject property */
              <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            ) : (
              <div
                className="w-3.5 h-3.5 rounded-full border-2 border-white shadow cursor-pointer hover:scale-125 transition-transform"
                style={{ backgroundColor: colorMap[pin.category] }}
              />
            )}
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-foreground text-surface text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {pin.name}
            </div>
          </div>
        ))}

        {/* Scale bar */}
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 bg-white/80 backdrop-blur px-2.5 py-1.5 rounded text-xs text-muted-foreground">
          <div className="w-10 border-t-2 border-foreground" />
          <span>0.5 mi</span>
        </div>
      </div>

      {/* Legend */}
      <div className="px-5 py-3 border-t border-border flex flex-wrap gap-x-5 gap-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-foreground mr-2">
          <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow" />
          Subject Property
        </div>
        {categories.map(({ key, label, color }) => (
          <div key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="w-3 h-3 rounded-full border border-white/60" style={{ backgroundColor: color }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyMap;
