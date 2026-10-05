export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// 보여 주기용 더미 값입니다. 실제 내용은 여기서 바꾸면 됩니다.
export const profile: ProfileData = {
  name: "나나토끼",
  bio: "나는 나나야 | 요즘에는 AI 개발에 관심이 많아요",
  image: "https://placehold.co/224x224/orange/white.png",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
