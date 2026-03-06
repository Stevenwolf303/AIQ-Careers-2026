export const propertyData = {
  breadcrumb: ["Chicago-Naperville-Elgin, IL-IN-WI", "Lincoln Park/Lakeview"],
  name: "The Crescent Residences at Kingsbury Park",
  addressLine: "The Crescent Residences at 4718 North Kingsbury Crescent, Chicago IL 60625",
  websiteUrl: "#",
  pills: [
    { label: "Year Built/Reno", value: "2007/2018" },
    { label: "Total Units", value: "150" },
    { label: "Property Class", value: "A" },
  ],
  details: [
    { label: "Management Company", value: "BlueRock Property Management", badge: null },
    { label: "Registered Owner", value: "Urban Nest Realty", badge: "LLC" },
    { label: "True Owner", value: "Goldman Sachs", badge: "Institutional" },
    { label: "Owned Since", value: "June 12, 2008", badge: null },
    { label: "Sale Price", value: "$54,000,000", badge: null },
  ],
  buildingSpecs: [
    [
      { label: "Property Type", value: "Conventional" },
      { label: "Building Type", value: "High-Rise" },
      { label: "Stories", value: "2" },
      { label: "# Buildings", value: "2" },
      { label: "Avg Unit Size", value: "548 ft²" },
    ],
    [
      { label: "GBA", value: "235,000 ft²" },
      { label: "Land Area", value: "342,000 ft²" },
      { label: "Units / Acre", value: "21" },
      { label: "Walk/Transit", value: "21/69" },
      { label: "Parcel", value: "4 parcels found", link: true },
    ],
  ],
};

export const kpiCards = [
  { label: "Grocery", count: 6, dotColor: "#3b82f6" },
  { label: "Hospitals", count: 4, dotColor: "#ef4444" },
  { label: "Schools", count: 4, dotColor: "#22c55e" },
  { label: "EV Chargers", count: 8, dotColor: "#f97316" },
  { label: "Transit Stops", count: 12, dotColor: "#06b6d4" },
];

export const legendCategories = [
  { key: "grocery", label: "Grocery", count: 6, color: "#3b82f6" },
  { key: "food", label: "Food", count: 4, color: "#f97316" },
  { key: "health", label: "Health", count: 3, color: "#ef4444" },
  { key: "education", label: "Education", count: 8, color: "#eab308" },
  { key: "parks", label: "Parks", count: 12, color: "#22c55e" },
  { key: "transit", label: "Transit", count: 9, color: "#8b5cf6" },
  { key: "publicServices", label: "Public Services", count: 10, color: "#14b8a6" },
  { key: "lifestyle", label: "Lifestyle", count: 11, color: "#ec4899" },
  { key: "community", label: "Community", count: 5, color: "#6b7280" },
];

export type MapMarker = {
  id: number;
  /** percentage of container width, 0–100 */
  x: number;
  /** percentage of container height, 0–100 */
  y: number;
  category: string;
  name: string;
  distanceMi: number;
  driveMin: number;
  isOpen: boolean;
  closesAt?: string;
  opensAt?: string;
};

