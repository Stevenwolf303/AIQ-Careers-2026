import StickyHeader from "@/components/StickyHeader";
import PropertyHero from "@/components/PropertyHero";
import NearbyEssentialsMap from "@/components/NearbyEssentialsMap";
import KpiCardsRow from "@/components/KpiCardsRow";
import POITable from "@/components/POITable";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />

      {/* Property hero */}
      <div className="border-b border-gray-100">
        <PropertyHero />
      </div>

      {/* Nearby Essentials */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          Nearby Essentials{" "}
          <span className="text-gray-500 font-normal">(3 mile radius)</span>
        </h2>

        <div className="flex flex-col gap-5">
          <NearbyEssentialsMap />

          <div>
            <p className="text-base font-semibold text-gray-900 mb-3">
              Key Points of Interest
            </p>
            <KpiCardsRow />
          </div>

          <div>
            <p className="text-base font-semibold text-gray-900 mb-3">
              All Points of Interest
            </p>
            <POITable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
