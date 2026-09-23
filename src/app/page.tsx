import Navbar from "@/components/landing/navbar";

const SECTIONS = ["features", "models", "pricing", "faq"] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {SECTIONS.map((id) => (
          <section
            key={id}
            id={id}
            className="flex min-h-[80vh] scroll-mt-16 items-center justify-center border-b border-border"
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
