import {
  FileCode, FileTerminal, Atom, Globe, Server,
  CreditCard, Database, Paintbrush, Zap, Sparkles, Flame, Code2,
} from "lucide-react"

export default function skillIcon(skill: string): React.ReactNode {
  const size = 14;
  const cls = "shrink-0";
  const icons: Record<string, React.ReactNode> = {
    TypeScript:   <FileCode className={cls} size={size} />,
    JavaScript:   <FileCode className={cls} size={size} />,
    Python:       <FileTerminal className={cls} size={size} />,
    React:        <Atom className={cls} size={size} />,
    "Next.js":    <Globe className={cls} size={size} />,
    Express:      <Server className={cls} size={size} />,
    Stripe:       <CreditCard className={cls} size={size} />,
    Neon:         <Database className={cls} size={size} />,
    Tailwind:     <Paintbrush className={cls} size={size} />,
    Vite:         <Zap className={cls} size={size} />,
    "Google GenAI": <Sparkles className={cls} size={size} />,
    Firebase:     <Flame className={cls} size={size} />,
    Firestore:    <Database className={cls} size={size} />,
  };

  return icons[skill] ?? <Code2 className={cls} size={size} />;
}