import { IconArrowAutofitRight, IconHome } from "@tabler/icons-react";
import Page from "./components/template/Page";
import Title from "./components/template/Title";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="flex h-full flex-col">
        <Title Icon={IconHome} main="Home" secundary="Initial Page" />
        <div className="flex items-center justify-center flex-1  ">
          <div className="flex items-center gap-5 p-4 rounded border">
            <div>
              <h2 className="text-xl pb-2 font-bold">Users</h2>
              <p className="w-[250px] min-h-[50px]">
                Go to the user list page.
              </p>
            </div>

            <Link
              className="bg-zinc-200 transition duration-200 hover:bg-zinc-300 p-2 rounded"
              href="/users"
            >
              <IconArrowAutofitRight />
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
}
