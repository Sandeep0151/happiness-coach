import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="pt-16 bg-white">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4 text-[#191970]">Upcoming Book Launches</h1>
        <p className="text-gray-600 mb-10 text-lg">
          Explore our latest releases and reserve your copies before they sell out.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Book Card 1 */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <Image
              src="/images/book1.jpg"
              alt="Book 1"
              width={300}
              height={400}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#191970]">Book 1</h3>
            <p className="text-gray-500 mb-4">Launching: August 2025</p>
            <Link href="/books/mastering-ai-prompts">
              <Button className="bg-[#191970] hover:bg-[#15155c] text-white w-full">
                Pre-Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
