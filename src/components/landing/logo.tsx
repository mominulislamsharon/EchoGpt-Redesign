import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="EchoGPT home"
      className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Image
          src="/echoGpt.svg"
          alt="EchoGPT logo"
          width={20}
          height={20}
          className="h-4 w-4"
        />
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight">
        EchoGPT
      </span>
    </Link>
  );
};

export default Logo;
