# <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="react" width="30" height="30"/> Shopping Cart ReactJs <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="react" width="30" height="30"/>

- [Deployed Shopping Cart ReactJs](https://laurentiucozma12.github.io/shopping-cart-reactjs/)
- This project is just for learning purpose.

## Start the server

```
yarn dev
```

## Commands

- React router

```
yarn add react-router-dom phosphor-react
```

- Tailwind

```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

    - Create config file
    ```
    npx tailwindcss init
    ```
    - tailwind.config.js
    ```
        /** @type {import('tailwindcss').Config} */
        export default {
            content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
            theme: {
                extend: { },
            },
            plugins: [],
        };
    ```

- Prettier

```
yarn add --dev prettier prettier-plugin-tailwindcss
yarn add eslint-config-prettier@^9.1.0
```

    - After running the commands, don't forget to restart Visual Studio Code
    - Manual format
    ```
    yarn prettier --write
    ```
    - .prettierrc.json
    ```
    {
        "singleQuote": true,
        "plugins": ["prettier-plugin-tailwindcss"]
    }
    ```

## Resources

- [React Shopping Cart Ecommerce Beginner Website - Build & Deploy A React Beginner Project](https://www.youtube.com/watch?v=tEMrD9t85v4)
- [Create React App and Yarn](https://dev.to/ashirbadgudu/set-up-tailwind-css-with-create-react-app-and-yarn-pio)
