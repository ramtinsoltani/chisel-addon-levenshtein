# Levenshtein (Chisel Mutator Addon)

Calculates the Levenshtein distance of two strings.

# Installation

Use the Chisel RESTful API, Chisel CLI, or Chisel GUI to install this mutator addon.

# Usage

After installation, this addon will be available on `api.mutators.addons.levenshtein` as a function with the following parameters:
  - `str1`: The first string.
  - `str2`: The second string.

## Example

```js
api.mutators.addons.levenshtein('Hello World!', 'Hello World'); // Returns 1
```
