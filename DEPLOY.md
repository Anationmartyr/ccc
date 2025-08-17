# 部署到GitHub Pages指南

## 前提条件
- 确保已将代码推送到GitHub仓库
- 确保已安装Node.js和pnpm

## 部署步骤

### 1. 安装部署依赖
```bash
pnpm add -D gh-pages
```

### 2. 修改package.json
添加部署脚本:
```json
"scripts": {
  // ... 其他脚本
  "deploy": "gh-pages -d dist -b gh-pages"
}
```

### 3. 构建项目
```bash
pnpm build
```

### 4. 部署到GitHub Pages
```bash
pnpm deploy
```

### 5. 配置GitHub仓库
1. 打开仓库设置(Settings)
2. 导航到"Pages"部分
3. 在"Source"下选择"gh-pages"分支
4. 点击"Save"保存设置

### 6. 访问您的网站
通常在几分钟后，您的网站将可通过以下URL访问:
`https://<您的GitHub用户名>.github.io/<仓库名称>/`

## 故障排除
- 如果页面空白，检查浏览器控制台是否有404错误，这通常是资源路径问题
- 确保构建命令正确输出到dist目录
- 检查GitHub Pages设置中的部署状态