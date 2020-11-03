# FaceFoo

<img src="https://raw.githubusercontent.com/moisestech/facefoo-react/master/public/Facefoo_logo.png" width="150px" />

## Social Media Posting application

## 👁️‍🗨️ Project Preview

Coming Soon!

## Features

- React + React Hooks
- React Context APU -> Redux Pattern
- Material UI
- Flexbox
- Firebase’s Firestore Realtime DB
- Firebase Hosting
- Firebase Google Authentication (Will change to Auth0)
- React Flip move

## 🗺 URL Tree

```bash
├── /                   #Home
├── /search             #Search
└── /*                  #404
```

## 🌿 App Root

```bash
├── README.md
├── package.json
├── public
│   ├── _redirects
│   ├── facefoo_logo.png
│   └── index.html
├── src
│   ├── components
│   │   ├── Feed
│   │   │   ├── components
│   │   │   │   ├── MessageSender
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── message-sender.css
│   │   │   │   ├── Post
│   │   │   │   │   ├── PostOptions
│   │   │   │   │   │   └── index.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── post.css
│   │   │   │   └── StoryReel
│   │   │   │       ├── Story
│   │   │   │       │   ├── index.js
│   │   │   │       │   └── story.css
│   │   │   │       ├── index.js
│   │   │   │       └── story-reel.css
│   │   │   ├── feed.css
│   │   │   └── index.js
│   │   ├── Header
│   │   │   ├── header.css
│   │   │   └── index.js
│   │   ├── Sidebar
│   │   │   ├── components
│   │   │   │   └── SidebarRow
│   │   │   │       ├── index.js
│   │   │   │       └── sidebar-row.css
│   │   │   ├── index.js
│   │   │   └── sidebar.css
│   │   └── Widgets
│   │       ├── index.js
│   │       └── widgets.css
│   ├── contexts
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Home
│   │   │   └── index.js
│   │   ├── Login
│   │   │   ├── index.js
│   │   │   └── login.css
│   │   └── NotFound
│   │       ├── index.js
│   │       └── not-found.css
│   ├── state
│   │   ├── StateProvider.js
│   │   ├── firebase.js
│   │   └── reducer.js
│   └── utils
│       └── admin.js
└── webpack.config.js
```

## ⛰️ Roadmap

- Mobile

## 📝 Todos

- Implement Firebase
- Create .env variables
- Setup Webpack with environment variables config
