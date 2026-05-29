# Implementation Plan: The 2026 IT Career Blueprint

A **25-part MDX blog series** (each strictly **5,000+ words**, totaling over **125,000 words**) under `src/content/blog/it-career-guide/`. This is a deeply researched, exhaustive career transition guide for **Chirag Singhal** — from an Assistant Systems Engineer at TCS (SAP CPQ, Day 1) to a high-paying **Full-Stack Platform Engineer / GenAI Engineer** role in India or internationally.

---

## Your Profile Summary (From Your Answers)

| Parameter | Value |
| :--- | :--- |
| **Current Role** | Assistant Systems Engineer, TCS (SAP CPQ project, joined today) |
| **Current CTC** | ₹3.36 LPA |
| **Target CTC** | ₹8–10+ LPA (India), or USD-equivalent remote |
| **Real Skill Level** | Basic Python only. Almost all resume skills are fake/need full refresher. |
| **Databases** | Basic CRUD only. No migrations, indexing, or query optimization. |
| **Cloud/DevOps** | Zero real experience. Used AI agents to generate GitHub Actions. |
| **AI/ML Theory** | No knowledge of embeddings, vector search, or LLM internals. |
| **Target Role** | Full-Stack Platform Engineer (Backend + Frontend + GenAI/Agentic AI) |
| **Available Time** | ~10 hours/day for upskilling |
| **Learning Style** | Structured video-based (Udemy, LinkedIn Learning) over reading |
| **Budget** | ₹0. TCS provides Udemy, LinkedIn Learning, O'Reilly access. Free resources only. |
| **Certifications** | Not willing to spend money on certification exams |
| **Portfolio** | chirag127.in, github.com/chirag127, oriz.in |

---

## Proposed Changes

### Content Collection: Astro MDX Blog Series

All files will be created under `src/content/blog/it-career-guide/` using the existing Astro content collection schema. Each file uses the `series` and `part` frontmatter fields to link the series together.

#### [NEW] [index.mdx](file:///c:/Users/chira/OneDrive/GitHub/blog.oriz.in/src/content/blog/it-career-guide/index.mdx)
Master index page for the series. Rebuilt as a highly visual, extremely detailed gateway exceeding **5,000 words**. Contains:
* Extensive deep-dive on the services company upskilling trap and strategic transition psychology.
* Detailed T-Shaped developer skillset metrics and complete chronological 6-month roadmap timelines.
* High-viewability interactive diagrams (Mermaid format).
* Full 25-part progress index linking to all parts, highlighting exact conceptual objectives, target tools, and reading times.
* Integrated Google AdSense layout blocks representing optimal views and zero cumulative layout shifts.

#### [NEW] [part-01-the-blueprint.mdx](file:///c:/Users/chira/OneDrive/GitHub/blog.oriz.in/src/content/blog/it-career-guide/part-01-the-blueprint.mdx) through [part-25-the-leap.mdx](file:///c:/Users/chira/OneDrive/GitHub/blog.oriz.in/src/content/blog/it-career-guide/part-25-the-leap.mdx)
25 individual MDX blog posts. Each rewritten from scratch to be **at least 5,000 words long** and contain the following mandatory, highly structured sections:
1. **Core Concept Refresher:** A rigorous, 2,000+ words deep-dive explaining the underlying low-level system mechanics, memory frameworks, architectural patterns, and math of the topic.
2. **Master Resource Directory:** Expanded directories detailing **multiple high-quality resources** per topic (at least 4-5 resources: video courses, textbooks, official specs, interactive platforms). Each resource is allocated a dedicated section detailing:
   * **Why It Was Selected:** Selection rationale and its unique architectural or practical value.
   * **Target Syllabus Modules/Chapters:** The exact sections to focus on.
   * **Time Investment Required:** Hours of active learning and practice needed.
   * **Value Assessment:** A rigorous breakdown of how this resource directly advances the upskilling goals.
   * **Actionable Study Strategy:** Speed, taking notes, and execution guides.
