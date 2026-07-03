import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
};

export default function SEO({
  title,
  description,
  canonical,
  image = "https://irrego.online/og-image.jpg",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (
      selector: string,
      attribute: "name" | "property",
      content: string
    ) => {
      let tag = document.head.querySelector(
        `meta[${attribute}="${selector}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, selector);
        document.head.appendChild(tag);
      }

      tag.content = content;
    };

    setMeta("description", "name", description);

    setMeta("og:title", "property", title);
    setMeta("og:description", "property", description);
    setMeta("og:type", "property", "website");
    setMeta("og:url", "property", canonical);
    setMeta("og:image", "property", image);

    setMeta("twitter:card", "name", "summary_large_image");
    setMeta("twitter:title", "name", title);
    setMeta("twitter:description", "name", description);
    setMeta("twitter:image", "name", image);

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = canonical;
  }, [title, description, canonical, image]);

  return null;
}
