interface Model {
  name: string;
  tagline: string;
  color: string;
}

const MODELS: Model[] = [
  { name: "ChatGPT", tagline: "General purpose & reasoning", color: "bg-emerald-500" },
  { name: "Claude", tagline: "Long context & writing", color: "bg-orange-500" },
  { name: "Gemini", tagline: "Multimodal & fast", color: "bg-blue-500" },
  { name: "Grok", tagline: "Real-time & conversational", color: "bg-zinc-500" },
  { name: "DeepSeek", tagline: "Deep analysis at low cost", color: "bg-indigo-500" },
  { name: "Qwen", tagline: "Coding & structured output", color: "bg-purple-500" },
];

export default MODELS;