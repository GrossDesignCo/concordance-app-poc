import type { MDXComponents } from 'mdx/types';
import { Link } from '@/design-system';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: Link,
    Link,
  };
}
