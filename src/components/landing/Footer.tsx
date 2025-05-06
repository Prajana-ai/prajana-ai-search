import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="#" // Replace with actual link if needed
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Your Name/Company
          </a>
          .
        </p>
         <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
           © {new Date().getFullYear()} Prajana AI. All rights reserved.
         </p>
      </div>
    </footer>
  );
}
