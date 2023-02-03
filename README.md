# Welcome to **DT Money**💰
DT Money is the third Ignite project in the React trail 2022. 
The application serves to organize your cash inflows and outflows, making it possible to:
- List transactions;
- Search for a specific transaction;
- Create a new transaction;
- Show the calculated total according to what is being presented on screen;

![Captura de Tela (159)](https://user-images.githubusercontent.com/51724518/216494827-efda7f63-3a44-4359-8b78-d94f9240e7ba.png)

## Techs:
The application was built with **vite**, from a **react-ts** template. Strategies used:
- **Styled Components** for styling;
- **Typescript** in data typing;
- **phosphor-react** for availability of icons;
- **axios** for execute API requests;
- **json-server** for use a fake API in development;
- **react-hook-form** for form handling;
- **zod** for form validations;
- **ContextAPI** for global state handling;
- **use-context-selector** for “watch” context updates for specific values and thus improve performance.

## Get started:
- With Git installed, in your terminal run the following command: *git clone https://github.com/VitinhoSouza/03-dt-money.git*;
- Enter the project folder and do: *npm install*. When all packages are installed, do *npm run dev* to start in development mode.
- Attention: For the application to work correctly, in addition to running the project with *npm run dev*, you must also run the **json-server** server with *npm run dev:server*, 
a command configured in package.json.
