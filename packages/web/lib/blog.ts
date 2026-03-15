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
		slug: "chicago-care-nbc-interview",
		title: "The time that I was on TV",
		excerpt: "I got interviewed on Chicago's NBC 5 about a project I built.",
		publishedAt: new Date("2022-08-17"),
		tags: ["startup story", "media outreach", "chicago startups", "healthtech", "founder journey"],
		category: "Startup",
		imageDescription: "The interview setup in a WeWork office in Chicago's River North.",
		heroImage: "/assets/blog/chicago-care-nbc-interview/hero.jpg",
		content: `
When I launched Chicago.care, I knew it could genuinely help people.

The site made it easier for Chicago residents to find monkeypox vaccines and providers during the outbreak. But building something useful is only half the battle — people still have to **hear about it**.

So I decided to do something I had never done before.

I tried to get the media involved.

## Pitching Reporters

I made a list of reporters in Chicago who covered public health, local news, or technology.

Then I started emailing.

And emailing.

And emailing.

I probably reached out to **10–20 reporters** across different outlets. Most never responded. A few politely declined.

Cold pitching journalists as a random developer with a new website is… intimidating.

But eventually I got a response.

**Lauren Petty from NBC Chicago.**

She was interested in what I had built and wanted to do an interview.

## Preparing for the Interview

This would be my first time doing anything like this.

So naturally I overprepared.

First, I rented a small room at a **WeWork in River North** where we could film the interview. I wanted a clean, professional setting where we could talk about the platform.

Then I did something slightly ridiculous.

I got a **custom Chicago.care t-shirt printed** so I could wear it during the interview.

If I was going to be on camera, I figured I might as well be on brand.

The night before the interview I remember feeling pretty nervous. I had built plenty of software before, but sitting down in front of a camera to talk about it was completely new territory.

## The Interview

Lauren and the NBC team came to the WeWork space and we set everything up.

The interview was surprisingly relaxed. We talked about:

- how the monkeypox outbreak was affecting Chicago
- how fragmented vaccine information was across providers
- why I built Chicago.care
- how the platform helped people find vaccines faster

It felt less like an interrogation and more like a conversation about solving a real problem.

Still — knowing the cameras were rolling definitely made my heart rate spike a bit.

## The Segment

Eventually the piece aired on NBC Chicago.

Seeing something you built get covered on local news is a surreal experience.

What started as a quick project to help people navigate vaccine access had suddenly reached a much larger audience.

Below is the segment from the interview.

![youtube](gTZfKUbvyQs)

## What I Learned

The experience taught me something important:

Sometimes building the product is the easy part.

Getting people to **notice it** is the real challenge.

Cold emailing reporters felt awkward at first, but it worked because the story was simple:

A developer saw a problem during a public health emergency and built something to help.

And sometimes that’s exactly the kind of story journalists are looking for.

Also — if you ever get the chance to go on TV for something you built…

bring a branded t-shirt.
`
	},
	{
		slug: "automating-pool-bed-reservations",
		title: "Automating Pool Bed Reservations at a Private Members Club",
		excerpt: "How I built a bot that guarantees I always get a pool bed 😎",
		publishedAt: new Date("2025-06-18"),
		tags: ["automation", "reverse engineering", "swift", "ios", "bots", "api", "python"],
		category: "Engineering",
		imageDescription: "A perfect summer afternoon by a rooftop pool in Chicago's West Loop.",
		heroImage: "/assets/blog/automating-pool-bed-reservations/hero.jpg",
		content: `
This summer, I developed a very effective solution to a problem I kept running into.

I belong to a club in Chicago that has a rooftop pool. Most of the pool beds are first-come-first-served, but they set aside 10 beds to be booked via a mobile app.

You can try to walk-in and get a bed, but on a warm summer day in Chicago, it's very competitive. I don't like standing around waiting for a bed to open up; I'd rather have one reserved in advance.

Reservations open up 24 hours in advance. And when I say you have to be fast — I mean *fast*. The beds get booked in seconds.

After losing the race a few too many times, I decided to automate it.

## Understanding the System

The mobile app talks to a backend API to check availability and create reservations. 

So the plan was simple:

1. Observe the network traffic
2. Reverse engineer the API
3. Replicate the reservation request
4. Trigger it exactly when reservations open

I started by intercepting requests from the mobile app and mapping out the endpoints involved in:

- checking availability
- creating reservations

Once I understood the request structure, replicating it was straightforward.

## The Bot

The bot starts attempting to book a few seconds before reservations open. The moment beds become available, it fires the reservation request.

Because the API accepts reservations immediately once availability flips, the bot consistently books before humans can even load the page in the app.

The result: I have never missed a reservation since.

## Turning it into an iOS App

Originally this was a simple Python script.

But eventually I wrapped the functionality in a native iOS app written in Swift so I could run it on the go, without needing my laptop.

The app runs the same logic, with the addition of a user-friendly UI.

## Conclusion

Is this overkill for reserving a pool bed?

Absolutely.

Was it worth it?

😄
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
		excerpt: "How a tiny bot that monitors OpenAI API spec changes led to my first open source contribution.",
		publishedAt: new Date("2026-03-05"),
		tags: ["open source", "vercel", "ai", "openai", "typescript"],
		category: "Open Source",
		imageDescription: "My old desk setup in my apartment in the Old Town neighborhood of Chicago, where I built many of my projects.",
		heroImage: "/assets/blog/my-first-open-source-contribution/hero.jpg",
		content: `
Today I made my first contribution to a major open source project!

This wasn't my first attempt at contributing to \`vercel/ai\`, but it was my first successful one.

The last time I tried to contribute, someone beat me to it by mere minutes.

I realized that in order to contribute, I had to be fast. So I built a bot to monitor the OpenAI API spec repository for changes and alert me when something changed.

## [openai-api-spec-monitor](https://www.github.com/michaelcummings12/openai-api-spec-monitor)

The bot watches the OpenAI API spec repository and notifies my Discord whenever something changes.

It works by:

1. Fetching the latest OpenAI API spec
2. Using native git diff to compare against the previous version
3. Generating a summary of changes using AI
4. Sends an alert in my Discord server

Pretty simple, but extremely useful.

## Catching a Model Update

A few months after launching it, the bot detected a major change.

OpenAI had updated the GPT model version from **5.2 to 5.4** in the spec.

I got the alert and quickly pulled up the [\`vercel/ai\`](https://github.com/vercel/ai) package. No open PRs, so far so good.

Rapdily, I pulled up Antigravity and instructed Gemini to update the model definitions in the package.

At the same time, I tasked my Clawdbot with crawling the [\`vercel/ai\` GitHub page](https://github.com/vercel/ai) to figure out what I had to name my branch, PR, and what description to add.

Everything started coming together all at once. I quickly reviewed Gemini's work and created a branch based on what Openclawd found.

I flipped back to GitHub and checked the pull requests page. I breathed a sigh of relief, no one else had opened a PR. I quickly opened one, and then of course had to do my own code review.

As expected, there were several things I noticed that AI did that I didn't like. I made some tweaks, pushed a few more commits, and marked the PR as ready for review.

Within a few minutes, I received a review from one of the maintainers from Vercel. They had a few suggestions. I made the changes and pushed a few more commits.

About 20 minutes after I opened the [pull request](https://github.com/vercel/ai/pull/13115), it was merged!

![](/assets/blog/my-first-open-source-contribution/pull-request.jpg)

## First PR, But Many More to Come

This was a small change, but contributing to open source projects that I actually use feels great. 

I'm looking forward to making more contributions in the future 🚀
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
