import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first. */
export async function publishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', (post) => !post.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Zero-padded UTC date parts. Post dates are calendar days, so UTC avoids off-by-one shifts. */
export function dateParts(date: Date): { year: string; month: string; day: string } {
  return {
    year: String(date.getUTCFullYear()),
    month: String(date.getUTCMonth() + 1).padStart(2, '0'),
    day: String(date.getUTCDate()).padStart(2, '0'),
  };
}

/** The 2013 Jekyll permalink: /YYYY/MM/DD/slug.html */
export function postPath(post: Post): string {
  const { year, month, day } = dateParts(post.data.date);
  return `/${year}/${month}/${day}/${post.id}.html`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Jekyll's date_to_string format, e.g. "03 Nov 2013". */
export function formatDate(date: Date): string {
  const { day } = dateParts(date);
  return `${day} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
