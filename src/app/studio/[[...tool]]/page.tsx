"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

export const dynamicParams = true;

export default function StudioPage() {
  return <NextStudio config={config} />;
}
