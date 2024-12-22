# AI 聊天助手

这是一个基于 Next.js 开发的 AI 聊天助手应用，提供简洁的用户界面和基础的对话功能。

## 功能特点

- 💬 即时消息对话界面
- 🌓 自适应暗黑模式
- 📱 响应式设计，支持移动端和桌面端
- ⚡ 快速响应的用户界面
- 🤖 基础的 AI 对话能力

## 开始使用

1. 首先，克隆项目并安装依赖：

```bash
git clone [项目地址]
cd [项目目录]
npm install
```

2. 运行开发服务器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看运行结果。

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- TypeScript - 开发语言

## 项目结构

```
src/
├── app/
│   ├── page.tsx      # 主页面组件
│   ├── layout.tsx    # 布局组件
│   └── globals.css   # 全局样式
```

## 自定义开发

你可以通过修改 `src/app/page.tsx` 来更新页面内容。文件修改后页面会自动更新。

## 部署

推荐使用 [Vercel](https://vercel.com) 进行部署：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 等待自动部署完成

## 开发计划

- [ ] 添加更多对话场景
- [ ] 接入真实的 AI API
- [ ] 添加用户认证
- [ ] 支持消息历史记录
- [ ] 添加更多个性化设置

## 贡献指南

欢迎提交 Pull Request 或创建 Issue！

## 许可证

[MIT License](LICENSE)
