import { cn } from "@/lib/utils";

/**
 * Pembatas lebar konten. 84rem = 1344px, di dalam rentang 1200–1400px
 * yang diminta PRD 8.4.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[84rem] px-6 sm:px-8 lg:px-12", className)}
    >
      {children}
    </div>
  );
}
