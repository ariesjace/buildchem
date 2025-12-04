"use client";

import { useState, createContext, useContext } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextProps {
  openItem: string | null;
  setOpenItem: (id: string) => void;
  type?: "single" | "multiple";
  openItems: string[];
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

export function Accordion({
  children,
  type = "single",
  defaultValue,
}: {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}) {
  const [openItem, setOpenItem] = useState<string | null>(
    typeof defaultValue === "string" ? defaultValue : null
  );

  const [openItems, setOpenItems] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : []
  );

  const toggleItem = (id: string) => {
    if (type === "single") {
      setOpenItem(openItem === id ? null : id);
    } else {
      if (openItems.includes(id)) {
        setOpenItems(openItems.filter((i) => i !== id));
      } else {
        setOpenItems([...openItems, id]);
      }
    }
  };

  return (
    <AccordionContext.Provider
      value={{ openItem, setOpenItem, type, openItems, toggleItem }}
    >
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("border-b", className)}>{children}</div>;
}

export function AccordionTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionTrigger must be inside Accordion");

  const isOpen =
    ctx.type === "single"
      ? ctx.openItem === value
      : ctx.openItems.includes(value);

  return (
    <button
      onClick={() => ctx.toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionContent must be inside Accordion");

  const isOpen =
    ctx.type === "single"
      ? ctx.openItem === value
      : ctx.openItems.includes(value);

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        className
      )}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
}
