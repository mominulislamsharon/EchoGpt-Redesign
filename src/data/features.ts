import {
  History,
  Image as ImageIcon,
  Layers,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: "Side by side compare",
    description:
      "Ask one question and see how up to 3 models answer it, at the same time.",
  },
  {
    icon: History,
    title: "All chats, one place",
    description:
      "Every conversation with every model is saved and searchable in one history.",
  },
  {
    icon: Zap,
    title: "Quick actions",
    description:
      "Summarize a page, explain a selection, or rewrite text in one click.",
  },
  {
    icon: ImageIcon,
    title: "Image & video studio",
    description: "Generate images and short videos without leaving your chat.",
  },
];
