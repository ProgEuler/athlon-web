import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

/** iPhone-style bezel around a screenshot. Size it via a className width. */
export function PhoneFrame({
  src,
  alt = "App screenshot",
  className,
  priority,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[1170/2532] w-56 shrink-0 rounded-[2.4rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl",
        className,
      )}
    >
      <div className="relative size-full overflow-hidden rounded-[1.9rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 60vw, 280px"
          className="object-cover"
          priority={priority}
          unoptimized={src.endsWith(".svg")}
        />
      </div>
      <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-900" />
    </div>
  );
}
