# pnpm-lib-template
A pnpm library template.

# Get Start
## Install
```
pnpm i
```

## add packages dependenies
```
pnpm add @fa/components -r --filter @fa/example
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




