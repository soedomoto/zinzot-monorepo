# 📚 Zinzot

> *"Zinzot is not Zotero."*

**Zinzot** is a modern, high-performance reference management system reimagined for the web era. Born from the need for a faster, more integrated, and developer-friendly alternative to traditional reference managers, Zinzot provides researchers, students, and academics with a seamless way to collect, organize, and cite academic literature.

Unlike legacy software, Zinzot is built from the ground up prioritizing speed, a web-first experience, and strict end-to-end type safety.

## ✨ Why Zinzot?
- **Seamless Web-First Experience**: No heavy desktop clients required. Manage your library directly from a blazing-fast web dashboard.
- **1-Click Imports**: A powerful browser extension instantly extracts rich bibliographic metadata and PDFs from publisher sites.
- **Native CSL Standard**: Built completely around the Citation Style Language (CSL) standard on both the database and application levels, making accurate citation generation native to the platform.
- **End-to-End Type Safety**: 100% TypeScript with tRPC, ensuring airtight data contracts between the database, backend, web dashboard, and browser extension.

---

## 🏗️ Architecture & Monorepo Structure

Zinzot is developed as a scalable **pnpm Monorepo**, utilizing modern tooling to enforce strict modularity and high code quality.

### Apps (`/apps`)
- **`api/`** - A robust **tRPC** backend service. It acts as the single source of truth for reference data, built with Fastify for maximum throughput.
- **`web/`** - The primary **React + Vite** dashboard utilizing a clean architecture for managing libraries, collections, and PDFs natively in the browser.
- **`web-v1/`** - Legacy/experimental iteration of the web dashboard.
- **`wxt/`** - A next-generation **browser extension** built with the WXT framework. Injects content scripts to extract metadata or grab PDFs while browsing academic databases.

### Packages (`/packages`)
- **`contracts/`** - Shared TypeScript interfaces, DTOs, and strict CSL data structures. Guarantees sync between backend payloads and frontend expectations.
- **`db/`** - The storage layer. Powered by **Prisma** and **PostgreSQL**, handling complex CSL hierarchies (authors, attachments, metadata) with relational integrity.
- **`translators/`** - A dedicated engine containing web scraping logic to reliably translate and extract metadata from hundreds of differing publisher websites.
- **`ui/`** - Shared component library. A beautifully crafted, accessible, and reusable React UI system for consistent design across all Zinzot applications.

---

## 🚀 Engineering Highlights (For Developers)

- **Strict Data Contracts**: Utilizing tRPC and shared `contracts` ensures that any database or API changes immediately cause build failures on the frontend if unhandled, virtually eliminating runtime shape mismatches.
- **Micro-package Modularity**: By isolating the `translators` logic and the `ui` layer, the apps remain lightweight and focus entirely on business logic and routing.
- **Advanced Metadata Extraction**: Handling academic metadata is complex. The `translators` package robustly adapts inconsistent publisher HTML into pristine CSL JSON data shapes.
- **Cross-environment Execution**: Code is optimized to run efficiently across Node.js servers, standard browser DOMs, and restricted browser extension environments (background service workers and content scripts).

---

### Getting Started

Install dependencies from the root directory:

```bash
pnpm install
```

Ensure your database is running and apply the schema:

```bash
pnpm db:push
```

#### Running in Development

You can run individual applications in development mode from the root of the workspace using pnpm filters:

- **API Server**:
  ```bash
  pnpm --filter @zinzot/api dev
  ```
- **Web Dashboard**:
  ```bash
  pnpm --filter @zinzot/web dev
  ```
- **Browser Extension**:
  This tracks changes in real-time and opens an isolated browser profile for testing.
  ```bash
  pnpm --filter @zinzot/wxt dev
  ```

#### Building for Production

Compile and bundle the apps for production deployment.

- **Build all packages and apps**:
  ```bash
  pnpm build
  ```
- **Build individual components**:
  ```bash
  pnpm --filter @zinzot/api build
  pnpm --filter @zinzot/web build
  ```
- **Compile the Extension** (Outputs production-ready zip files for Chrome/Firefox stores):
  ```bash
  pnpm --filter @zinzot/wxt build
  ```

---
*Created carefully to advance academic tooling.*