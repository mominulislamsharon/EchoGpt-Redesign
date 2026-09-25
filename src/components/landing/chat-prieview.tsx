import { div } from "framer-motion/client";

const MESSAGES = [
  { role: "user" as const, text: "Explain quantum computing in one line." },
  {
    role: "assistant" as const,
    model: "ChatGPT",
    text: "It uses qubits to process many possibilities at once, instead of one at a time.",
  },
  {
    role: "assistant" as const,
    model: "Claude",
    text: "Quantum computers use superposition to explore multiple solutions simultaneously.",
  },
];

const ChatPreview = () => {
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-primary/10 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-yellow-400" />
        <span className="size-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-muted-foreground" />
        echogpt.live/compare
      </div>
      <div className="flex flex-col gap-3">
        {MESSAGES.map((m, i) =>
          m.role === "user" ? (
            <div
              key={1}
              className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground"
            >
              {m.text}
            </div>
          ) : (
            <div
              key={i}
              className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-muted px-4 py-2.5 text-sm"
            >
              <p className="mb-1 text-xs font-semibold text-primary">
                {m.model}
              </p>
              <p className="text-foreground">{m.text}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ChatPreview;
