# 🚀 Getting started with DocPro Backend

DocPro's backend is built using [Strapi](https://strapi.io), a powerful and flexible headless CMS. This guide will help you set up, develop, and deploy the backend efficiently.

## Development Scripts

Strapi provides a feature-rich [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) for managing your project.

### `develop`

Start your Strapi application with autoReload enabled for local development.

```bash
npm run develop
# or
yarn develop
```

### `start`

Run your Strapi application with autoReload disabled for production.

```bash
npm run start
# or
yarn start
```

### `build`

Build the admin panel for production.

```bash
npm run build
# or
yarn build
```

## Deployment

DocPro Backend can be deployed on various platforms. For our setup, the backend is hosted on [Render](https://render.com), but Strapi also supports deployments on platforms like AWS, Heroku, and DigitalOcean.

**Client Live Link:** [DocPro Frontend](https://docpro-app.vercel.app/)

**Server Live Link:** [DocPro Backend](https://docpro-app-backend.onrender.com/)

**Client Github Link:** [Frontend Github](https://github.com/KawsarCoder/DocPro-App)

**Server Github Link:** [Backend Backend](https://github.com/KawsarCoder/DocPro-APP-Backend)

### Build and Deploy

For Render or similar services, ensure that:

1. Environment variables are correctly set, including:
   - `DATABASE_URL` (PostgreSQL or other database connection string)
   - `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` (for image storage)
2. The Strapi build command is executed during deployment:

```bash
yarn build
```

For detailed deployment instructions, refer to the [deployment section of the Strapi documentation](https://docs.strapi.io/dev-docs/deployment).

## Features

- **Authentication**: Built-in role-based authentication system.
- **Image Management**: Integrated with Cloudinary for efficient media storage and retrieval.
- **Custom API Endpoints**: Supports filtering and relationship population.
- **Scalability**: Suitable for growing applications with modular architecture.

## 📚 Learn More

- [Strapi Resource Center](https://strapi.io/resource-center) - Comprehensive guides and resources.
- [Strapi Documentation](https://docs.strapi.io) - Official documentation.
- [Strapi Tutorials](https://strapi.io/tutorials) - Tutorials by the core team and the community.
- [Strapi Blog](https://strapi.io/blog) - News, updates, and tips.
- [Strapi GitHub Repository](https://github.com/strapi/strapi) - Source code and contributions.

## ✨ Community Support

- [Discord](https://discord.strapi.io) - Join the Strapi community for discussions and help.
- [Forum](https://forum.strapi.io) - Share ideas, ask questions, and find answers.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - Curated list of awesome tools and projects related to Strapi.

## Contributing to the Backend

If you want to contribute to the DocPro backend, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For issues or inquiries, feel free to reach out at [support@docpro.com](https://md-kawsar.netlify.app/).
