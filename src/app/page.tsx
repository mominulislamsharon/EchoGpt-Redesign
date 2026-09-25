import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";

const SECTIONS = ["features", "models", "pricing", "faq"] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="features" className="scroll-mt-16">
          <Hero />
        </section>

        {SECTIONS.map((id) => (
          <section
            key={id}
            id={id}
            className="flex min-h-[60vh] scroll-mt-16 items-center justify-center border-t border-border"
          >
            <h2 className="font-heading text-3xl font-semibold capitalize">
              {id} (placeholder)
            </h2>
          </section>
        ))}
      </main>
    </>
  );
}
