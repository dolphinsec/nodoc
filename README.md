# nodoc

![GitHub License](https://img.shields.io/github/license/dolphinsec/nodoc)
[![Postman Workspace](https://img.shields.io/badge/dolphinlabs-ef5b25?logo=postman&logoColor=white)](https://www.postman.com/dolphinlabs/workspace/nodoc)

documenting the undocumented

nodoc is a project created by Dolphin Labs to enable deeper understanding and utilisation of undocumented APIs in cloud services. The project consists of OpenAPI specifications for APIs that were previously undocumented (at least publicly). By documenting these APIs, we hope to empower security teams to greater understand the attack surface of these services.

The project currently consists of the following API definitions:

- [Ibiza IAM](https://github.com/dolphinsec/nodoc-ibiza-iam)

## Usage

nodoc was designed to be fairly agnostic in how you consume the specification. This allows you to use whatever documentation, client SDK, or test suite, generation tools that you like. For example, the following tools could be used against the specifications:

- [AutoRest](https://github.com/Azure/autorest)
- [OpenAPI Generator](https://openapi-generator.tech/)
- [Insomnia](https://docs.insomnia.rest/insomnia/import-export-data)
- [Bruno](https://www.usebruno.com/)
- [Redocly](https://redocly.com/)

Currently, nodoc utilises OpenAPI 3.0.1 for specifications (see note in [roadmap](#roadmap)). These are typically done following a multi-file approach using [`$ref`](https://swagger.io/docs/specification/using-ref/) links. Bundled single-file definitions should be available within each of the individual API repository releases for convenience and compatibility purposes.

To make things easier, we've published the OpenAPI definitions in a couple of different ways as detailed below.

### Website

The website is accessible at [nodoc.cloud](https://nodoc.cloud), it is built using [Docusaurus](https://docusaurus.io/) and [Scalar](https://github.com/scalar/scalar) and hosted with [Netlify](https://www.netlify.com/). The files for the website are stored within this repository.

### Postman

Postman collections and API definitions can be found for all nodoc APIs within [this workspace](https://www.postman.com/dolphinlabs/workspace/nodoc). These are currently autogenerated from the specification using [openapi-to-postman](https://github.com/postmanlabs/openapi-to-postman).

## Roadmap

These are project wide roadmap items:

- [ ] Support [OpenAPI Links](https://swagger.io/docs/specification/links/)
- [ ] Migrate to OpenAPI 3.1 ([blocker](https://community.postman.com/t/unable-to-validate-this-definition-when-choosing-3-1-0/56871/2))
- [ ] Improve Postman collection generation to avoid ID regeneration

## Contribution

We welcome any contributions to this project. Please feel free to fork the project and raise any pull requests to be merged back in.

## Anything else?

If you're unsure of anything, please reach out through a GitHub issue and we'll be happy to help.
