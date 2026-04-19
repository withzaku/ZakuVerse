type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackContactFormSubmit() {
  sendEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "contact_form",
  });
}

export function trackServicePageView(serviceName: string) {
  sendEvent("service_page_view", {
    service_name: serviceName,
    event_category: "service",
  });
}

export function trackToolUsage(toolName: string) {
  sendEvent("tool_usage", {
    tool_name: toolName,
    event_category: "tool",
  });
}

export function trackBlogRead(slug: string, readPercent: number) {
  sendEvent("blog_read_depth", {
    slug,
    read_percent: readPercent,
    event_category: "blog",
  });
}

export function trackCTAClick(ctaLabel: string, page: string) {
  sendEvent("cta_click", {
    cta_label: ctaLabel,
    page,
    event_category: "cta",
  });
}

export function trackPageView(path: string, measurementId?: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function" && measurementId) {
    window.gtag("config", measurementId, {
      page_path: path,
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: path,
  });
}
