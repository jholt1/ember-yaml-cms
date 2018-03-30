# ember-yaml-cms

## Install

```bash
$ npm install --save ember-yaml-cms
```

## How to use

- Create a folder called `cms`
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

### Options

In your `ember-cli-build` you can add the option to name the folder

```
let app = new EmberAddon(defaults, {
  'ember-yaml-cms': {
    folder: 'cms-data'
  }
});
```