// Center of map is at (60%, 47.5%). Circle radius ≈ 18% of width.
export const mapMarkers: MapMarker[] = [
  // Grocery (blue)
  { id: 1, x: 53, y: 42, category: "grocery", name: "City Fresh Grocers", distanceMi: 0.25, driveMin: 4, isOpen: true, closesAt: "10pm" },
  { id: 2, x: 67, y: 46, category: "grocery", name: "Harvest Haven", distanceMi: 0.37, driveMin: 6, isOpen: true, closesAt: "9pm" },
  { id: 3, x: 55, y: 57, category: "grocery", name: "Urban Market", distanceMi: 0.5, driveMin: 8, isOpen: false, opensAt: "8am" },
  { id: 4, x: 71, y: 53, category: "grocery", name: "Green Grocer", distanceMi: 0.6, driveMin: 9, isOpen: true, closesAt: "8pm" },
  { id: 5, x: 46, y: 50, category: "grocery", name: "Fresh & Local", distanceMi: 0.7, driveMin: 11, isOpen: true, closesAt: "11pm" },
  { id: 6, x: 75, y: 42, category: "grocery", name: "Metro Foods", distanceMi: 0.9, driveMin: 13, isOpen: true, closesAt: "10pm" },

  // Food (orange)
  { id: 7, x: 62, y: 43, category: "food", name: "The Daily Grind", distanceMi: 0.3, driveMin: 5, isOpen: true, closesAt: "9pm" },
  { id: 8, x: 57, y: 50, category: "food", name: "Lakeside Bistro", distanceMi: 0.45, driveMin: 7, isOpen: true, closesAt: "10pm" },
  { id: 9, x: 48, y: 56, category: "food", name: "Corner Cafe", distanceMi: 0.55, driveMin: 8, isOpen: false, opensAt: "7am" },
  { id: 10, x: 70, y: 50, category: "food", name: "Brick Oven Pizza", distanceMi: 0.7, driveMin: 10, isOpen: true, closesAt: "11pm" },

  // Health (red)
  { id: 11, x: 50, y: 46, category: "health", name: "Pinnacle Care Hospital", distanceMi: 0.25, driveMin: 4, isOpen: true, closesAt: "24/7" },
  { id: 12, x: 64, y: 55, category: "health", name: "Summit View Hospital", distanceMi: 0.37, driveMin: 6, isOpen: true, closesAt: "24/7" },
  { id: 13, x: 43, y: 53, category: "health", name: "Harmony Health Center", distanceMi: 0.5, driveMin: 8, isOpen: true, closesAt: "8pm" },

  // Education (yellow/gold)
  { id: 14, x: 68, y: 38, category: "education", name: "Riverbend High School", distanceMi: 0.25, driveMin: 4, isOpen: true, closesAt: "4pm" },
  { id: 15, x: 45, y: 40, category: "education", name: "Cedar Hill Institute", distanceMi: 0.37, driveMin: 6, isOpen: true, closesAt: "3pm" },
  { id: 16, x: 74, y: 47, category: "education", name: "Maple Grove Academy", distanceMi: 0.5, driveMin: 8, isOpen: true, closesAt: "5pm" },
  { id: 17, x: 56, y: 58, category: "education", name: "Lincoln Park HS", distanceMi: 0.6, driveMin: 9, isOpen: false, opensAt: "7:30am" },
  { id: 18, x: 42, y: 44, category: "education", name: "Lakeview Library", distanceMi: 0.7, driveMin: 10, isOpen: true, closesAt: "9pm" },
  { id: 19, x: 69, y: 55, category: "education", name: "Chicago Language School", distanceMi: 0.8, driveMin: 12, isOpen: true, closesAt: "6pm" },
  { id: 20, x: 52, y: 38, category: "education", name: "North Park University", distanceMi: 0.9, driveMin: 13, isOpen: true, closesAt: "5pm" },
  { id: 21, x: 77, y: 44, category: "education", name: "Senn High School", distanceMi: 1.0, driveMin: 14, isOpen: false, opensAt: "7:30am" },

  // Parks (green)
  { id: 22, x: 58, y: 62, category: "parks", name: "Kingsbury Park", distanceMi: 0.2, driveMin: 3, isOpen: true, closesAt: "9pm" },
  { id: 23, x: 63, y: 40, category: "parks", name: "Lincoln Park", distanceMi: 0.4, driveMin: 6, isOpen: true, closesAt: "11pm" },
  { id: 24, x: 44, y: 58, category: "parks", name: "Welles Park", distanceMi: 0.6, driveMin: 9, isOpen: true, closesAt: "11pm" },
  { id: 25, x: 72, y: 58, category: "parks", name: "River Park", distanceMi: 0.7, driveMin: 10, isOpen: true, closesAt: "11pm" },
  { id: 26, x: 50, y: 35, category: "parks", name: "Portage Park", distanceMi: 0.8, driveMin: 11, isOpen: true, closesAt: "9pm" },
  { id: 27, x: 65, y: 62, category: "parks", name: "Oz Park", distanceMi: 0.9, driveMin: 13, isOpen: true, closesAt: "11pm" },

  // Transit (purple)
  { id: 28, x: 60, y: 48, category: "transit", name: "Western Ave CTA", distanceMi: 0.3, driveMin: 5, isOpen: true, closesAt: "1am" },
  { id: 29, x: 66, y: 52, category: "transit", name: "Irving Park CTA", distanceMi: 0.4, driveMin: 6, isOpen: true, closesAt: "1am" },
  { id: 30, x: 48, y: 44, category: "transit", name: "Montrose CTA", distanceMi: 0.5, driveMin: 8, isOpen: true, closesAt: "1am" },
  { id: 31, x: 56, y: 40, category: "transit", name: "Wilson CTA", distanceMi: 0.7, driveMin: 10, isOpen: true, closesAt: "1am" },
  { id: 32, x: 73, y: 40, category: "transit", name: "Addison CTA", distanceMi: 0.9, driveMin: 13, isOpen: true, closesAt: "1am" },

  // Public Services (teal)
  { id: 33, x: 47, y: 51, category: "publicServices", name: "39th District Police", distanceMi: 0.4, driveMin: 6, isOpen: true, closesAt: "24/7" },
  { id: 34, x: 69, y: 45, category: "publicServices", name: "Post Office", distanceMi: 0.5, driveMin: 7, isOpen: true, closesAt: "6pm" },
  { id: 35, x: 54, y: 54, category: "publicServices", name: "Fire Station 14", distanceMi: 0.6, driveMin: 9, isOpen: true, closesAt: "24/7" },
  { id: 36, x: 76, y: 50, category: "publicServices", name: "Chicago Public Library", distanceMi: 0.8, driveMin: 11, isOpen: true, closesAt: "8pm" },

  // Lifestyle (pink)
  { id: 37, x: 61, y: 56, category: "lifestyle", name: "Evolve Yoga Studio", distanceMi: 0.3, driveMin: 5, isOpen: true, closesAt: "9pm" },
  { id: 38, x: 54, y: 46, category: "lifestyle", name: "Gold's Gym", distanceMi: 0.4, driveMin: 6, isOpen: true, closesAt: "10pm" },
  { id: 39, x: 46, y: 47, category: "lifestyle", name: "Spire Coffee", distanceMi: 0.5, driveMin: 7, isOpen: true, closesAt: "7pm" },

  // Community (gray)
  { id: 40, x: 43, y: 60, category: "community", name: "Northside Community Center", distanceMi: 0.6, driveMin: 9, isOpen: true, closesAt: "9pm" },
  { id: 41, x: 72, y: 43, category: "community", name: "Grace Lutheran Church", distanceMi: 0.7, driveMin: 10, isOpen: false, opensAt: "9am" },
];