3. **Hands-On Portfolio Lab Project:** Complete codebase layouts, file trees, configurations, and migration guides to construct a portfolio piece and push it to `github.com/chirag127`.
4. **Technical Interview Self-Assessment:** Exhaustive grids of high-frequency system design/algorithm questions and comprehensive technical answer frameworks.
5. **Exit Action Items Checklist:** Action items to check off before proceeding to the next part.

---

## Complete 25-Blog Series Syllabus

### Phase 1: Foundation & Mindset (Blogs 1–3)

#### Blog 1: The Blueprint — Escaping the Support Trap
**Focus**: 2026 IT landscape overview, salary benchmarks, role definitions, how to break out of TCS support/SAP CPQ

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Book** | *The Software Engineer's Guidebook* — Gergely Orosz | Pragmatic Engineer |
| **Free** | System Design Primer (GitHub) | GitHub |
| **Udemy** | The Complete 2026 Web Developer Bootcamp — Dr. Angela Yu | Udemy |
| **LinkedIn Learning** | Programming Foundations: Fundamentals | LinkedIn Learning |

**Key Content**: Salary data (₹4–10 LPA entry → ₹18–50 LPA AI/ML → ₹50 LPA–1.25 Cr remote international), company types (service vs product vs startup), role taxonomy (Backend, Full-Stack, GenAI, DevOps, SRE), TCS→product company career path

---

#### Blog 2: Git, GitHub & Professional Workflows
**Focus**: Version control mastery, branching strategies, pull requests, professional collaboration

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | The Git & GitHub Bootcamp — Colt Steele | Udemy |
| **O'Reilly** | *Pro Git* — Scott Chacon & Ben Straub | O'Reilly (free online) |
| **LinkedIn Learning** | Git Essential Training | LinkedIn Learning |
| **Free** | Git Documentation (git-scm.com/doc) | Official |

---

#### Blog 3: The Developer Toolkit — Terminal, IDE, and Workflow Setup
**Focus**: VSCode mastery, terminal (PowerShell/Bash), developer productivity, linting/formatting

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Free** | freeCodeCamp: Command Line Crash Course | YouTube |
| **LinkedIn Learning** | Visual Studio Code Essential Training | LinkedIn Learning |

---

### Phase 2: Core Programming (Blogs 4–6)

#### Blog 4: Python Mastery — From Scripting to Production
**Focus**: Python fundamentals refresher, OOP, data structures, file I/O, error handling, virtual environments

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | 100 Days of Code: Complete Python Pro Bootcamp — Dr. Angela Yu | Udemy |
| **O'Reilly** | *Introducing Python* — Bill Lubanovic | O'Reilly |
| **Book** | *Python Crash Course* — Eric Matthes | No Starch Press |
| **LinkedIn Learning** | Python Essential Training | LinkedIn Learning |
| **Free** | Python Official Tutorial (docs.python.org/3/tutorial/) | Official |

---

#### Blog 5: Asynchronous Python — AsyncIO, Concurrency & FastAPI
**Focus**: Event loops, coroutines, async/await, threading vs multiprocessing, FastAPI fundamentals

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | FastAPI — The Complete Course (2026) | Udemy |
| **O'Reilly** | *Building Generative AI Services with FastAPI* | O'Reilly |
| **Free** | FastAPI Official Documentation (fastapi.tiangolo.com) | Official |
| **Free** | FastAPI Beyond CRUD (YouTube Playlist) | YouTube |
| **LinkedIn Learning** | Building APIs with Python | LinkedIn Learning |

---

#### Blog 6: TypeScript & Node.js — Event Loops & Server-Side JS
**Focus**: TypeScript fundamentals, type system, Node.js event loop, Express/Hono, npm ecosystem

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Understanding TypeScript — 2026 Edition | Udemy |
| **Udemy** | TypeScript Masterclass 2026 Edition — React + NodeJS Project | Udemy |
| **O'Reilly** | *Programming TypeScript* — Boris Cherny | O'Reilly |
| **LinkedIn Learning** | TypeScript Essential Training | LinkedIn Learning |
| **Free** | TypeScript Official Handbook (typescriptlang.org/docs) | Official |

