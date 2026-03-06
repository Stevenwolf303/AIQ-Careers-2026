import { propertyData } from "../data/mockData";

const PropertyHero = () => {
  const { breadcrumb, name, addressLine, websiteUrl, pills, details, buildingSpecs } = propertyData;

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <div className="flex gap-8">
        {/* Left: Property image */}
        <div className="w-[42%] flex-shrink-0">
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{ height: "480px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=960&q=80"
              alt="The Crescent Residences at Kingsbury Park"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Property info */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
            <span>{breadcrumb[0]}</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700 font-medium">{breadcrumb[1]}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{name}</h1>

          {/* Address */}
          <p className="text-sm text-gray-600 mb-1">{addressLine}</p>

          {/* View Website */}
          <a
            href={websiteUrl}
            className="text-sm text-indigo-600 hover:text-indigo-700 hover:underline inline-block mb-5"
          >
            View Website
          </a>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {pills.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-sm"
              >
                <span className="text-gray-500 text-xs">{pill.label}</span>
                <span className="font-semibold text-gray-900">{pill.value}</span>
              </div>
            ))}
          </div>

          {/* Key-value details */}
          <div className="border-t border-gray-100">
            {details.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between py-2.5 text-sm ${
                  i < details.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-gray-500">{item.label}</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-900">{item.value}</span>
                  {item.badge && (
                    <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Building Specs */}
          <div className="mt-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Building Specs</h2>
            <div className="flex flex-col gap-5">
              {buildingSpecs.map((row, ri) => (
                <div key={ri} className="grid grid-cols-5 gap-3">
                  {row.map((spec) => (
                    <div key={spec.label}>
                      <div className="text-xs text-gray-500 mb-0.5">{spec.label}</div>
                      <div className={`text-sm font-medium ${"link" in spec && spec.link ? "text-indigo-600 cursor-pointer hover:underline" : "text-gray-900"}`}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
