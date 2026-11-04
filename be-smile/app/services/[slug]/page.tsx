import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DETAILED_SERVICES } from "@/lib/services-data";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DETAILED_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = DETAILED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Be Smile",
    };
  }

  return {
    title: `${service.title} | Be Smile Child Development Centre Pune`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Be Smile Child Development Centre`,
      description: service.tagline,
      images: [service.image],
    },
  };
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = DETAILED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services (exclude current service, take up to 3)
  const relatedServices = DETAILED_SERVICES.filter((s) => s.slug !== slug).slice(
    0,
    3
  );

  return (
    <ServiceDetailClient
      service={service}
      relatedServices={relatedServices}
    />
  );
}

