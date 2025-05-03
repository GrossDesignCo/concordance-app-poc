import "./layout.css";
import { NavLinks } from "@/components/NavLinks";

export default function StaticPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-shell">
      <div className="links">
        <NavLinks
          links={[
            {
              href: "/",
              label: "< Back",
            },
          ]}
        />
      </div>

      <div className="markdown-text">{children}</div>
    </div>
  );
}
