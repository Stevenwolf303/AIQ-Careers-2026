type Category = {
  icon: string;
  label: string;
  count: number;
  highlight: string;
  score: number;
  color: string;
  bg: string;
};

const categories: Category[] = [
  {
    icon: "🚇",
    label: "Transit",
    count: 8,
    highlight: "Montgomery BART · 0.3 mi",
    score: 95,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "🛒",
    label: "Grocery",
    count: 5,
    highlight: "Whole Foods · 0.5 mi",
    score: 88,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: "🍽️",
    label: "Dining",
    count: 23,
    highlight: "Ferry Building · 0.6 mi",
    score: 97,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: "🏫",
    label: "Schools",
    count: 4,
    highlight: "City College SF · 0.9 mi",
    score: 72,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: "🌳",
    label: "Parks",
    count: 3,
    highlight: "Yerba Buena Gardens · 0.4 mi",
    score: 80,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: "🏥",
    label: "Healthcare",
    count: 6,
    highlight: "UCSF Mission Bay · 0.7 mi",
    score: 84,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const ScoreBar = ({ score, color }: { score: number; color: string }) => (
  <div className="w-full bg-border rounded-full h-1.5 mt-2">
    <div
      className={`h-1.5 rounded-full ${color.replace("text-", "bg-")}`}
      style={{ width: `${score}%` }}
    />
  </div>
);

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="bg-surface border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
        >
          <div className={`w-9 h-9 ${cat.bg} rounded-lg flex items-center justify-center text-lg mb-3`}>
            {cat.icon}
          </div>
          <p className="text-xs text-muted-foreground mb-0.5">{cat.label}</p>
          <p className="text-2xl font-bold text-foreground leading-tight">{cat.count}</p>
          <p className="text-xs text-muted-foreground mt-1 leading-tight line-clamp-2">
            {cat.highlight}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className={`text-xs font-semibold ${cat.color}`}>{cat.score}</span>
            <span className="text-xs text-muted-foreground">/ 100</span>
          </div>
          <ScoreBar score={cat.score} color={cat.color} />
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
