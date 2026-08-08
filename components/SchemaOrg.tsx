interface Props {
  name: string;
  description: string;
  url: string;
  image: string;
  price: string;
  address: string;
  numberOfRooms?: string;
}

export default function SchemaOrg(p: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": p.name,
    "description": p.description,
    "url": p.url,
    "image": p.image,
    "offers": {
      "@type": "Offer",
      "price": p.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Santamaría Collection",
        "url": "https://www.santamaria-collection.com",
        "telephone": "+34610589716",
        "email": "info@santamaria-collection.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "streetAddress": p.address,
          "addressCountry": "US",
        },
      },
    },
    "about": {
      "@type": "Accommodation",
      "name": p.name,
      "numberOfRooms": parseInt(p.numberOfRooms ?? "1"),
      "address": {
        "@type": "PostalAddress",
        "streetAddress": p.address,
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
