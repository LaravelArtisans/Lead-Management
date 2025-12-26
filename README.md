# 📧 Lead Management

A modern lead management and email outreach platform built with **Laravel** + **React** + **Inertia**.

> 🚧 **Status:** MVP in active development

---

## 🎯 Goal

Build an open-source platform that empowers individuals and small teams to:

1. **Collect leads** — manually or via web scraping
2. **Organize contacts** — store, edit, and manage lead information
3. **Run email campaigns** — send personalized outreach with multi-account rotation

---

## ✨ Features

### 🏠 Platform Foundation
- [ ] Dashboard overview after login
- [ ] Consistent navigation across all pages

### 👥 Lead Management
- [ ] View all leads in a list/table
- [ ] Add new leads manually
- [ ] Edit existing leads
- [ ] Delete leads

### 🔍 Lead Scraping
- [ ] Enter a website URL to scrape
- [ ] Display extracted emails & phone numbers
- [ ] Save scraped contacts as leads

### 📬 Email Campaigns
- [ ] Create email campaigns (subject, body, draft)
- [ ] Select leads for a campaign
- [ ] Send campaigns (mocked Outlook integration)
- [ ] Rotate multiple Outlook accounts

### 📊 Analytics
- [ ] View campaign history
- [ ] Basic email analytics (total sent, per campaign)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Laravel 12 |
| Frontend | React + TypeScript |
| Bridge | Inertia |
| Styling | Tailwind CSS |
| Database | SQLite |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/LaravelArtisans/Lead-Management.git
cd Lead-Management

# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate

# Start development servers
php artisan serve
npm run dev
```

---

## 🤝 Contributing

We welcome contributions! Check out our [open issues](https://github.com/LaravelArtisans/Lead-Management/issues) to get started.

**Good areas to contribute:**
- UI/UX improvements
- New scrapers for different websites
- Campaign analytics features
- Testing & documentation

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/LaravelArtisans">Laravel Artisans</a>
</p>
