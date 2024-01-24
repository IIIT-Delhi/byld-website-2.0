<div align="center">
  
# Byld Website 2.0

[![React](https://img.shields.io/badge/react-222222?style=for-the-badge&logo=react)](https://www.react.dev/) [![Astro](https://img.shields.io/badge/astro-bc52ee?style=for-the-badge&logo=astro&logoColor=white)](https://www.astro.build/) [![Tailwind](https://img.shields.io/badge/tailwind-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://www.tailwindcss.com/) [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)

Complete Rewrite of the old Byld website using modern tools

</div>

## Notes

- If someone encounters an error when using shadcn ui, like with nested ui components from it, for example, some error like: `Component A needs to be inside Component B` and you already
  have A inside B then try looking into this [article](https://spacemadness.dev/docs/add-a-shadcn-ui-component/) and the `Navbar.tsx` file in the `components` directory. This problem is caused by Astro's island architecture.
