import { draftMode } from "next/headers";
import Link from "next/link";

export default function Home() {
  const { isEnabled } = draftMode();

  return (
    <main>
      <p>Draft mode: {String(isEnabled)}</p>
      <Link href="/api/draft">Enable draft mode</Link>
    </main>
  );
}
