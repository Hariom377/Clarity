import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

export default function SEO({
  title,
  description,
  canonical,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="budgeting app for irregular income, personal finance, freelancer budgeting, creator finance, expense tracker, daily spending limit, cash flow management"
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta property="og:site_name" content="iRREGO" />

      <meta
        property="og:image"
        content="https://irrego.online/og-image.jpg"
      />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content="https://irrego.online/og-image.jpg"
      />
    </Helmet>
  );
}
