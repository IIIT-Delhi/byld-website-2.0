<div align="center">
  
# Byld Website 2.0

[![React](https://img.shields.io/badge/react-222222?style=for-the-badge&logo=react)](https://www.react.dev/) [![Astro](https://img.shields.io/badge/astro-bc52ee?style=for-the-badge&logo=astro&logoColor=white)](https://www.astro.build/) [![Tailwind](https://img.shields.io/badge/tailwind-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://www.tailwindcss.com/) [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)

Complete Rewrite of the old Byld website using modern tools

</div>

## Contributing

To contribute to this code:

- Create a Fork of the repository

<img src="https://i.imgur.com/vEZZivz.png"/>

- Clone the repository localy: `git clone https://github.com/{yourusername}/byld-website-new`

- Run `npm install` to install all the packages, and `npm run dev` to start the development server.

- Make the changes as needed and commit wit an appropriate message, we don't mandate a template for the git messages, but be descriptive take a look at other commits for reference.

- Once done revisit your fork and you would find a button to contribute, click this.

- This will open a pull request for your changes to the repository. Now wait for your pull request to be reviewed and merged.

## Tools used

- [Astro](https://astro.build/)
- [React.js](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/docs)

## Directory structure

```
.
├── astro.config.mjs
├── components.json
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   ├── fonts
│   │   └── Kusanagi.woff
│   ├── left.svg
│   └── right.svg
├── README.md
├── src
│   ├── assets
│   │   ├── byld-logo.png
│   │   ├── hackathons.jpg
│   │   ├── hacknights.jpg
│   │   ├── iiitd-logo.png
│   │   └── techtalks.jpg
│   ├── components
│   │   ├── About.astro
│   │   ├── EventCard.tsx
│   │   ├── Events.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HomeEventCards.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projectcards.tsx
│   │   ├── Projects.astro
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── navigation-menu.tsx
│   │       └── table.tsx
│   ├── content
│   │   ├── config.ts
│   │   ├── hackathons
│   │   │   ├── devhaven.md
│   │   │   └── hackathon-1.md
│   │   ├── hacknights
│   │   │   └── hacknight-1.md
│   │   ├── home
│   │   │   ├── eve.tsx
│   │   │   └── projects.json
│   │   └── techtalks
│   │       └── techtalk-1.md
│   ├── env.d.ts
│   ├── layouts
│   │   └── MySiteLayout.astro
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── hackathons.astro
│   │   ├── hacknights.astro
│   │   ├── index.astro
│   │   ├── members.astro
│   │   └── techtalks.astro
│   └── styles
│       └── globals.css
├── tailwind.config.js
└── tsconfig.json
```

- `src/` - root of the whole project
- `tailiwind.config.js` - config for your tailwind files
- `src/components` - all the components are stored here
- `src/components/ui` - contains all the shadcn components, don't change things in this manually, unless you absolutely want to.
- `src/pages` - All the pages in the website are stored here
- `src/styles/globals.css` - The top-level and only css file in the whole thing, custom classes put here.
- `src/layouts` - this directory contains the layouts for your pages

## Notes

- If someone encounters an error when using shadcn ui, like with nested ui components from it, for example, some error like: `Component A needs to be inside Component B` and you already
  have A inside B then try looking into this [article](https://spacemadness.dev/docs/add-a-shadcn-ui-component/) and the `Navbar.tsx` file in the `components` directory. This problem is caused by Astro's island architecture.
