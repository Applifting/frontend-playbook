---
title: Pages & Routes (Common Concepts)
description: 'Common concepts for pages and routes: composition, layout, headings, and feature integration.'
sidebar:
  order: 2.2
lastUpdated: 2025-12-03
---

These rules apply regardless of whether you’re using **Next.js** or **TanStack Router / React Router**.

### Definition

Define page (or route) components directly in their respective route files.

### Composition

Pages should compose **at least one feature component** (or multiple, if needed).  
Pages are the place to bring **components from different features together** — that’s exactly their purpose.

### Stylistic Layout

Keep **headings, containers, spacing**, and other **purely stylistic layout elements** at the **page/route level**. These do not belong inside features.

### Page Heading

The heading of a page should always live in the page/route component, never inside a feature.

### Features

Features should only provide **functional, reusable building blocks** (components, hooks, queries, etc.).

Think of feature components as widgets or sections that can be plugged into different pages.

### Additional notes

The terms **page** and **route** mean the same thing — we usually say page in Next.js and route in React Router or TanStack Router.  

**File-based routing** is strongly preferred in both TanStack Router and React Router (just like in Next.js). It ensures consistent structure, discoverability, and reduces boilerplate.

## Visual Overview

```mermaid
flowchart LR
  subgraph Page["Page / Route"]
    direction TB
    H[Heading / Title]
    L[Stylistic Layout: container, spacing, wrappers]
    F1[Feature A Component]
    F2[Feature B Component]
    F3[Feature C Component]
  end
  subgraph FeatureA["Feature A"]
    FA1[Widget A1]
    FA2[Widget A2]
  end
  subgraph FeatureB["Feature B"]
    FB1[Widget B1]
    FB2[Widget B2]
  end
  subgraph FeatureC["Feature C"]
    FC1[Widget C1]
  end
  F1 --> FA1
  F2 --> FB1
  F3 --> FC1
```
