import Logo from "@/components/logo";
import Link from "next/link";

import HomeSvg from "@/public/sidebar/home.svg";
import ExploreSvg from "@/public/sidebar/explore.svg";
import NotificationsSvg from "@/public/sidebar/notifications.svg";
import MessagesSvg from "@/public/sidebar/messages.svg";
import GrokSvg from "@/public/sidebar/grok.svg";
import ListsSvg from "@/public/sidebar/lists.svg";
import BookmarksSvg from "@/public/sidebar/bookmarks.svg";
import CommunitiesSvg from "@/public/sidebar/communities.svg";
import PremiumSvg from "@/public/sidebar/premium.svg";
import ProfileSvg from "@/public/sidebar/profile.svg";
import MoreSvg from "@/public/sidebar/more.svg";

const NAV_ITEMS = [
  {
    title: "Home",
    icon: HomeSvg,
    href: "/home",
  },
  {
    title: "Explore",
    icon: ExploreSvg,
    href: "/explore",
  },
  {
    title: "Notifications",
    icon: NotificationsSvg,
    href: "/notifications",
  },
  {
    title: "Messages",
    icon: MessagesSvg,
    href: "/messages",
  },
  {
    title: "Grok",
    icon: GrokSvg,
    href: "/grok",
  },
  {
    title: "Lists",
    icon: ListsSvg,
    href: "/lists",
  },
  {
    title: "Bookmarks",
    icon: BookmarksSvg,
    href: "/bookmarks",
  },
  {
    title: "Communities",
    icon: CommunitiesSvg,
    href: "/communities",
  },
  {
    title: "Premium",
    icon: PremiumSvg,
    href: "/premium",
  },
  {
    title: "Profile",
    icon: ProfileSvg,
    href: "/profile",
  },
  {
    title: "More",
    icon: MoreSvg,
    href: "/more",
  },
];

export default function Home() {
  return (
    <main className="flex w-full h-full justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-full mt-4">
            <Logo />
            {NAV_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-8 rounded-3xl"
                key={item.href}
                href={item.href}
              >
                <div className="flex justify-center items-center p-[12px]">
                  <div style={{ color: "rgba(231,233,234,1.00)" }}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="hidden md:inline text-[20px] ml-[20px] mr-[16px]">
                    {item.title}
                  </div>
                </div>
              </Link>
            ))}
            <button className="rounded-full m-4 bg-slate-800 p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
              Post
            </button>
          </div>
          <button className="">bottom</button>
        </section>
      </div>
    </main>
  );
}
