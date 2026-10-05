"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
  count?: number;
  onClick?: () => void;
};

export default function LinkCard({ id, title, url, count = 0, onClick }: LinkCardProps) {
  // 페이지 이동을 막지 않도록 sendBeacon으로 클릭을 기록합니다.
  function recordClick() {
    const body = new Blob([JSON.stringify({ linkId: id })], {
      type: "application/json",
    });
    navigator.sendBeacon("/api/clicks", body);
    onClick?.();
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="group relative flex w-full items-center justify-center rounded-2xl border border-white/80 bg-white/60 px-24 py-4 text-[15px] font-semibold text-stone-800 shadow-[0_1px_2px_rgba(120,70,30,0.06),0_8px_24px_-16px_rgba(120,70,30,0.35)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_2px_4px_rgba(120,70,30,0.06),0_14px_30px_-14px_rgba(200,100,40,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:translate-y-0 active:scale-[0.99]"
    >
      {title}
      <span className="absolute right-5 flex items-center gap-2">
        <span
          aria-label={`클릭 ${count}회`}
          className="text-xs font-medium tabular-nums text-stone-400"
        >
          {count.toLocaleString("ko-KR")}회
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-stone-400 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-500"
        >
          <path d="M5 11 11 5M6 5h5v5" />
        </svg>
      </span>
    </a>
  );
}
