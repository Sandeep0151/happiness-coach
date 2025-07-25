import { Button } from "@/components/ui/button";
import Link from "next/link";

const workshops = [
  {
    title: "Dream it.",
    date: "10.21",
    time: "7:00-8:00PM",
    description:
      "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",
    rsvpLink: "/rsvp/dream",
  },
  {
    title: "Build it.",
    date: "10.22",
    time: "7:00-8:00PM",
    description:
      "It all begins with action. Learn to turn your ideas into tangible results through guided, hands-on workshops.",
    rsvpLink: "/rsvp/build",
  },
  
];

export default function WorkShopPage() {
  return (
    <main className="pt-16 bg-white">
      <section className="py-16 px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#191970] mb-12">
          Upcoming Workshops & Events
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {workshops.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#191970] text-white rounded-xl p-8 flex flex-col justify-between shadow-md"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-sm mb-2 font-medium">
                  {event.date} &nbsp; {event.time}
                </p>
                <p className="text-sm text-gray-200">{event.description}</p>
              </div>
              <div className="mt-8">
                <Link href={event.rsvpLink}>
                  <Button className="bg-[#6c7cd9] hover:bg-[#8490e4] text-white rounded-full px-6 py-2 font-semibold">
                    RSVP
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
