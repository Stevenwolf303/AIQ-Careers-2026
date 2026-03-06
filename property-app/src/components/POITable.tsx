import { useState } from "react";
import { poiCategories, type POIItem } from "../data/mockData";

const DetailBadge = ({ text }: { text: string }) => (
  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded whitespace-nowrap">
    {text}
  </span>
);

const CategorySection = ({
  label,
  count,
  items,
}: {
  label: string;
  count: number;
  items: POIItem[];
}) => {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 3);
  const hasMore = items.length > 3;

  return (
    <>
      {/* Category header row */}
      <tr className="bg-gray-50">
        <td colSpan={5} className="px-4 py-2.5 text-sm font-semibold text-gray-800">
          {label} ({count})
        </td>
      </tr>

      {/* Items */}
      {visibleItems.map((item) => (
        <tr key={item.name} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
          <td className="px-4 text-sm text-gray-800" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            {item.name}
          </td>
          <td
            className="text-sm text-gray-600 text-right"
            style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "12px", paddingRight: "12px", minWidth: "90px" }}
          >
            {item.distanceMi.toFixed(2)} mi
          </td>
          <td
            className="text-sm text-gray-600 text-right"
            style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "12px", paddingRight: "12px", minWidth: "130px" }}
          >
            {item.driveMin} min
          </td>
          <td
            className="text-sm text-gray-500 text-right"
            style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "12px", paddingRight: "12px", minWidth: "110px" }}
          >
            {item.lastSeen ?? "—"}
          </td>
          <td
            className="text-sm text-right"
            style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "12px", paddingRight: "16px", minWidth: "110px" }}
          >
            {item.details && <DetailBadge text={item.details} />}
          </td>
        </tr>
      ))}

      {/* View All row – with divider above */}
      {hasMore && (
        <tr className="border-t border-gray-200">
          <td colSpan={5} style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "16px" }}>
            <button
              onClick={() => setExpanded((e) => !e)}
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 no-underline"
            >
              {expanded ? (
                <>
                  Show Less {label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              ) : (
                <>
                  View All {label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

const POITable = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div style={{ maxHeight: "440px", overflowY: "auto" }}>
        <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 z-10 bg-white shadow-[0_1px_0_#e5e7eb]">
            <tr>
              <th className="px-4 py-2.5 text-left text-sm font-semibold text-gray-500 ">
                Name
              </th>
              <th
                className="py-2.5 text-right text-sm font-semibold text-gray-500 "
                style={{ paddingLeft: "12px", paddingRight: "12px", minWidth: "90px" }}
              >
                Distance
              </th>
              <th
                className="py-2.5 text-right text-sm font-semibold text-gray-500 "
                style={{ paddingLeft: "12px", paddingRight: "12px", minWidth: "150px" }}
              >
                Estimated Drive Time
              </th>
              <th
                className="py-2.5 text-right text-sm font-semibold text-gray-500 "
                style={{ paddingLeft: "12px", paddingRight: "12px", minWidth: "110px" }}
              >
                Last Seen
              </th>
              <th
                className="py-2.5 text-right text-sm font-semibold text-gray-500 "
                style={{ paddingLeft: "12px", paddingRight: "16px", minWidth: "110px" }}
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {poiCategories.map((cat) => (
              <CategorySection
                key={cat.key}
                label={cat.label}
                count={cat.count}
                items={cat.items}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default POITable;
