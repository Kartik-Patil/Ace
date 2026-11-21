import { Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { achieverGroups, contact } from "@/data/ace";
import { Placeholder } from "./blocks";

const total = achieverGroups.reduce((n, g) => n + g.students.length, 0);

export function SectionTabs() {
  return (
    <section aria-labelledby="more-heading" className="container-ace py-20">
      <h2 id="more-heading" className="text-3xl font-semibold text-primary md:text-4xl">More about ACE</h2>
      <Tabs defaultValue="about" className="mt-8">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-secondary p-1.5">
          {["About", "Results", "Gallery", "Careers", "Contact"].map((t) => (
            <TabsTrigger key={t} value={t.toLowerCase()} className="rounded-xl px-5 py-2.5 font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t}</TabsTrigger>
          ))}
        </TabsList>
        <div className="mt-6">
          <TabsContent value="about">
            <div className="rounded-2xl border bg-card p-8 shadow-card">
              <h3 className="text-2xl font-semibold text-primary">Education, redefined.</h3>
              <p className="mt-3 max-w-3xl text-muted-foreground">ACE is a coaching institute in Lakshmi Nagar, Hubballi, offering programs for Classes VIII, IX & X across ICSE, CBSE and State Board — guided by one idea: <em>from concepts to confidence</em>.</p>
            </div>
          </TabsContent>
          <TabsContent value="results">
            <div className="rounded-2xl border bg-card p-8 shadow-card">
              <h3 className="text-2xl font-semibold text-primary">{total} achievers in {contact.achieversYear}</h3>
              <p className="mt-2 text-muted-foreground">Across NEET / IIT JEE, Class X, Class IX and Class VIII.</p>
              <Link to="/results" hash="achievers" className="mt-4 inline-block font-bold text-sky-border underline">See all achievers →</Link>
            </div>
          </TabsContent>
          <TabsContent value="gallery"><Placeholder title="Gallery">Photos of classrooms and events will appear here once ACE shares them.</Placeholder></TabsContent>
          <TabsContent value="careers"><Placeholder title="Careers at ACE">Teaching openings will be listed here. Until then, call {contact.phoneDisplay} to ask about roles.</Placeholder></TabsContent>
          <TabsContent value="contact">
            <div className="grid gap-4 rounded-2xl border bg-card p-8 shadow-card md:grid-cols-3">
              <div><p className="text-xs font-bold uppercase text-muted-foreground">Phone</p><a className="font-bold text-primary" href={contact.phoneHref}>{contact.phoneDisplay}</a></div>
              <div><p className="text-xs font-bold uppercase text-muted-foreground">Address</p><p className="text-sm text-primary">{contact.addressLines.join(" ")}</p></div>
              <div><p className="text-xs font-bold uppercase text-muted-foreground">Online</p><a className="block text-sm font-semibold text-primary" href={contact.websiteHref} target="_blank" rel="noreferrer">{contact.website}</a><a className="block text-sm font-semibold text-primary" href={contact.instagramHref} target="_blank" rel="noreferrer">@{contact.instagram}</a></div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
