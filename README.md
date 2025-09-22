

# Team Direction Guide on 

## React + TypeScript + Vite + Claude Code + Figma MCP Server + Visual Studio Code

> This boilerplate provides a modern development environment for students learning React with TypeScript, featuring integration with Claude Code, Figma's Model Context Protocol (MCP) Server, and Visual Studio Code.


## `Project Tech Stack & Learning Guide`

> This project is built with a modern, industry-standard tech stack designed to provide a comprehensive and efficient development experience. Here’s a breakdown of the tools and how they work together:

**React:** A powerful JavaScript library for building dynamic and interactive user interfaces with reusable components.

**TypeScript:** A superset of JavaScript that adds static type definitions. It helps catch errors during development, makes the code more self-documenting, and provides a better developer experience through superior editor support.

**Vite:** A next-generation build tool and development server. It offers incredibly fast startup and hot-module replacement (HMR), making the development process smooth and responsive.

**Claude Code & Figma MCP Server:** This setup integrates AI directly into the development workflow. The Figma Model Context Protocol (MCP) server allows Claude (an AI assistant) to read your Figma design files. This means you can ask Claude questions about your designs, generate code based on components, and get style information without leaving your editor.

**Visual Studio Code:** A highly popular and customizable code editor with excellent support for React, TypeScript, and extensions that enhance productivity.


## Why This Stack?
> This combination provides a robust foundation for learning: **Vite** offers speed and simplicity, **React + TypeScript** ensures scalable and reliable code, and the **Claude + Figma** integration introduces you to the cutting edge of AI-assisted development, bridging the gap between design and implementation.


## Simple: Perfect Prompt for Claude + Figma MCP I Used

```Prompt
**Example:**  Convert this Change temporary password in selected Sign Up with Authentication frame to responsive cross platform code https://www.figma.com/design/v4AUXxUEwR18jyODZ6dM1e/techLobby-Admin?node-id=20-894&m=dev Move all image files to respective assets folder and strickly follow my designs without any cold breaking.
```

# Project Structure

```bash
  src/
  ├── components/     # Reusable UI components
  ├── pages/         # Route components
  ├── hooks/         # Custom React hooks
  ├── utils/         # Helper functions
  ├── types/         # TypeScript type definitions
  ├── assets/        # Images, styles, and other static files
  └── router/        # Application routing configuration
```

## Clone Project

Clone the project to your local machine

```bash
  git clone https://github.com/bossoff/ReactJS-TypeScript-Boiler-Plate.git
```

## Scaffold Installation

## Installation

```bash
  $ npm install
```

## Running the app

```bash
  # development

  $ npm run dev

  # production mode

  $ npm run build
```

# If cannot find module @rollup/rollup-win32-x64-msvc error?

> This is a common issue with npm's handling of optional dependencies, particularly with Rollup's native binaries. The error message actually provides the solution - here's how to fix it:

```bash
  # Force reinstall the specific Rollup package

  $ npm install @rollup/rollup-win32-x64-msvc --save-optional

  # Update Node.js and npm

  $ npm install -g npm@latest

```

# Setting up Figma MCP Server with Claude Code

## Install Claude Code on your machine 
```bash
  # Claude Code installed

  $ npm install -g @anthropic-ai/claude-code

```
## Transport MCP

```bash 

  # Connect and transport claude wih MCP server
  
  $ claude mcp add --transport sse figma-dev-mode-mcp-server http://127.0.0.1:3845/sse

```

## Verify MCP Server

```bash 

  # To verify is your MCP server is connected 
  
  $ claude mcp list

  > You should see figma-dev-mode-mcp-server in the list.

```

## Author

>  # [Bossoff](https://github.com/bossoff)


## License

[MIT](https://choosealicense.com/licenses/mit/)



























