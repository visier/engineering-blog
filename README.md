# Visier Engineering Blog

![Visier engineering blog banner](docs/images/visier-engineering-banner.svg)

This blog covers how Visier builds, operates, and evolves the technology behind its analytics and AI platform.

Visit the blog at [engineering.visier.com](https://engineering.visier.com).

Subscribe to the RSS feed at [engineering.visier.com/feed.xml](https://engineering.visier.com/feed.xml).

## Latest post

### [Why Visier's Semantic Model Makes Hard Analytics Easier for Humans and AI Agents](docs/Aug-24-2026-why-visiers-semantic-model-makes-hard-analytics-easier.md)

How Visier's semantic model turns time, relationships, concepts, and metrics into shared analytical context for human analysts and AI agents.

Semantic modeling | Temporal analytics | AI context

## Earlier posts

### [Building and Maintaining Visier DB: One Cached Copy, Security, and Engineering Discipline](docs/May-24-2026-Part-3-building-and-maintaining-visier-db-one-cached-copy-security-engineering-discipline.md)

Part 3 and conclusion of the series on how Visier's cache-copy architecture preserves source-of-truth semantics and how test automation, code quality, and dependency discipline help keep Visier DB sustainable.

Cache-copy architecture | Security and governance | Engineering discipline

### [Inside Visier DB: Event Streams, Temporal Queries, Metrics, and Cohorts](docs/May-01-2026-Part-2-inside-visier-db-event-streams-temporal-queries-metrics-cohorts.md)

Part 2 of the series on how Visier ingests data as states and events, executes temporal analytics in Visier DB, and models metrics and cohorts as reusable time-aware concepts.

Event streams | Temporal queries | Metrics and cohorts

### [Why Analytics Breaks Under Change](docs/Feb-01-2026-Part-1-why-analytics-breaks-under-change.md)

Part 1 of the series on why row-centric BI pipelines become fragile under schema drift, source churn, and temporal complexity, and how Visier's subject model addresses that problem.

Data modeling | Temporal analytics | Platform architecture

## About Visier

Visier builds AI-powered workforce intelligence. Its platform brings people and work data together so organizations can make better decisions across hiring, mobility, compensation, productivity, and organizational change.

## What to expect

The blog covers:

- Architecture and platform engineering
- Data modeling and analytics at scale
- AI and ML in people insights
- Security, privacy, and compliance
- Engineering culture and career growth

For product information or company news, visit [Visier's public website](https://www.visier.com).

## Local preview

Install the site dependencies into the repository so the local preview does not modify your global Ruby environment:

```bash
bundle config set --local path vendor/bundle
bundle install
```

Serve the GitHub Pages site locally from the `docs/` directory:

```bash
"$(brew --prefix ruby@3.3)/bin/bundle" exec jekyll serve --source docs
```

Preview the site at `http://127.0.0.1:4000`.
