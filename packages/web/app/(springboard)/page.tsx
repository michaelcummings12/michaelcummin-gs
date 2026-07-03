import { APP_URL } from "@web/lib/config";

const personLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Michael Cummings",
	"url": APP_URL,
	"image": `${APP_URL}/assets/portrait.jpg`,
	"jobTitle": "Founder & Full-Stack Engineer",
	"description": "Founder and full-stack engineer who starts companies and ships the products himself.",
	"homeLocation": {
		"@type": "Place",
		"name": "Los Angeles, California"
	},
	"sameAs": ["https://instagram.com/michaelcummingsofficial", "https://linkedin.com/in/michael-cummings-21b526124", "https://github.com/michaelcummings12"]
};

const websiteLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Michael Cummings",
	"url": APP_URL
};

export default function Page() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
		</>
	);
}
