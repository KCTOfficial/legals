import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export interface LegalDoc {
  app: string;
  slug: string;
  title: string;
  description?: string;
  effective?: Date;
  href: string;
  entry: CollectionEntry<'docs'>;
}

export interface LegalApp {
  slug: string;
  name: string;
  description?: string;
  icon?: ImageMetadata;
  href: string;
  docs: LegalDoc[];
}

const icons = import.meta.glob<ImageMetadata>('/content/*/icon.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

/** Prefixes a site-absolute path with the configured `base`. */
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

function titleCase(slug: string): string {
  return slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function iconFor(app: string): ImageMetadata | undefined {
  const key = Object.keys(icons).find((path) => path.split('/')[2] === app);
  return key ? icons[key] : undefined;
}

function toDoc(entry: CollectionEntry<'docs'>): LegalDoc {
  const [app, slug] = entry.id.split('/');
  const body = entry.body ?? '';
  const heading = body.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1];
  const stated = body.match(/effective as of\s+(\d{4}-\d{2}-\d{2})/i)?.[1];
  return {
    app,
    slug,
    title: entry.data.title ?? heading ?? titleCase(slug),
    description: entry.data.description,
    effective: entry.data.effective ?? (stated ? new Date(`${stated}T00:00:00Z`) : undefined),
    href: withBase(`/apps/${app}/${slug}/`),
    entry,
  };
}

function byOrderThenTitle(a: LegalDoc, b: LegalDoc): number {
  const order = (a.entry.data.order ?? Infinity) - (b.entry.data.order ?? Infinity);
  return Number.isNaN(order) || order === 0 ? a.title.localeCompare(b.title) : order;
}

/** All apps that have at least one document, with their documents, sorted by name. */
export async function getApps(): Promise<LegalApp[]> {
  const [docEntries, appEntries] = await Promise.all([getCollection('docs'), getCollection('apps')]);
  const meta = new Map(appEntries.map((entry) => [entry.id, entry.data]));
  const grouped = new Map<string, LegalDoc[]>();
  for (const doc of docEntries.map(toDoc)) {
    grouped.set(doc.app, [...(grouped.get(doc.app) ?? []), doc]);
  }
  return [...grouped]
    .map(([slug, docs]) => ({
      slug,
      name: meta.get(slug)?.name ?? titleCase(slug),
      description: meta.get(slug)?.description,
      icon: iconFor(slug),
      href: withBase(`/apps/${slug}/`),
      docs: docs.sort(byOrderThenTitle),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
