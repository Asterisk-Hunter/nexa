import { useEffect } from 'react';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    noIndex?: boolean;
}

export default function SEOHead({
    title = 'Nexa Web Solutions | Web Design & Development Agency',
    description = 'Nexa Web Solutions creates modern websites and apps for startups, small businesses and growing brands. Clean design. Fast delivery. Affordable pricing.',
    canonical = 'https://thenexawebsolutions.com/',
    ogImage = 'https://thenexawebsolutions.com/og-image.jpg',
    noIndex = false,
}: SEOHeadProps) {
    useEffect(() => {
        // Update title
        document.title = title;

        // Helper to update or create meta tags
        const setMeta = (name: string, content: string, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attr, name);
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        // Update meta tags
        setMeta('description', description);
        setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

        // Open Graph
        setMeta('og:title', title, true);
        setMeta('og:description', description, true);
        setMeta('og:url', canonical, true);
        setMeta('og:image', ogImage, true);
        setMeta('og:type', 'website', true);

        // Twitter
        setMeta('twitter:title', title);
        setMeta('twitter:description', description);
        setMeta('twitter:image', ogImage);
        setMeta('twitter:card', 'summary_large_image');

        // Canonical link
        let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = canonical;

        // Cleanup function
        return () => {
            // Restore defaults on unmount if needed
        };
    }, [title, description, canonical, ogImage, noIndex]);

    return null;
}
