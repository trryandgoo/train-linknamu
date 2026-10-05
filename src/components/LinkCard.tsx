"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  // 페이지 이동을 막지 않도록 sendBeacon으로 클릭을 기록합니다.
  function recordClick() {
    const body = new Blob([JSON.stringify({ linkId: id })], {
      type: "application/json",
    });
    navigator.sendBeacon("/api/clicks", body);
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0"
    >
      {title}
    </a>
  );
}