---

### Phase 3: Databases & Data (Blogs 7–9)

#### Blog 7: PostgreSQL Mastery — Relational Databases Deep Dive
**Focus**: SQL fundamentals, schema design, indexing (B-Trees, GIN, Hash), query planning, ACID, transactions, migrations

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | SQL and PostgreSQL: The Complete Developer's Guide — Stephen Grider | Udemy |
| **O'Reilly** | *Learning PostgreSQL* | O'Reilly |
| **Book** | *Designing Data-Intensive Applications* — Martin Kleppmann | O'Reilly |
| **LinkedIn Learning** | PostgreSQL Essential Training | LinkedIn Learning |
| **Free** | PostgreSQL Official Documentation | Official |

---

#### Blog 8: NoSQL & Caching — MongoDB and Redis
**Focus**: Document databases, MongoDB CRUD/aggregation/indexing, Redis data structures, caching patterns (write-through, cache-aside)

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | MongoDB – The Complete Developer's Guide | Udemy |
| **Udemy** | Redis: The Complete Developer's Guide — Stephen Grider | Udemy |
| **O'Reilly** | *Redis in Action* | O'Reilly |
| **LinkedIn Learning** | Learning MongoDB | LinkedIn Learning |
| **Free** | MongoDB University (free courses) | Official |

---

#### Blog 9: Event-Driven Architecture — Apache Kafka
**Focus**: Publishers, consumers, consumer groups, partitions, event streaming, transactional patterns, Kafka Connect

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Free** | Confluent Developer Kafka 101 (developer.confluent.io) | Confluent |
| **Udemy** | Apache Kafka Series — Learn Apache Kafka for Beginners v3 | Udemy |
| **O'Reilly** | *Kafka: The Definitive Guide* | O'Reilly |
| **LinkedIn Learning** | Apache Kafka Essential Training | LinkedIn Learning |

---

### Phase 4: System Design & Architecture (Blogs 10–12)

#### Blog 10: System Design Foundations — Scaling for Millions
**Focus**: Horizontal vs vertical scaling, load balancing, API gateways, CDN, CAP theorem, consistent hashing

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Book** | *System Design Interview Vol 1 & 2* — Alex Xu | ByteByteGo |
| **Udemy** | Mastering the System Design Interview — Frank Kane | Udemy |
| **Udemy** | Software Architecture & Design of Modern Large-Scale Systems — Michael Pogrebinsky | Udemy |
| **O'Reilly** | *Designing Data-Intensive Applications* — Martin Kleppmann | O'Reilly |
| **Free** | System Design Primer (github.com/donnemartin/system-design-primer) | GitHub |
| **Free** | ByteByteGo YouTube Channel & Newsletter | YouTube |

---

#### Blog 11: Microservices — Boundaries, Communication & Fault Tolerance
**Focus**: Service decomposition, gRPC vs REST vs GraphQL, circuit breakers, retry policies, service discovery, SAGA pattern

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **O'Reilly** | *Building Microservices* — Sam Newman | O'Reilly |
| **O'Reilly** | *Software Architecture: The Hard Parts* — Neal Ford | O'Reilly |
| **Udemy** | The Complete Microservices & Event-Driven Architecture — Michael Pogrebinsky | Udemy |
| **LinkedIn Learning** | Microservices Foundations | LinkedIn Learning |

---

#### Blog 12: RESTful API Design & GraphQL
**Focus**: REST principles, OpenAPI/Swagger, versioning, pagination, rate limiting, GraphQL schemas/resolvers

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | REST API Design, Development & Management | Udemy |
| **Free** | GraphQL Official Documentation (graphql.org/learn/) | Official |
| **LinkedIn Learning** | Learning REST APIs | LinkedIn Learning |

