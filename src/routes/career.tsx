import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career | ACE – Education Redefined, Hubballi" },
      { name: "description", content: "Career opportunities at ACE coaching institute, Hubballi." },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <div className="container-ace py-20 text-center text-muted-foreground">
      {/* Career page content coming soon */}
    </div>
  );
}

