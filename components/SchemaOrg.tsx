interface Props {
  name: string;
  description: string;
  url: string;
  image: string;
  price: string;
  priceCurrency?: string;
  address: string;
  numberOfRooms?: string;
  floorSize?: string;
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
      "priceCurrency": p.priceCurrency ?? "USD",
      "availability": "https://schema.org/InStock",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": p.address,
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US",
    },
    ...(p.numberOfRooms && { "numberOfRooms": p.numberOfRooms }),
    ...(p.floorSize && { "floorSize": { "@type": "QuantitativeValue", "value": p.floorSize, "unitCode": "FTK" } }),
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Santamaría Collection",
      "url": "https://santamaria-collection.vercel.app",
      "telephone": "+34610589716",
      "email": "info@santamaria-collection.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