---

### Phase 5: DevOps & Cloud (Blogs 13–16)

#### Blog 13: Docker Containers — Packaging & Dev Environments
**Focus**: Dockerfiles, multi-stage builds, Docker Compose, image security, container networking

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Docker & Kubernetes: The Practical Guide — Maximilian Schwarzmüller | Udemy |
| **O'Reilly** | *Docker: Up & Running* (3rd Edition) | O'Reilly |
| **LinkedIn Learning** | Learning Docker | LinkedIn Learning |
| **Free** | Docker Official Getting Started Guide | Official |

---

#### Blog 14: Kubernetes at Scale — Orchestration & Auto-Scaling
**Focus**: Pods, services, deployments, ingress, configmaps, persistent volumes, Helm, scaling policies

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Kubernetes for the Absolute Beginners — KodeKloud/Mumshad | Udemy |
| **O'Reilly** | *Kubernetes: Up and Running* (3rd Ed) — Burns, Beda, Hightower | O'Reilly |
| **LinkedIn Learning** | Learning Kubernetes | LinkedIn Learning |
| **Free** | Kubernetes Official Tutorials (kubernetes.io/docs/tutorials/) | Official |

---

#### Blog 15: CI/CD Pipelines — GitHub Actions & Automation
**Focus**: Workflows, jobs, steps, runners, YAML syntax, secrets management, automated testing, deployment pipelines

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | GitHub Actions — The Complete Guide | Udemy |
| **Free** | GitHub Actions Official Documentation | Official |
| **LinkedIn Learning** | Learning GitHub Actions | LinkedIn Learning |

---

#### Blog 16: Serverless & Cloud — AWS Lambda & Cloudflare Workers
**Focus**: Serverless architectures, cold starts, database pooling, edge computing, Wrangler CLI, D1/R2/KV

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Ultimate AWS Certified Cloud Practitioner — Stéphane Maarek | Udemy |
| **Udemy** | AWS Lambda & Serverless Architecture Bootcamp | Udemy |
| **Free** | Cloudflare Workers Official Documentation & Tutorials | Official |
| **LinkedIn Learning** | AWS Essential Training for Developers | LinkedIn Learning |
| **Free** | egghead.io: Introduction to Cloudflare Workers | egghead.io |

---

### Phase 6: Frontend & Full-Stack (Blogs 17–18)

#### Blog 17: React.js — Modern Frontend Development
**Focus**: Functional components, Hooks, state management (Redux/Zustand), React 19 features, Next.js basics

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | React - The Complete Guide (incl. Next.js, Redux) — Maximilian Schwarzmüller | Udemy |
| **O'Reilly** | *Learning React* — Alex Banks & Eve Porcello | O'Reilly |
| **LinkedIn Learning** | React.js Essential Training | LinkedIn Learning |
| **Free** | React Official Documentation (react.dev) | Official |

---

#### Blog 18: Full-Stack Integration — Connecting Frontend to Backend
**Focus**: Astro framework, Tailwind CSS, connecting React to FastAPI/Node.js backends, authentication flows, deployment

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | React, NodeJS, Express & MongoDB — MERN Fullstack Guide | Udemy |
| **Free** | Astro Official Documentation (docs.astro.build) | Official |
| **Free** | Tailwind CSS Documentation (tailwindcss.com/docs) | Official |

---

### Phase 7: Generative AI & Agentic Systems (Blogs 19–21)

