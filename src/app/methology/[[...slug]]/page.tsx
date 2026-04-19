import { permanentRedirect } from "next/navigation";

type TypoMethodologyRedirectPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function TypoMethodologyRedirectPage({
  params,
}: TypoMethodologyRedirectPageProps) {
  const { slug } = await params;
  const destination = slug && slug.length > 0 ? `/methodology/${slug.join("/")}` : "/methodology";

  permanentRedirect(destination);
}
