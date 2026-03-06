import { kpiCards } from "../data/mockData";

type Score = "Poor" | "Good" | "Great";

const getScore = (count: number): Score => {
  if (count <= 3) return "Poor";
  if (count <= 6) return "Good";
  return "Great";
};

const scoreStyles: Record<Score, { pill: string; dot: string }> = {
  Poor: {
    pill: "bg-red-50 text-red-600 border border-red-100",
    dot: "bg-red-400",
  },
  Good: {
    pill: "bg-amber-50 text-amber-600 border border-amber-100",
    dot: "bg-amber-400",
  },
  Great: {
    pill: "bg-green-50 text-green-600 border border-green-100",
    dot: "bg-green-500",
  },
};

const KpiCardsRow = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {kpiCards.map((card) => {
        const score = getScore(card.count);
        const styles = scoreStyles[score];
        return (
          <div
            key={card.label}
            className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex flex-col gap-2"
          >
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: card.dotColor }}
              />
              <span className="text-sm text-gray-600">{card.label}</span>
            </div>

            <div className="text-3xl font-bold text-gray-900">{card.count}</div>

            {/* Score badge */}
            <div className="mt-auto pt-1">
              <span
                className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${styles.pill}`}
              >
                {score}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KpiCardsRow;