#### Blog 19: GenAI Fundamentals — Embeddings, Vector Spaces & Prompting
**Focus**: LLM mechanics, tokenization, embeddings, vector similarity (cosine/dot product), prompt engineering, temperature/top-k

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | The AI Engineer Course 2026: Complete AI Engineer Bootcamp | Udemy |
| **O'Reilly** | *AI Engineering* — Chip Huyen | O'Reilly |
| **O'Reilly** | *Hands-On Large Language Models* — Jay Alammar | O'Reilly |
| **LinkedIn Learning** | Introduction to Prompt Engineering for Generative AI | LinkedIn Learning |
| **LinkedIn Learning** | Fundamentals of AI Engineering | LinkedIn Learning |
| **Free** | DeepLearning.AI Short Courses (deeplearning.ai/short-courses/) | DeepLearning.AI |

---

#### Blog 20: RAG Architectures — Vector Databases & Knowledge Ingestion
**Focus**: ChromaDB, Pinecone, Milvus, semantic chunking, metadata filtering, hybrid search, re-ranking

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Complete Generative AI Course With LangChain and HuggingFace | Udemy |
| **Free** | DeepLearning.AI: Building Applications with Vector Databases | DeepLearning.AI |
| **Free** | DeepLearning.AI: Advanced Retrieval for AI with Chroma | DeepLearning.AI |
| **Free** | Coursera: Vector Databases for RAG (IBM) — audit free | Coursera |

---

#### Blog 21: Agentic Workflows — Multi-Agent Coordination with LangGraph
**Focus**: State graphs, routers, agent loops, tool use, human-in-the-loop, memory persistence, MCP

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | LLM Engineering: Master AI, Large Language Models & Agents | Udemy |
| **O'Reilly** | *Learning LangChain: Building AI and LLM Applications with LangChain and LangGraph* | O'Reilly |
| **O'Reilly** | *AI Agents and Applications: With LangChain, LangGraph, and MCP* | O'Reilly |
| **Free** | LangGraph Official Documentation (langchain-ai.github.io/langgraph/) | Official |

---

### Phase 8: Security & Testing (Blogs 22–23)

#### Blog 22: Securing the Stack — Auth, Cryptography & DevSecOps
**Focus**: OAuth 2.0/PKCE, JWT, bcrypt, HTTPS, CORS/CSRF, OWASP Top 10, input sanitization

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Mastering Authentication in Node.js: JWT, SSO, Token based | Udemy |
| **O'Reilly** | *Web Application Security* — Andrew Hoffman | O'Reilly |
| **Free** | OWASP Top 10 (owasp.org/Top10/) | Official |
| **LinkedIn Learning** | Web Security: OAuth and OpenID Connect | LinkedIn Learning |

---

#### Blog 23: TDD & QA — Testing Strategies & Automation
**Focus**: Unit/integration/E2E testing, pytest, Jest, mocking, TDD workflow, code coverage

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Udemy** | Pytest Course: Python Test Automation & GitHub Actions CI/CD | Udemy |
| **Udemy** | JavaScript Unit Testing — The Practical Guide | Udemy |
| **O'Reilly** | *Python Testing with pytest* — Brian Okken | O'Reilly |
| **LinkedIn Learning** | Programming Foundations: Software Testing/QA | LinkedIn Learning |
| **Free** | Pytest Official Documentation (docs.pytest.org) | Official |

---

### Phase 9: DSA & Interview Prep (Blog 24)

#### Blog 24: Data Structures, Algorithms & Coding Interviews
**Focus**: Arrays, linked lists, hash maps, trees, graphs, sorting, searching, dynamic programming, NeetCode 150 pattern

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Free** | NeetCode.io (NeetCode 150 curated list) | NeetCode |
| **Free** | LeetCode (free tier) — practice platform | LeetCode |
| **Free** | freeCodeCamp: Data Structures and Algorithms Mega Course | YouTube |
| **Udemy** | Master the Coding Interview: Data Structures + Algorithms — Andrei Neagoie | Udemy |
| **Book** | *Cracking the Coding Interview* — Gayle McDowell | CareerCup |
| **O'Reilly** | *Grokking Algorithms* — Aditya Bhargava | Manning/O'Reilly |
| **LinkedIn Learning** | Programming Foundations: Algorithms | LinkedIn Learning |

