import { useState } from "react";
import { mapMarkers, legendCategories, categoryColorMap, type MapMarker } from "../data/mockData";

// SVG map background – Chicago Lincoln Park / Roscoe Village style
const MapBackground = () => (
  <svg
    viewBox="0 0 900 400"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Land */}
    <rect width="900" height="400" fill="#f2ede3" />

    {/* Park areas */}
    <polygon points="0,130 80,125 160,138 160,330 80,330 0,320" fill="#c8dfad" opacity="0.75" />
    <rect x="82" y="135" width="75" height="160" fill="#c8dfad" opacity="0.6" rx="2" />
    <rect x="435" y="88" width="65" height="52" fill="#d5e8b5" opacity="0.8" rx="3" />
    <rect x="760" y="270" width="55" height="50" fill="#d5e8b5" opacity="0.7" rx="2" />

    {/* Highway I-294 – north-south left side */}
    <rect x="188" y="0" width="9" height="400" fill="#f5d56a" />
    <rect x="189" y="0" width="7" height="400" fill="#f0c84a" />

    {/* Major horizontal streets */}
    {[50, 100, 150, 200, 250, 300, 350].map((y) => (
      <line key={`mh-${y}`} x1="0" y1={y} x2="900" y2={y} stroke="#cdc6bc" strokeWidth={y === 200 ? 2.5 : 1.8} />
    ))}

    {/* Major vertical streets */}
    {[100, 200, 300, 400, 500, 600, 700, 800].map((x) => (
      <line key={`mv-${x}`} x1={x} y1="0" x2={x} y2="400" stroke="#cdc6bc" strokeWidth="1.8" />
    ))}

    {/* Minor horizontal streets */}
    {[25, 75, 125, 175, 225, 275, 325, 375].map((y) => (
      <line key={`sh-${y}`} x1="0" y1={y} x2="900" y2={y} stroke="#ddd8cf" strokeWidth="1" />
    ))}

    {/* Minor vertical streets */}
    {[50, 150, 250, 350, 450, 550, 650, 750, 850].map((x) => (
      <line key={`sv-${x}`} x1={x} y1="0" x2={x} y2="400" stroke="#ddd8cf" strokeWidth="1" />
    ))}

    {/* Block fills to give it depth */}
    <rect x="102" y="52" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="202" y="52" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="302" y="52" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="502" y="52" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="602" y="52" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="702" y="52" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="102" y="152" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="302" y="152" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="502" y="152" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="602" y="152" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="702" y="152" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="102" y="252" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="202" y="252" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="402" y="252" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="602" y="252" width="95" height="44" fill="#eae4d8" rx="1" />
    <rect x="702" y="252" width="95" height="44" fill="#eae4d8" rx="1" />

    {/* I-294 badge */}
    <rect x="182" y="193" width="20" height="13" fill="#1a3a7a" rx="2" />
    <text x="192" y="203" fontSize="7" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">294</text>

    {/* Route 19 ring */}
    <circle cx="852" cy="200" r="10" fill="white" stroke="#888" strokeWidth="1.5" />
    <text x="852" y="204" fontSize="7.5" fill="#555" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">19</text>

    {/* Neighborhood labels */}
    <text x="42" y="74" fontSize="9" fill="#b5ada2" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.4">NORRIDGE</text>
    <text x="650" y="48" fontSize="9" fill="#b5ada2" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.4">ALBANY PARK</text>
    <text x="762" y="178" fontSize="8.5" fill="#b5ada2" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.3">LINCOLN</text>
    <text x="762" y="191" fontSize="8.5" fill="#b5ada2" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.3">SQUARE</text>
    <text x="44" y="368" fontSize="9" fill="#b5ada2" fontFamily="sans-serif" fontWeight="500">Franklin Park</text>
    <text x="96" y="228" fontSize="8" fill="#7ea866" fontFamily="sans-serif" fontStyle="italic">Schiller</text>
    <text x="96" y="240" fontSize="8" fill="#7ea866" fontFamily="sans-serif" fontStyle="italic">Woods</text>
    <text x="216" y="358" fontSize="9" fill="#b5ada2" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.4">DUNNING</text>
    <text x="490" y="248" fontSize="9" fill="#b5ada2" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">PORT PARK</text>
    <text x="808" y="362" fontSize="8" fill="#b5ada2" fontFamily="sans-serif">Wrigley Field</text>
  </svg>
);

