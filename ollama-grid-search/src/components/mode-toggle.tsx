// import { Moon, Sun } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="transparentDark"
      size="icon"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme == "dark" ? (
        <SunIcon className="h-5 w-5 text-cyan-50" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  );
}
