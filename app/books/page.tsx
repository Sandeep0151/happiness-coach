import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="bg-white">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4 text-[#191970]">Gratimystic</h1>
        <p className="text-gray-600 mb-10 text-lg">
          Tap into the power of extraordinary happiness!
        </p>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto text-left items-center">
          {/* Left: Book Card */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <Image
              src="https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68935f2c5b9f87401891814f.png"
              alt="Book 1"
              width={300}
              height={400}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#191970]">Gratimystic</h3>
            <p className="text-gray-500 mb-4">Coming soon</p>
            <Link href="/books/mastering-ai-prompts">
              <Button className="bg-[#191970] hover:bg-[#15155c] text-white w-full">
                Pre-Order Now
              </Button>
            </Link>
          </div>

          {/* Right: Book Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#191970] mb-4">About the Book</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