---

### Phase 10: The Leap — Job Hunting & Career (Blog 25)

#### Blog 25: The Leap — Ace the Interview & Secure the Remote/International Job
**Focus**: Resume optimization, LinkedIn branding, behavioral interviews (STAR method), system design interviews, salary negotiation, remote job platforms, visa guidance

**Remote Job Platforms (All Free to Apply)**:

| Platform | Best For | Notes |
| :--- | :--- | :--- |
| **Toptal** | Elite freelance (top 3%) | Rigorous vetting, very high pay |
| **Turing** | Full-time remote (US companies) | AI-matching, coding assessments |
| **Arc.dev** | Vetted remote developers | Verified Developer status |
| **Wellfound** | Startup jobs | Direct application to startups |
| **We Work Remotely** | General remote | Largest remote job board |
| **Remotive** | Curated remote jobs | Good filtering |
| **Honeypot** | Europe tech jobs | Reverse hiring |
| **Next Level Jobs EU** | Europe visa-sponsored jobs | Great for Netherlands/Germany |

**Visa Guidance**:

| Country | Visa Type | Salary Threshold | Processing Time |
| :--- | :--- | :--- | :--- |
| **Germany** | EU Blue Card | €45,934/year (IT shortage) | 6–20 weeks |
| **Netherlands** | Highly Skilled Migrant (HSM) | €4,357/month (under 30) | ~2 weeks |
| **USA** | H-1B | $78,000+ (Level I) | Lottery in March, 3–6 months |
| **USA** | L-1 (Intracompany) | No lottery | Need 1yr at foreign affiliate |

**Interview Resources**:

| Resource Type | Title | Platform |
| :--- | :--- | :--- |
| **Book** | *System Design Interview Vol 1 & 2* — Alex Xu | ByteByteGo |
| **Udemy** | Mastering the System Design Interview — Frank Kane | Udemy |
| **Free** | Tech Interview Handbook (techinterviewhandbook.org) | Free |
| **Free** | NeetCode.io for coding problems | Free |
| **LinkedIn Learning** | Nail Your Job Interview | LinkedIn Learning |
| **Free** | Exponent (mock system design interviews) | Free tier |

---

## Complete Roadmap Timeline (10 hrs/day, ~6 months)

```
Month 1 (Weeks 1-4): FOUNDATIONS
├── Week 1: Git & GitHub (Blog 2), Developer Toolkit (Blog 3)
├── Week 2-3: Python Mastery (Blog 4)
└── Week 4: Async Python & FastAPI (Blog 5)

Month 2 (Weeks 5-8): BACKEND CORE
├── Week 5: TypeScript & Node.js (Blog 6)
├── Week 6: PostgreSQL (Blog 7)
├── Week 7: MongoDB & Redis (Blog 8)
└── Week 8: Kafka & Event-Driven Architecture (Blog 9)

Month 3 (Weeks 9-12): ARCHITECTURE & DEVOPS
├── Week 9: System Design Foundations (Blog 10)
├── Week 10: Microservices (Blog 11), APIs (Blog 12)
├── Week 11: Docker (Blog 13)
└── Week 12: Kubernetes (Blog 14), CI/CD (Blog 15)

Month 4 (Weeks 13-16): CLOUD & FRONTEND
├── Week 13: Serverless — AWS Lambda & Cloudflare Workers (Blog 16)
├── Week 14-15: React.js (Blog 17)
└── Week 16: Full-Stack Integration (Blog 18)

Month 5 (Weeks 17-20): AI & SECURITY
├── Week 17: GenAI Fundamentals (Blog 19)
├── Week 18: RAG Architectures (Blog 20)
├── Week 19: Agentic Workflows / LangGraph (Blog 21)
└── Week 20: Security (Blog 22), Testing (Blog 23)

Month 6 (Weeks 21-24): INTERVIEW PREP & JOB HUNT
├── Week 21-22: DSA & LeetCode (Blog 24)
├── Week 23: Resume, LinkedIn, Applications (Blog 25)
└── Week 24: Mock interviews, apply to 50+ companies
```

