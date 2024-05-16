import Link from "next/link";

import LogoSvg from '@/public/sidebar/logo.svg';

export default function Logo() {
  return (
    <Link href={"/home"} className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-8 rounded-full py-[2px]">
      <div className="flex justify-center items-center min-w-[52px] min-h-[52px]" style={{ color: "rgb(239, 243, 244)" }}>
        <LogoSvg className="h-8" />
      </div>
    </Link>
  );
}
