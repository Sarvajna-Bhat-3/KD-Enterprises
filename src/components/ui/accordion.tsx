"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  activeItem?: string;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single";
  collapsible?: boolean;
  defaultValue?: string;
}

export const Accordion = ({
  children,
  className,
  defaultValue,
  collapsible = true,
  ...props
}: AccordionProps) => {
  const [activeItem, setActiveItem] = React.useState<string | undefined>(defaultValue);

  const toggleItem = (val: string) => {
    setActiveItem((prev) => (prev === val ? (collapsible ? undefined : prev) : val));
  };

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem }}>
      <div className={cn("space-y-3", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const ItemContext = React.createContext<{ value: string; isOpen: boolean }>({
  value: "",
  isOpen: false,
});

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const ctx = React.useContext(AccordionContext);
    const isOpen = ctx?.activeItem === value;

    return (
      <ItemContext.Provider value={{ value, isOpen }}>
        <div
          ref={ref}
          data-state={isOpen ? "open" : "closed"}
          className={cn("border-b", className)}
          {...props}
        >
          {children}
        </div>
      </ItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const itemCtx = React.useContext(ItemContext);
  const accCtx = React.useContext(AccordionContext);

  return (
    <button
      ref={ref}
      type="button"
      data-state={itemCtx.isOpen ? "open" : "closed"}
      onClick={() => accCtx?.toggleItem(itemCtx.value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200" />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const itemCtx = React.useContext(ItemContext);

  if (!itemCtx.isOpen) return null;

  return (
    <div
      ref={ref}
      data-state={itemCtx.isOpen ? "open" : "closed"}
      className={cn("overflow-hidden text-sm animate-in fade-in-50 duration-200", className)}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";
