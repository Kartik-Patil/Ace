import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Connect With Us | ACE – Education Redefined, Hubballi" },
      { name: "description", content: "Get in touch with ACE coaching institute, Hubballi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-ace py-20 text-center text-muted-foreground">
      {/* Contact page content coming soon */}
    </div>
  );
}

