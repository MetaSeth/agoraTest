# Issue Illustration for AgoraIO Library

## Overview

This repository serves as a demonstration of the issue encountered with the AgoraIO library, specifically referenced in [Issue #1504](https://github.com/AgoraIO/Docs-Source/issues/1504) on the AgoraIO Docs-Source GitHub page.

## Issue Description

he issue pertains to a discrepancy between the AgoraIO library documentation and the actual implementation requirements. Specifically, the documentation indicates that a function within the library requires only six parameters. However, when performing type cheracking by converting the file to TypeScript, it becomes evident that seven pameters are expected, leading to confusion and potential implementation errors.

Additionally, it is crucial to install the agora-token package for proper functionality. Users can do so by running the command:

```
npm i agora-token
```

## Workaround

As a solution, I added "tokenExpirationInSeconds" as an additional parameter in the function call. This workaround aligns the implementation with TypeScript's expectations and allows the function to execute without errors.
