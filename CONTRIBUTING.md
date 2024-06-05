# Contributing Guide

Thanks for checking out this guide - we really appreciate any contributions to the project. This page outlines high-level guidance for contributing to any of the nodoc project, whether that be in this repository specifically, or within the seperate API repositories.

We welcome a range of contributions including updates to:

- Specifications
- Website
- Documentation
- CI/CD

## OpenAPI

Unless otherwise specified, we use OpenAPI 3.0.1. Whilst we have plans to upgrade to 3.1.x, there are compatibility issues with some tools keeping us on this version for now.

## Styling

When contributing, please ensure that submissions conform to the linting configured within each corresponding repository. This is typically as follows:

| Language  | Linter     | Configuration File |
| --------- | ---------- | ------------------ |
| `yaml`    | `yamllint` | `.yamllint.yaml`   |
| `OpenAPI` | `redocly`  | `redocly.yaml`     |