// Hover card
const HoverCard = ({ marker, x, y }: { marker: MapMarker; x: number; y: number }) => {
  const catLabel = legendCategories.find((c) => c.key === marker.category)?.label ?? marker.category;
  const color = categoryColorMap[marker.category] ?? "#6b7280";

  // Status string
  let statusEl: React.ReactNode;
  if (marker.isOpen) {
    statusEl = (
      <span className="text-xs text-gray-500">
        <span className="text-green-600 font-medium">Open</span>
        {marker.closesAt === "24/7" ? " · Open 24/7" : ` · Closes at ${marker.closesAt}`}
      </span>
    );
  } else {
    statusEl = (
      <span className="text-xs text-gray-500">
        <span className="text-red-500 font-medium">Closed</span>
        {marker.opensAt ? ` · Opens at ${marker.opensAt}` : ""}
      </span>
    );
  }

  return (
    <div
      className="absolute pointer-events-none z-40"
      style={{
        left: `calc(${x}% + 8px)`,
        top: `calc(${y}% - 80px)`,
        transform: "translateY(-50%)",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3" style={{ width: "max-content", maxWidth: "240px" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-gray-900 text-sm whitespace-nowrap">{marker.name}</span>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: color + "11", color: color }}
          >
            {catLabel}
          </span>
        </div>
        <div className="text-xs text-gray-500 mb-0.5">
          {marker.distanceMi} mi · {marker.driveMin} min
        </div>
        {statusEl}
      </div>
    </div>
  );
};

const NearbyEssentialsMap = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // All categories enabled by default
  const [enabledCategories, setEnabledCategories] = useState<Record<string, boolean>>(
    () => Object.fromEntries(legendCategories.map((c) => [c.key, true]))
  );

  const toggleCategory = (key: string) =>
    setEnabledCategories((prev) => ({ ...prev, [key]: !prev[key] }));

  const visibleMarkers = mapMarkers.filter((m) => enabledCategories[m.category]);
  const hoveredMarker = visibleMarkers.find((m) => m.id === hoveredId) ?? null;

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden border border-gray-200"
      style={{ height: "420px" }}
    >
      {/* Static map background */}
      <MapBackground />

      {/* Dashed radius circle – SVG overlay, pointer-events none */}
      <svg
        viewBox="0 0 900 400"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        style={{ zIndex: 5 }}
      >
        {/* Circle center at 60%, 47.5% → SVG (540, 190) */}
        <circle
          cx="540"
          cy="190"
          r="164"
          fill="rgba(99,102,241,0.04)"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeDasharray="7 4"
        />
        {/* Center pin */}
        <circle cx="540" cy="190" r="12" fill="white" opacity="0.9" />
        <circle cx="540" cy="190" r="9" fill="#4f46e5" />
        <circle cx="540" cy="190" r="4" fill="white" />
      </svg>

      {/* POI dots – filtered by enabled categories */}
      {visibleMarkers.map((m) => {
        const color = categoryColorMap[m.category] ?? "#6b7280";
        const isHovered = hoveredId === m.id;
        return (
          <button
            key={m.id}
            onMouseEnter={() => setHoveredId(m.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="absolute rounded-full border-2 border-white shadow cursor-pointer transition-all"
            style={{
              left: `${m.x}%`,
              top: `${m.y}%`,
              width: isHovered ? "14px" : "10px",
              height: isHovered ? "14px" : "10px",
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
              zIndex: isHovered ? 35 : 10,
            }}
            aria-label={m.name}
          />
        );
      })}

      {/* Hover card */}
      {hoveredMarker && (
        <HoverCard
          marker={hoveredMarker}
          x={hoveredMarker.x}
          y={hoveredMarker.y}
        />
      )}

      {/* Legend panel – floating left, vertically centered, hugs content */}
      <div
        className="absolute left-3 bg-white rounded-lg shadow-md border border-gray-200 p-3"
        style={{ top: "50%", transform: "translateY(-50%)", zIndex: 20, minWidth: "165px" }}
      >
        <div className="text-xs font-semibold text-gray-700 mb-2">Points of Interest</div>
        <div className="flex flex-col gap-1">
          {legendCategories.map((cat) => {
            const enabled = enabledCategories[cat.key];
            return (
              <button
                key={cat.key}
                onClick={() => toggleCategory(cat.key)}
                className="flex items-center justify-between gap-3 w-full text-left rounded hover:bg-gray-50 px-0.5 py-0.5 transition-colors"
                aria-pressed={enabled}
              >
                <div className="flex items-center gap-1.5">
                  {/* Checkbox */}
                  <div
                    className="w-3.5 h-3.5 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      backgroundColor: enabled ? cat.color : "transparent",
                      border: enabled ? "none" : `1.5px solid ${cat.color}`,
                    }}
                  >
                    {enabled && (
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-xs transition-colors ${enabled ? "text-gray-700" : "text-gray-400"}`}>
                    {cat.label}
                  </span>
                </div>
                <span className={`text-xs font-medium transition-colors ${enabled ? "text-gray-600" : "text-gray-300"}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Zoom controls – top right */}
      <div
        className="absolute top-3 right-3 flex flex-col bg-white border border-gray-200 rounded shadow-sm overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-lg leading-none border-b border-gray-200">
          +
        </button>
        <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-lg leading-none">
          −
        </button>
      </div>
    </div>
  );
};

export default NearbyEssentialsMap;
