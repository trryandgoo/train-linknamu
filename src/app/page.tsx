import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-16 pb-16 sm:pt-24">
      <Profile name={profile.name} bio={profile.bio} image={profile.image} />
      <LinkList links={profile.links} />
    </main>
  );
}
