import Image from "next/image";
import Link from "next/link";
import finnMark from "../../public/finn-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-serif text-xl font-semibold tracking-tight text-ink ${className}`}
    >
      <Image
        src={finnMark}
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9"
      />
      Myndivo
    </Link>
  );
}
