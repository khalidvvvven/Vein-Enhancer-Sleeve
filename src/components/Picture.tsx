import { images, type ImageName } from '../generated/images';

type Props = {
  name: ImageName;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Art direction: swap to another image below a breakpoint. */
  alternate?: { name: ImageName; media: string; sizes: string };
};

const srcSet = (name: ImageName, ext: 'avif' | 'webp') =>
  images[name].widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ');

/** Responsive <picture> with AVIF + WebP derivatives and intrinsic size (no layout shift). */
export function Picture({ name, alt, sizes, className, priority, alternate }: Props) {
  const img = images[name];
  const widths = img.widths;
  const fallback = `/img/${name}-${widths[Math.min(widths.length - 1, 1)]}.webp`;
  return (
    <picture className={className}>
      {alternate && (
        <>
          <source type="image/avif" media={alternate.media} srcSet={srcSet(alternate.name, 'avif')} sizes={alternate.sizes} />
          <source type="image/webp" media={alternate.media} srcSet={srcSet(alternate.name, 'webp')} sizes={alternate.sizes} />
        </>
      )}
      <source type="image/avif" srcSet={srcSet(name, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(name, 'webp')} sizes={sizes} />
      <img
        src={fallback}
        width={img.width}
        height={img.height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
}
