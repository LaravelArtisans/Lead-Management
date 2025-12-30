# MCP – Model Context Protocol

## Lead Management Platform

This document provides structured context about the Lead Management project.
It is intended for:

- AI assistants
- New contributors
- Future maintainers

---

## 1. Project Overview

Lead Management is a modern lead management and email outreach platform built with
Laravel, React, and Inertia.

Status: MVP in active development.

Primary goals:

- Collect leads manually or via scraping
- Organize and manage contacts
- Run email campaigns with account rotation
- Provide basic analytics

---

## 2. Architecture Overview

The project follows a server-driven architecture using Laravel and Inertia.

### High-level flow

- Laravel handles authentication, routing, validation, and business logic
- React renders the UI and manages client-side interactions
- Inertia bridges backend and frontend without a traditional REST API

### Architectural principles

- Server-driven routing
- Inertia pages map directly to routes
- Minimal client-side state duplication
- Clear separation between domain logic and UI

---

## 3. Technology Stack

### Backend

- Laravel 12
- PHP 8+
- SQLite (MVP stage)

### Frontend

- React
- TypeScript
- Inertia.js
- Tailwind CSS

### Tooling

- Vite for frontend bundling
- Composer for PHP dependencies
- npm for frontend dependencies

---

## 4. Domain Model

### Lead

Represents a contact.

Expected fields:

- name
- email
- phone
- source (manual / scraped)
- timestamps

### Campaign

Represents an email campaign.

Expected fields:

- name
- subject
- body
- status (draft / sent)
- timestamps

### CampaignLead (pivot)

Links leads to campaigns.

- campaign_id
- lead_id
- sent_at

### EmailAccount (future)

Represents an Outlook account used for sending emails.

---

## 5. Feature Breakdown

### Lead Management

- List leads
- Create, edit, delete leads
- View lead details

### Lead Scraping

- Input a website URL
- Extract emails and phone numbers
- Save extracted data as leads

### Email Campaigns

- Create campaign drafts
- Select leads for a campaign
- Send campaigns (mocked Outlook integration)
- Rotate multiple email accounts

### Analytics

- View campaign history
- Total emails sent per campaign

---

## 6. Data Flow Examples

### Viewing Leads

1. User visits `/leads`
2. Laravel controller queries database
3. Controller returns Inertia response
4. React page receives leads as props
5. UI renders lead table

### Creating a Campaign

1. User submits campaign form
2. Laravel validates request
3. Campaign is stored
4. User is redirected with success feedback

---

## 7. Folder Structure Guide

### Backend (Laravel)

- `app/Models` → Domain models
- `app/Http/Controllers` → Controllers
- `routes/web.php` → Routes
- `database/migrations` → Schema

### Frontend

- `resources/js/Pages` → Inertia pages
- `resources/js/Components` → Reusable UI components
- `resources/js/Layouts` → Layouts

### MCP

- `MCP.md` → Project context and AI reference

---

## 8. Coding & Project Conventions

### Backend

- Thin controllers, business logic in models/services
- Use Laravel validation patterns
- Follow Laravel naming conventions

### Frontend

- One Inertia page per route
- Keep UI logic inside components
- Prefer small, composable components

### General

- Keep MVP simple
- Avoid premature optimization

---

## 9. Roadmap

### MVP

- Lead CRUD
- Campaign creation
- Mock email sending
- Basic analytics

### Post-MVP

- Real Outlook integration
- Queue-based email sending
- Email open & click tracking
- Team collaboration

---

## 10. Glossary

- Lead: A contact with email or phone number
- Campaign: A batch of emails sent to selected leads
- Inertia: Framework connecting Laravel and React
- MVP: Minimum Viable Product
