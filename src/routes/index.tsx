import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/admissions" });
  },
  head: () => ({
    meta: [
      { title: "ACE – Education Redefined | Hubballi" },
      { name: "description", content: "ACE coaching for Classes VIII, IX & X in Hubballi. Admissions open for 2027–28." },
      { property: "og:title", content: "ACE – Education Redefined" },
      { property: "og:description", content: "From Concepts to Confidence. Programs for Classes VIII–X in Hubballi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
