# Ember-yaml-cms

This README outlines the details of collaborating on this Ember addon.

## Install

```bash
$ npm install --save ember-yaml-cms
```

## TODO

  - [ ] Automatically create `cms` folder
  - [ ] Add tests

## How to use

- Create a a folder called `cms`
- Create yaml files inside `cms`

### Example structure

```
├─┬ cms
  ├─┬ index
  | ├── foo.yaml
  | └── bar.yaml
  └─┬ legal
    ├── terms.yaml
    ├── privacy.yaml
    └─┬ business-terms
      ├── cookies.yaml
      └── contract.yaml
```

### Converted structure

```
├─┬ assets
  └─┬ cms
    └── content.json
```
