import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: any;
  alt: string;
  /** Fill the nearest positioned parent (mirrors the former framework image behaviour). */
  fill?: boolean;
  /** Load eagerly with high priority (above-the-fold images). */
  priority?: boolean;
  sizes?: string;
};

export function Image({ fill, priority, className, style, src, ...rest }: ImageProps) {
  const imgSrc = typeof src === "object" && src !== null ? src.src : src;
  return (
    <img
      src={imgSrc}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
      style={style}
      {...rest}
    />
  );
}
