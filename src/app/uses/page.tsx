import { USES } from "@/lib/uses";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Uses | Emerald Noir",
  description: "A comprehensive list of my hardware, software, and development gear.",
};

export default function UsesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Uses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive list of the hardware, software, and gear I use on a daily basis to design, code, and stay productive.
          </p>
        </div>

        <div className="space-y-16">
          {USES.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-bold text-foreground mb-8 border-b border-border/50 pb-4">
                {section.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div key={item.name} className="bg-surface/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      {item.name}
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
