import { Link } from 'react-router-dom';

/**
 * Skip to main content link for accessibility.
 * Hidden by default, visible on keyboard focus.
 */
export default function SkipLink() {
    return (
        <Link
            to="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none"
            onClick={(e) => {
                e.preventDefault();
                const main = document.getElementById('main-content');
                if (main) {
                    main.focus();
                    main.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            Skip to main content
        </Link>
    );
}