export const categoryColorMap: Record<string, string> = {
  grocery: "#3b82f6",
  food: "#f97316",
  health: "#ef4444",
  education: "#eab308",
  parks: "#22c55e",
  transit: "#8b5cf6",
  publicServices: "#14b8a6",
  lifestyle: "#ec4899",
  community: "#6b7280",
};

export type POIItem = {
  name: string;
  distanceMi: number;
  driveMin: number;
  lastSeen?: string;
  details?: string;
};

export type POICategory = {
  key: string;
  label: string;
  count: number;
  items: POIItem[];
};

export const poiCategories: POICategory[] = [
  {
    key: "grocery",
    label: "Grocery",
    count: 6,
    items: [
      { name: "City Fresh Grocers", distanceMi: 0.25, driveMin: 4, lastSeen: "2 days ago", details: "24/7" },
      { name: "Harvest Haven", distanceMi: 0.37, driveMin: 6, lastSeen: "1 week ago" },
      { name: "Urban Market", distanceMi: 0.5, driveMin: 8, lastSeen: "3 days ago" },
      { name: "Green Grocer", distanceMi: 0.6, driveMin: 9, lastSeen: "Today", details: "Organic" },
      { name: "Fresh & Local", distanceMi: 0.7, driveMin: 11, lastSeen: "5 days ago", details: "Local" },
      { name: "Metro Foods", distanceMi: 0.9, driveMin: 13, lastSeen: "2 weeks ago" },
    ],
  },
  {
    key: "hospitals",
    label: "Hospitals",
    count: 4,
    items: [
      { name: "Pinnacle Care Hospital", distanceMi: 0.25, driveMin: 4, lastSeen: "Today", details: "ER" },
      { name: "Summit View Hospital", distanceMi: 0.37, driveMin: 6, lastSeen: "3 days ago" },
      { name: "Harmony Health Center", distanceMi: 0.5, driveMin: 8, lastSeen: "1 week ago" },
      { name: "Riverside Medical", distanceMi: 0.8, driveMin: 12, lastSeen: "4 days ago", details: "ER" },
    ],
  },
  {
    key: "schools",
    label: "Schools",
    count: 4,
    items: [
      { name: "Riverbend High School", distanceMi: 0.25, driveMin: 4, lastSeen: "Yesterday" },
      { name: "Cedar Hill Institute", distanceMi: 0.37, driveMin: 6, lastSeen: "1 week ago" },
      { name: "Maple Grove Academy", distanceMi: 0.5, driveMin: 8, lastSeen: "3 days ago" },
      { name: "Lincoln Park HS", distanceMi: 0.6, driveMin: 9, lastSeen: "5 days ago" },
    ],
  },
  {
    key: "evChargers",
    label: "EV Chargers",
    count: 8,
    items: [
      { name: "Tesla Supercharger – Irving Park", distanceMi: 0.2, driveMin: 3, lastSeen: "Today", details: "Tesla" },
      { name: "ChargePoint Station", distanceMi: 0.35, driveMin: 5, lastSeen: "2 days ago", details: "Level 2" },
      { name: "EVgo Fast Charger", distanceMi: 0.55, driveMin: 8, lastSeen: "Yesterday", details: "DC Fast" },
      { name: "Blink Charging – Roscoe", distanceMi: 0.7, driveMin: 10, lastSeen: "1 week ago" },
      { name: "Rivian Adventure Network", distanceMi: 0.8, driveMin: 11, lastSeen: "3 days ago" },
      { name: "Shell Recharge", distanceMi: 0.9, driveMin: 13, lastSeen: "4 days ago" },
      { name: "BP Pulse", distanceMi: 1.1, driveMin: 15, lastSeen: "2 weeks ago" },
      { name: "Electrify America", distanceMi: 1.3, driveMin: 18, lastSeen: "5 days ago", details: "DC Fast" },
    ],
  },
  {
    key: "transitStops",
    label: "Transit Stops",
    count: 12,
    items: [
      { name: "Western Ave CTA (Blue Line)", distanceMi: 0.3, driveMin: 5, lastSeen: "Today" },
      { name: "Irving Park CTA (Blue Line)", distanceMi: 0.4, driveMin: 6, lastSeen: "Yesterday" },
      { name: "Montrose CTA (Blue Line)", distanceMi: 0.5, driveMin: 8, lastSeen: "2 days ago" },
      { name: "Wilson CTA (Red/Purple Line)", distanceMi: 0.7, driveMin: 10, lastSeen: "Today" },
      { name: "Addison CTA (Red Line)", distanceMi: 0.8, driveMin: 11, lastSeen: "3 days ago" },
      { name: "Ravenswood CTA (Brown Line)", distanceMi: 0.9, driveMin: 13, lastSeen: "1 week ago" },
      { name: "Irving Park Metra Station", distanceMi: 1.0, driveMin: 14, lastSeen: "4 days ago" },
      { name: "Kimball CTA (Brown Line)", distanceMi: 1.1, driveMin: 15, lastSeen: "2 days ago" },
      { name: "Damen CTA (Blue Line)", distanceMi: 1.2, driveMin: 17, lastSeen: "Yesterday" },
      { name: "North & Clybourn CTA", distanceMi: 1.3, driveMin: 18, lastSeen: "5 days ago" },
      { name: "Fullerton CTA (Brown/Red/Purple)", distanceMi: 1.5, driveMin: 20, lastSeen: "1 week ago" },
      { name: "Logan Square CTA (Blue Line)", distanceMi: 1.7, driveMin: 22, lastSeen: "3 days ago" },
    ],
  },
];
