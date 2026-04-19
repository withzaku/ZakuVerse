"use client";

import { useEffect } from "react";
import { trackServicePageView } from "@/lib/analytics";

type ServicePageViewTrackerProps = {
  serviceName: string;
};

export function ServicePageViewTracker({ serviceName }: ServicePageViewTrackerProps) {
  useEffect(() => {
    trackServicePageView(serviceName);
  }, [serviceName]);

  return null;
}
