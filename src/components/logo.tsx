import Image from "next/image";
import Link from "next/link";
import finnMark from "../../public/finn-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.035em] text-ink ${className}`}
    >
      <Image
        src={finnMark}
        alt=""
        width={38}
        height={38}
        priority
        className="h-[38px] w-[38px]"
      />
      Myndivo
    </Link>
  );
}
