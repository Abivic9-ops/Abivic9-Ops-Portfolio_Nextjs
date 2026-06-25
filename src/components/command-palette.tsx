"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { 
  FileText, 
  Moon, 
  Sun, 
  Laptop, 
  Mail, 
  Calendar,
  Code,
  Briefcase,
  Home,
  User,
  Wrench
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { NAV_LINKS, SITE } from "@/lib/site";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#about"))}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Projects Archive</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/skills"))}>
            <Code className="mr-2 h-4 w-4" />
            <span>Skills Breakdown</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/uses"))}>
            <Wrench className="mr-2 h-4 w-4" />
            <span>Uses (Setup & Gear)</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => runCommand(() => window.open(SITE.calendly, "_blank"))}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Book a call</span>
          </CommandItem>
          <CommandItem onSelect={() => {
            runCommand(() => {
              navigator.clipboard.writeText(SITE.email);
              // In a real app, you might trigger a toast here
            });
          }}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Copy Email Address</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open("/cv.pdf", "_blank"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Download CV</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light Mode</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark Mode</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <Laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </CommandItem>
        </CommandGroup>

      </CommandList>
    </CommandDialog>
  );
}
