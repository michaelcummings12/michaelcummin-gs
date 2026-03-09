import { readingTime } from "../utils/readingTime";

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	publishedAt: Date;
	readingTime: string;
	tags: string[];
	category: string;
	imageDescription: string;
	heroImage?: string;
	featured?: boolean;
}

const rawPosts: Omit<BlogPost, "readingTime">[] = [
	{
		slug: "automating-pool-bed-reservations",
		title: "Automating Pool Bed Reservations at a Private Members Club",
		excerpt: "How I reverse engineered a members club reservation API and built a Swift bot that guarantees I always get a pool bed.",
		publishedAt: new Date("2025-06-18"),
		tags: ["automation", "reverse engineering", "swift", "ios", "bots"],
		category: "Engineering",
		imageDescription: "iOS app interface automatically reserving a pool bed",
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

![App home screen](https://placehold.co/800x450/27272a/71717a?text=App+home+screen)

![Reservation configuration](https://placehold.co/800x450/27272a/71717a?text=Reservation+configuration)

![Successful booking screen](https://placehold.co/800x450/27272a/71717a?text=Successful+booking)

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
		imageDescription: "The New York City skyline with the Statue of Liberty in the background",
		heroImage: "/assets/blog/exploring-a-building-permit-portal/hero.jpg",
		content: `
Earlier this year I went down a bit of a rabbit hole.

It started with a music venue.

## The Situation

A major electronic music venue in Brooklyn had been undergoing renovations and inspections for months. There were rumors circulating about delayed approvals, failed inspections, and uncertainty about reopening.

If you’ve ever tried to get tickets there, you know the drill — huge lines, sold-out shows, and massive anticipation around reopening.

I got curious about the inspection process and started digging into the public building permit portal that cities use to publish construction filings and inspection records.

These systems are designed to make certain information public: permits, approvals, inspection outcomes, and filings.

But what I found went *far* beyond that.

## Discovering the Access Issue

While browsing the portal I noticed that many documents were fetched through predictable URLs. After inspecting the request patterns, it became clear the system relied heavily on sequential document IDs.

Changing those IDs in requests returned different files.

At first I assumed I was just seeing other public filings.

But very quickly it became clear that the system was returning **far more than intended**.

Things like:

- full architectural plan sets
- structural drawings
- inspection reports
- internal review documents

And not just for one building.

For **every building in the city**.

## Testing the Scope

To confirm this wasn’t limited to the venue renovation, I tried querying a few well-known buildings.

The same access pattern worked.

The portal returned full document packages including structural plans, inspection reports, and filing histories.

This was clearly not intended to be publicly accessible.

## Responsible Disclosure

At this point I stopped further exploration and reported the issue through the city’s bug bounty program.

I provided:

- the endpoint responsible
- reproduction steps
- examples of exposed documents
- recommendations for fixing the access control

Because the issue still hasn’t been fully resolved, I’m intentionally avoiding publishing technical details or naming the specific system.

## Why This Matters

Municipal software often sits in a strange place between public transparency and sensitive infrastructure.

Building plans can contain:

- structural layouts
- security system locations
- emergency infrastructure
- engineering calculations

Access control mistakes in systems like this can expose massive amounts of data unintentionally.

## The Original Motivation

Ironically, this entire investigation started because I just wanted to know one thing:

Would the venue pass inspection?

Now months later the story has taken a few more twists — including the venue’s operator filing for bankruptcy — but that’s a story for another time.

Sometimes curiosity leads you down unexpected paths.
`
	},
	{
		slug: "my-first-open-source-contribution",
		title: "My First Open Source Contribution",
		excerpt: "How a small bot that monitors OpenAI API spec changes led to my first open source PR to the Vercel AI package.",
		publishedAt: new Date("2026-03-05"),
		tags: ["open source", "vercel", "ai", "openai", "typescript"],
		category: "Open Source",
		imageDescription: "GitHub pull request page showing contribution",
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
		imageDescription: "before and after typography alignment comparison",
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

![Before alignment](https://placehold.co/800x450/27272a/71717a?text=Before+alignment)

![After alignment](https://placehold.co/800x450/27272a/71717a?text=After+alignment)

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

export const blogPosts: BlogPost[] = rawPosts.map((post) => ({
	...post,
	readingTime: readingTime(post.content)
}));

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
	return blogPosts.filter((post) => post.featured);
}
