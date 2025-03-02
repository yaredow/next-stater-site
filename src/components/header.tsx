import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { headers } from "next/headers";

export const Header = async () => {
  return (
    <header className="border-b px-12 py-4" data-testid="side-header">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Next-starter</h1>
        <div className="flex items-center gap-x-4">
          <Link href="https://github.com/yaredow/nextjs-starter-template">
            <Button variant="ghost" size="icon">
              <Icons.gitHub className="size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
