# 游码科技官方网站

## 项目简介
游码科技官方网站，展示公司的专业IT服务能力和技术实力。

## 技术栈
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## 开发环境
\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
\`\`\`

## 静态部署

### 1. 构建静态文件
\`\`\`bash
# 构建并导出静态文件
npm run deploy:build
\`\`\`

### 2. 部署到服务器
\`\`\`bash
# 创建网站目录
sudo mkdir -p /var/www/youma-tech

# 复制静态文件
npm run deploy:copy

# 配置nginx
npm run deploy:nginx

# 或者一键部署
npm run deploy:full
\`\`\`

### 3. 手动nginx配置
\`\`\`bash
# 复制nginx配置
sudo cp nginx.conf /etc/nginx/sites-available/youma-tech

# 启用站点
sudo ln -sf /etc/nginx/sites-available/youma-tech /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重载nginx
sudo systemctl reload nginx
\`\`\`

## 部署说明
- 网站支持完全静态化部署
- 使用nginx作为Web服务器
- 支持gzip压缩和静态资源缓存
- 包含安全头部配置
- 支持Next.js路由重写

## 联系信息
- 电话：17666060650
- 邮箱：boringmanman@qq.com
- 地址：北京市朝阳区
- 备案号：京ICP备18035428号
