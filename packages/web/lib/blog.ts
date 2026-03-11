export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	publishedAt: Date;
	tags: string[];
	category: string;
	imageDescription: string;
	heroImage: string;
	featured?: boolean;
}

const blogPosts: BlogPost[] = [
	{
		slug: "automating-pool-bed-reservations",
		title: "Automating Pool Bed Reservations at a Private Members Club",
		excerpt: "How I reverse engineered a members club reservation API and built a bot that guarantees I always get a pool bed.",
		publishedAt: new Date("2025-06-18"),
		tags: ["automation", "reverse engineering", "swift", "ios", "bots"],
		category: "Engineering",
		imageDescription: "A perfect summer afternoon by a rooftop pool in Chicago's West Loop.",
		heroImage: "/assets/blog/automating-pool-bed-reservations/hero.jpg",
		content: `
Last summer I developed a slightly ridiculous but very effective solution to a very first-world problem.

Pool beds at a certain private members club are extremely difficult to reserve.

Every morning, reservations open at a specific time. And when I say you have to be fast — I mean *fast*. Beds disappear in seconds. If you’re even a few seconds late, you’re staring at a fully booked calendar.

After losing the race a few too many times, I decided to automate it.

## Understanding the System

The club’s mobile app talks to a backend API to check availability and create reservations. Like most modern apps, the client is really just a thin wrapper around HTTP requests.

So the plan was simple:

1. Observe the network traffic
2. Reverse engineer the API
3. Replicate the reservation request
4. Trigger it exactly when reservations open

I started by intercepting requests from the official mobile app and mapping out the endpoints involved in:

- authentication
- checking availability
- creating reservations

Once I understood the request structure, replicating it was straightforward.

## The Bot

The bot wakes up a few seconds before reservations open and begins polling the availability endpoint. The moment beds become available, it fires the reservation request.

Because the API accepts reservations immediately once availability flips, the bot consistently books before humans can even load the page.

The result: I have never missed a reservation since.

## Turning it into an iOS App

Originally this was just a command line script.

But eventually I wrapped the functionality in a native iOS app written in Swift so I could:

- manage authentication
- configure preferred locations
- monitor reservation status
- trigger the bot automatically

The app basically runs the same automation logic, but with a UI and scheduling.

## Lessons Learned

A few takeaways:

- Most mobile apps are thin API clients
- If you understand the API, you understand the system
- Timing matters more than speed in reservation systems
- Automation is extremely satisfying when it solves a personal annoyance

Is this overkill for booking a pool bed?

Absolutely.

Was it worth it?

Also absolutely.
`
	},

	{
		slug: "exploring-a-building-permit-portal",
		title: "Inside the Building Permit Portal of America’s Largest City",
		excerpt: "While trying to understand whether a venue renovation would pass inspection, I discovered a major access control flaw in a municipal building portal.",
		publishedAt: new Date("2025-09-14"),
		tags: ["security", "bug bounty", "web security", "reverse engineering"],
		category: "Security",
		imageDescription: "One World Trade Center rising above Lower Manhattan, photographed on 35mm Fujifilm with my Nikon FE from the West Village.",
		heroImage: "/assets/blog/exploring-a-building-permit-portal/hero.jpg",
		content: `
Earlier this year I went down a bit of a rabbit hole.

It started with a music venue.

## The Situation

A major electronic music venue in Brooklyn had been undergoing renovations and inspections for months. There were rumors circulating about delayed approvals, failed inspections, and uncertainty about reopening.

At the time, there was a lot of speculation about whether the venue would pass its inspections and reopen on schedule. I got curious about how the inspection process worked and started exploring the city's public building permit portal.

These portals exist to provide transparency into construction activity. You can typically see things like:

- permit filings  
- inspection results  
- contractor information  
- approval history  

But they also host a large number of **documents associated with each job filing**.

## Discovering the Access Issue

While browsing through a few filings, I noticed something odd.

Some documents were clearly intended to be public and downloadable. Others appeared in the interface but displayed an **“unauthorized” message** unless you were a stakeholder on the project.

Naturally, I assumed those documents were protected properly.

But while inspecting how the portal handled document downloads, I discovered that the backend wasn’t consistently enforcing the same permissions that the interface was displaying.

In other words:

The UI said *“you can’t access this document”*, but the server would still return it under certain conditions.

Once I realized this, it became clear that the problem was much larger than a single project.

## Testing the Scope

To confirm whether this was isolated or systemic, I tested the same behavior on a few other filings.

It worked.

Then I tried different buildings.

It still worked.

Eventually it became clear that the issue potentially affected **documents across the entire system** — including architectural plans, sketches, and internal filing documents for buildings all over the city.

## Responsible Disclosure

Instead of digging deeper, I documented the issue and reported it through the city's bug bounty program.

My report included:

- a clear explanation of the authorization issue  
- steps to reproduce the problem  
- examples of documents that could be accessed unintentionally  
- recommendations for fixing the backend permission checks  

Because the vulnerability involves access control in a live municipal system, I’m intentionally leaving out specific technical details until it is fully resolved.

## Why This Matters

Municipal permitting systems sit at an interesting intersection of **public transparency and sensitive infrastructure**.

Some information should absolutely be public.

But detailed construction documents can include things like:

- full architectural plans  
- structural layouts  
- building systems diagrams  
- engineering calculations  

If access controls are implemented incorrectly, systems like this can unintentionally expose far more information than intended.

## The Original Motivation

Ironically, this entire investigation started because I just wanted to answer one simple question:

Would the venue pass inspection and reopen?

What began as curiosity about a nightclub renovation ended up uncovering a much larger issue in the city’s permitting software.

Sometimes pulling on a small thread leads somewhere unexpected.

(And in this case, somewhere I definitely wasn&apos;t planning to go.)
`
	},
	{
		slug: "my-first-open-source-contribution",
		title: "My First Open Source Contribution",
		excerpt: "How a small bot that monitors OpenAI API spec changes led to my first open source PR to the Vercel AI package.",
		publishedAt: new Date("2026-03-05"),
		tags: ["open source", "vercel", "ai", "openai", "typescript"],
		category: "Open Source",
		imageDescription: "My old desk setup in my Old Town Chicago apartment, where I built many of my early projects.",
		heroImage: "/assets/blog/my-first-open-source-contribution/hero.jpg",
		content: `
Today I made my first contribution to a major open source project.

It started with a small tool I wrote for myself.

## The Problem

OpenAI quietly updates their API spec from time to time. New models appear, versions change, and parameters evolve.

If you're building AI products, those changes matter.

But there's no official changelog for the raw spec itself.

So I built a small monitoring bot.

## openai-api-spec-monitor

The bot watches the OpenAI API spec repository and notifies my Discord whenever something changes.

Repo:  
https://www.github.com/michaelcummings12/openai-api-spec-monitor

It works by:

1. Fetching the latest spec
2. Comparing it against the previous version
3. Detecting model or schema changes
4. Posting alerts in Discord

Pretty simple, but extremely useful.

## Catching a Model Update

A few days after running it, the bot detected a change.

OpenAI had updated the GPT model version from **5.2 to 5.4** in the spec.

The change hadn’t yet been reflected in some SDK tooling — including the model list used in the Vercel AI package.

So I opened a PR updating the model definitions.

And it got merged.

## Why This Matters

The \`vercel/ai\` package is a popular toolkit for building AI applications. It provides abstractions for:

- streaming AI responses
- unified model interfaces
- easy integration with frameworks like Next.js

Even a small update helps keep the ecosystem aligned with upstream API changes.

## First PR, Many More Ahead

This was a small change, but contributing to open source projects that I actually use feels great.

Also: monitoring upstream APIs automatically turns out to be surprisingly useful.

Sometimes the best tools start as personal utilities.
`
	},

	{
		slug: "tailwindcss-textbox-trim",
		title: "Introducing tailwindcss-textbox-trim",
		excerpt: "A Tailwind CSS plugin that enables precise typographic alignment using the CSS text-box-trim specification.",
		publishedAt: new Date("2026-01-30"),
		tags: ["tailwind", "css", "open source", "typography"],
		category: "Open Source",
		imageDescription: "Doing some work at Doma Café in Chicago. Breakfast place with ćevapi sausage, hashbrown, and an iced americano.",
		heroImage: "/assets/blog/tailwindcss-textbox-trim/hero.jpg",
		content: `
One thing that has bothered me for years in web development is how difficult it is to align text *perfectly*.

Even when text appears visually centered, there is often hidden spacing above and below the glyphs that throws layouts off.

This spacing is called **internal leading**.

## The Problem

Standard web typography includes extra space inside text boxes.

That means elements like:

- buttons
- icons
- images
- labels

never align quite how you'd expect.

Even when using flexbox or grid, the text itself contains invisible padding.

## The Solution: text-box-trim

The CSS **Text Box Trim** specification solves this by allowing the browser to trim the excess space around text glyphs.

This makes text behave more like a normal box model element.

You can precisely control how text aligns with other UI components.

## Why I Built This

I ran into this problem repeatedly across projects.

My initial solution was to create custom utility classes in each app.

But after doing that a few times I realized:

this should just be a package.

So I built **tailwindcss-textbox-trim**.

## What the Package Does

It provides Tailwind utilities for the new CSS properties:

- \`text-box-trim\`
- \`text-box-edge\`

Example:

\`\`\`html
<p class="text-box-trim text-box-edge-cap">
Perfectly aligned text
</p>
\`\`\`

## Before vs After

Before: Standard text with excess space.

After: Text with \`text-box-trim\` applied, removing the excess space for perfect alignment.

## Bonus

I'm even using this package on this portfolio site.

So far it has eliminated a bunch of annoying typographic alignment hacks.

## Typography Should Be Predictable

Modern layout systems give us precise control over positioning.

Typography should behave the same way.

Hopefully this package makes that a little easier.
`
	}
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
