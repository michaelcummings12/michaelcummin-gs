# michaelcummin.gs

Hey there! This is the source code that powers my personal portfolio, [michaelcummin.gs](https://www.michaelcummin.gs/). The site showcases my work and projects using a design inspired by the [Apple Springboard](https://apple.fandom.com/wiki/SpringBoard) interface (an homage to the golden days of jailbreaking)

## Project Structure

This repository is organized as a monorepo using [Yarn Workspaces](https://yarnpkg.com/features/workspaces). It allows for shared configuration and dependencies across multiple packages while keeping the codebase modular and organized.

### Packages

The project consists of the following packages located in the `packages/` directory:

-   **`packages/web`**: The frontend application built with [Next.js](https://nextjs.org/). 
-   **`packages/backend`**: The backend infrastructure defined using [AWS CDK](https://aws.amazon.com/cdk/). 

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   **Node.js**: Ensure you have Node.js installed.
-   **Yarn**: This project uses Yarn as the package manager.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/michaelcummings12/michaelcummin-gs.git
    cd michaelcummin-gs
    ```

2.  **Install dependencies:**

    This will install dependencies for the root and all workspaces.

    ```bash
    yarn install
    ```

## Development

You can run scripts for individual packages from the root directory or by navigating into the package directories.

### Web (Frontend)

To start the Next.js development server:

```bash
yarn workspace web dev
```

Or navigate to the directory:

```bash
cd packages/web
yarn dev
```

The application will be available at `http://localhost:3000`.

### Backend (Infrastructure)

To deploy the AWS CDK backend infrastructure:

1.  **Configure AWS Credentials**: Make sure you have your AWS credentials configured in your environment or via `~/.aws/credentials`.

2.  **Deploy the Stack**:

    Run the deployment command from the root:

    ```bash
    yarn workspace backend cdk deploy
    ```

    Or from the package directory:

    ```bash
    cd packages/backend
    yarn cdk deploy --all
    ```

# License

This repository is **public for transparency and educational reference**, but it is **NOT open source**.

The code, design, content, and assets in this repository are **proprietary** and remain the intellectual property of **Michael Cummings**.

You may:

- view the source code
- study the implementation
- use it for learning or reference


See the [LICENSE](LICENSE) for details.