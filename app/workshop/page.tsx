import { Button } from "@/components/ui/button";
import Link from "next/link";

const workshop = {
  title: "Dream it.",
  date: "10.21",
  time: "7:00-8:00PM",
  description:
    "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",
  rsvpLink: "/rsvp/dream",
};

export default function WorkShopPage() {
  return (
    <main className="bg-white">
      <section className="py-16 px-4 md:px-8 text-center">
        

        {/* 2-column layout for card + content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center text-left">
          {/* Left: Workshop Card */}
          <div className="bg-[#191970] text-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
            <p className="text-sm mb-2 font-medium">
              {workshop.date} &nbsp; {workshop.time}
            </p>
            <p className="text-sm text-gray-200">{workshop.description}</p>
            <div className="mt-8">
              <Link href={workshop.rsvpLink}>
                <Button className="bg-[#6c7cd9] hover:bg-[#8490e4] text-white rounded-full px-6 py-2 font-semibold w-full">
                  RSVP
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Description Content */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-semibold text-[#191970] mb-4">
              Awaken your Energy Within
            </h2>
            <p className="mb-4">
              Join Andrew Dietz for an intimate live workshop designed for
              high-achieving individuals ready to reconnect with themselves and
              redefine what a fulfilled life really looks like.
            </p>
            <h4 className="text-lg font-semibold text-[#191970] mb-2">
              What's in it for you?
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Unstoppable energy</li>
              <li>Broadened horizons of fulfillment</li>
              <li>Fierce Success</li>
              <li>Awakened sense of self in relationships</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
