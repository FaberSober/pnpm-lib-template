# pnpm-lib-template
A pnpm library template.

# Get Start
## Install
```
pnpm i
```

## add packages dependenies
```
pnpm add @farando/components -r --filter @farando/example
pnpm add @farando/ui -r --filter @farando/example
```

## run start
```
pnpm run start:exam
```

## develop 
```
# 1-1 进行了一些开发...
# 1-2 提交变更集
pnpm changeset

# 1-3 提升版本
# changeset version
pnpm version-packages 

# 1-4 发包
# pnpm build && pnpm changeset publish --registry=...
pnpm release 
```

## commit
```
pnpm commit
```