---

## Frontmatter Schema (Per Blog)

Each MDX file will use the following frontmatter compatible with your existing `content.config.ts`:

```yaml
---
title: "Blog Title"
description: "SEO-optimized description"
pubDate: 2026-05-27
tags: ["Career", "Backend", "Python", ...]
category: "Career Guide"
author: "Chirag Singhal"
draft: false
series: "The 2026 IT Career Blueprint"
part: 1
readingTime: "12 min read"
---
```

Each blog will include:
- **Series Navigation** at top: links to Index, Previous, Next
- **Full Blog List** at bottom: links to all 25 parts
- **Resource Table**: Udemy, O'Reilly, LinkedIn Learning, Free resource for each topic

---

## File Structure

```
src/content/blog/it-career-guide/
├── index.mdx                        # Master index & roadmap
├── part-01-the-blueprint.mdx        # Escaping the Support Trap
├── part-02-git-github.mdx           # Git & GitHub Mastery
├── part-03-developer-toolkit.mdx    # Terminal, IDE, Workflow
├── part-04-python-mastery.mdx       # Python from Scratch
├── part-05-async-python-fastapi.mdx # AsyncIO & FastAPI
├── part-06-typescript-nodejs.mdx    # TypeScript & Node.js
├── part-07-postgresql.mdx           # Relational DB Deep Dive
├── part-08-nosql-redis.mdx          # MongoDB & Redis
├── part-09-kafka.mdx                # Event-Driven Architecture
├── part-10-system-design.mdx        # System Design Foundations
├── part-11-microservices.mdx        # Microservices Architecture
├── part-12-api-design.mdx           # REST & GraphQL
├── part-13-docker.mdx               # Docker Containers
├── part-14-kubernetes.mdx           # Kubernetes Orchestration
├── part-15-cicd.mdx                 # GitHub Actions CI/CD
├── part-16-serverless.mdx           # AWS Lambda & CF Workers
├── part-17-react.mdx                # React.js Frontend
├── part-18-fullstack.mdx            # Full-Stack Integration
├── part-19-genai-fundamentals.mdx   # LLM, Embeddings, Prompting
├── part-20-rag.mdx                  # RAG & Vector Databases
├── part-21-agentic-ai.mdx           # LangGraph & Agents
├── part-22-security.mdx             # Auth, Crypto, DevSecOps
├── part-23-testing.mdx              # TDD & QA
├── part-24-dsa.mdx                  # DSA & Coding Interviews
└── part-25-the-leap.mdx             # Job Hunt & Career Launch
```

---

## Execution Plan

Due to token limits, we will generate the blogs iteratively:

1. **Batch 1**: `index.mdx` + Parts 1–5 (Foundation + Python) - **[COMPLETED]**
2. **Batch 2**: Parts 6–10 (TypeScript, Databases, System Design) - **[COMPLETED]**
3. **Batch 3**: Parts 11–15 (Microservices, DevOps, CI/CD) - **[IN PROGRESS]**
4. **Batch 4**: Parts 16–20 (Cloud, Frontend, GenAI) - **[PLANNED]**
5. **Batch 5**: Parts 21–25 (Agentic AI, Security, Testing, DSA, Job Hunt) - **[PLANNED]**

Each batch will be generated sequentially after approval.

---

## Verification Plan

### Automated Tests
1. Run `pnpm build` to verify all MDX files compile correctly with Astro
2. Verify all frontmatter fields match the `content.config.ts` schema
3. Verify all internal navigation links resolve correctly

### Manual Verification
1. Run `pnpm dev` and browse to the series index page
2. Verify series navigation works (Previous/Next/Index links)
3. Verify all 25 parts appear on the series page at `/series/the-2026-it-career-blueprint`
4. Spot-check resource links and content accuracy
