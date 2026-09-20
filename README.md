# 数学个人主页

纯 HTML + CSS，无须安装 Node、运行构建命令或配置框架。双击 `index.html` 即可本地预览。

## 文件

- `index.html`：网站内容。中文注释标出了修改位置和可复制的研究/笔记条目。
- `style.css`：布局、字号和配色。
- `README.md`：这份使用说明，不会替代 index.html 首页。

## 1. 创建 GitHub 仓库

在 GitHub 点击右上角 + → New repository。

1. Owner 选择自己的账号。
2. Repository name 填 `你的用户名.github.io`。例如账号 `example` 对应 `example.github.io`，用登录用户名而非显示姓名。
3. 选择 Public。公开仓库中的源码和上传文件会公开。
4. 可以勾选 Add README，然后点击 Create repository。

如果已经有同名仓库，请先检查其内容，勿直接覆盖已有网站。

## 2. 上传源码

解压下载的 ZIP。在仓库里选 Add file → Upload files，将 `index.html`、`style.css`、`README.md` 放在仓库最外层，然后 Commit changes。初始空仓库也可通过页面中的 uploading an existing file 链接上传。

不要上传 ZIP 本身，也不要把整个 math-homepage 文件夹作为外层目录上传。仓库打开后应直接看见 index.html。

## 3. 发布

Settings → Pages → Build and deployment：

- Source：Deploy from a branch
- Branch：main
- Folder：/(root)
- 点击 Save

等待 GitHub 完成发布后，打开 Pages 页面显示的网址，一般为 `https://你的用户名.github.io/`。更新可能需要最多约 10 分钟。

官方说明：https://docs.github.com/en/pages/quickstart

## 4. 修改内容

在 GitHub 打开 index.html，点击铅笔图标编辑，完成后 Commit changes；网站会重新发布。也可以先在电脑用文本编辑器修改、双击预览，再上传。

发布前核对姓名、学校和简介。目前 Research、Notes、CV & Contact 是占位文字，没有虚构论文、邮箱或无效的 PDF 链接。

添加笔记或 CV 时，在仓库创建 `files` 文件夹并上传 PDF，例如 `files/cv.pdf`。然后启用 index.html 对应的注释示例，填写真实标题和路径，删除占位文字。示例中 `<!--` 与 `-->` 包围的是注释，不会显示在网页中；取消注释时也删除中文编辑说明。

添加条目：复制一个 `<article class="entry">...</article>` 块，修改标题、简介和链接。

只想换颜色：修改 style.css 最上方的 `--accent` 等变量。

这个版本无需 JavaScript。以后需要正文中的数学公式渲染、独立笔记页面等功能时，可以再扩展。
