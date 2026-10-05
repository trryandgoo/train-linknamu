import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-16 pb-16 sm:pt-24">
      <Profile name={profile.name} bio={profile.bio} image={profile.image} />
      <ul className="mt-12 flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
