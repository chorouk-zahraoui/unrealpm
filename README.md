# unrealpm


Work in progress for UE4 packet manager based on NPM registry
 
## Installation

```bash
$ npm install unrealpm -g
```

## Workflow for game designers

```bash
$ cd <game directory>
$ upm init
$ upm install <some cpp module> --save
```

## Workflow for module designers
- Generate the package.json file for the module
```bash
$ upm init
```
- Install dependencies (if needed) 
```bash
$ upm install <dependencies> --save
```
- Write your code
```bash
# code your module 
```
- Publish on npm registry
```bash
$ upm publish
```