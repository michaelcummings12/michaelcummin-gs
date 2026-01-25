---
trigger: always_on
---

When installing dependencies, you must strictly adhere to the workspace structure and dependency types. We use **Yarn** as the package manager.

* **Runtime Dependencies:** If the package is required for the application to run, install it as a standard dependency.
* **Development Dependencies:** If the package is only used during development or build time, you **must** use the `-D` flag.