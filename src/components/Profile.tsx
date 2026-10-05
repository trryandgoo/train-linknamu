import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_8px_30px_-12px_rgba(180,100,50,0.45)] ring-1 ring-orange-900/5">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          loading="eager"
          className="size-28 rounded-full object-cover"
        />
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-stone-900">
        {name}
      </h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
        {bio}
      </p>
    </header>
  );
}
