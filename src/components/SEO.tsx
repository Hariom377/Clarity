import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
};

export default function SEO({
  title,
  description,
  canonical,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }

      tag.content = content;
    };

    setMeta("description", description);

    let link = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }

    link.href = canonical;
  }, [title, description, canonical]);

  return null;
}
