"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" className="size-9">
        <Sun className="size-4 text-muted-foreground" />
      </Button>
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="size-9 rounded-lg hover:bg-muted"
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-all hover:rotate-45" />
      ) : (
        <Moon className="size-4 text-slate-700 transition-all hover:-rotate-12" />
      )}
    </Button>
  );
}
