import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const PortfolioSection = () => {
  return (
    <div className="py-20" id="portfolio">
      <div className="container">
        <SectionHeader
          eyebrow="My Portfolio"
          title="Education"
          description=""
        />
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="md:col-span-1">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-xl">PhD - UT Austin</h3>
                <h3 className="font-serif">Computer Science</h3>
                <h3 className="font-serif">2018-2024</h3>
              </div>
            </Card>
            <Card className="md:col-span-1">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-xl">MS - UT Austin</h3>
                <h3 className="font-serif">Computer Science</h3>
                <h3 className="font-serif">2014-2017</h3>
              </div>
            </Card>
            <Card className="md:col-span-1">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-xl">MTech - IIT KGP</h3>
                <h3 className="font-serif">Electronics Engg.</h3>
                <h3 className="font-serif">2012-2014</h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
