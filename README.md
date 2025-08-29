# Universal Saver PopClip Extension

<div align="center">

![Universal Saver Logo](https://raw.githubusercontent.com/liujie2016/cubox-popclip-extension/main/Cubox%20Saver.popclipext/icon.svg)

**一键保存选中文本到任何支持API的服务的 PopClip 扩展**

[![Version](https://img.shields.io/badge/version-v1.0-blue.svg)](https://github.com/liujie2016/cubox-popclip-extension/releases)
[![PopClip](https://img.shields.io/badge/PopClip-4155+-green.svg)](https://pilotmoon.com/popclip/)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

[English](#english) | [中文](#中文)

</div>

## 中文

### 🎯 项目简介

Universal Saver PopClip Extension 是一个专为 macOS PopClip 应用设计的通用扩展插件，让您能够一键将选中的文本快速保存到任何支持API的服务中。无论是网页文章、PDF 文档还是任何应用中的文本，只需选中即可轻松保存。

### ✨ 功能特点

- 🚀 **一键保存**：选中文本后一键保存到配置的API服务
- ⚙️ **灵活配置**：支持自定义 API URL 和 API Key
- ✅ **实时反馈**：保存成功/失败即时提示
- 🔒 **安全可靠**：使用目标服务的 API，数据传输安全
- 📱 **异步处理**：不阻塞界面操作，用户体验流畅

### 📋 系统要求

- **操作系统**：macOS
- **PopClip 版本**：4155 或更高
- **API 服务账户**：需要一个支持文本保存API的服务账户

### 功能演示

![演示](https://github.com/user-attachments/assets/8fa918bb-8e12-4317-8087-978bebca4527)



### 🚀 快速开始

#### 1. 下载安装

```bash
# 克隆仓库
git clone https://github.com/duyananbryce/cubox-popclip-extension.git

# 进入目录
cd cubox-popclip-extension

# 双击安装
open "Cubox Saver.popclipext"
```

或者直接下载 [最新版本](https://github.com/duyananbryce/cubox-popclip-extension/releases) 并双击 `Cubox Saver.popclipext` 文件安装。

#### 2. 获取 API URL 和 API Key

**获取步骤**：
1. 访问目标服务的网站并登录
2. 找到 API 或开发者设置页面
3. 获取 API URL 和 API Key (或 Token)
4. 复制这些信息用于配置扩展

**API URL 格式**：
```
例如: https://aisdk.chatgo.pro/api/note/create
```

**API Key 格式**：
```
例如: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 3. 配置插件

1. 打开 PopClip 设置
2. 找到 "Universal Saver" 扩展
3. 配置以下选项：

| 配置项 | 说明 | 必需 |
|--------|------|------|
| **API URL** | 目标服务的 API 链接 | ✅ 必需 |
| **API Key** | 目标服务的 API Key 或 Token | ✅ 必需 |

### 📖 使用方法

1. **选中文本**：在任意应用中选中您想要保存的文本
2. **点击保存**：在 PopClip 弹出的操作栏中点击 "Save to API Service" 按钮
3. **查看结果**：插件会显示保存成功或失败的提示

### 🔄 Version History

| 版本 | 发布日期 | 主要更新 |
|------|----------|----------|
| **v1.0** | 2025-08-29 | 🎉 首次发布通用版本 |

### 🔧 故障排除

#### 常见错误及解决方案

| 错误信息 | 原因 | 解决方案 |
|----------|------|----------|
| "Please set API URL in settings" | 未配置 API URL | 在插件设置中添加目标服务的 API URL |
| "Please set your API URL" | 未配置 API URL | 在插件设置中添加目标服务的 API URL |
| "No text selected" | 未选中文本 | 请先选中一些文本再使用插件 |
| "Authentication failed" | API 认证失败 | 检查 API Key 是否正确 |
| "Network error" | 网络连接问题 | 检查网络连接或稍后重试 |
| "Using XMLHttpRequest requires the 'network' entitlement" | 缺少网络权限 | 确保扩展具有网络权限 |

#### Debugging Steps

1. **Verify API URL and API Key**:
   ```bash
   curl -X POST "YOUR_API_URL" \
        -H "Content-Type: application/json" \
        -H "Authorization: YOUR_API_KEY" \
        -d '{"content":"测试文本"}'
   ```

2. **Check Network Connection**: Ensure you can access the target service's website

3. **Reinstall Extension**: Delete the old version and reinstall

### 🛠️ 技术架构

#### 核心文件结构

```
Cubox Saver.popclipext/
├── Config.json          # 插件配置和元数据
├── action.js           # 核心逻辑实现
├── icon.svg            # 插件图标
└── README.md           # 说明文档
```

#### 技术特性

- **异步网络请求**：使用 XMLHttpRequest 异步模式，不阻塞 UI
- **错误处理机制**：完善的错误捕获和用户友好的错误提示
- **API 兼容性**：支持任何接受 JSON 格式文本内容的 API 服务
- **认证支持**：支持通过 Authorization 头进行 API Key 认证

### 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

### 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

### 🙏 致谢

- [PopClip](https://pilotmoon.com/popclip/) - 优秀的 macOS 文本操作工具
- 所有贡献者和用户的反馈

---

## English

### 🎯 Project Overview

Universal Saver PopClip Extension is a powerful extension designed for macOS PopClip application, enabling you to save selected text to any service with API with just one click. Whether it's web articles, PDF documents, or text from any application, you can easily save them.

### ✨ Features

- 🚀 **One-Click Save**: Save selected text to configured API service instantly
- ⚙️ **Flexible Configuration**: Customizable API URL and API Key
- ✅ **Real-time Feedback**: Instant success/failure notifications
- 🔒 **Secure & Reliable**: Uses target service's API with secure data transmission
- 📱 **Asynchronous Processing**: Non-blocking UI operations for smooth user experience

### 📋 Requirements

- **OS**: macOS
- **PopClip Version**: 4155 or higher
- **API Service Account**: An account with a service that supports text saving API

### 🚀 Quick Start

#### 1. Installation

```bash
# Clone repository
git clone https://github.com/duyananbryce/cubox-popclip-extension.git

# Enter directory
cd cubox-popclip-extension

# Install by double-clicking
open "Cubox Saver.popclipext"
```

Or download the [latest release](https://github.com/duyananbryce/cubox-popclip-extension/releases) and double-click the `Cubox Saver.popclipext` file.

#### 2. Get API URL and API Key

**Steps**:
1. Visit the target service's website and log in
2. Find the API or developer settings page
3. Get the API URL and API Key (or Token)
4. Copy this information for configuring the extension

**API URL Format**:
```
e.g. https://aisdk.chatgo.pro/api/note/create
```

**API Key Format**:
```
e.g. sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 3. Configure Extension

1. Open PopClip settings
2. Find "Universal Saver" extension
3. Configure the following options:

| Option | Description | Required |
|--------|-------------|----------|
| **API URL** | API link from target service | ✅ Required |
| **API Key** | API Key or Token from target service | ✅ Required |

### 📖 Usage

1. **Select Text**: Select the text you want to save in any application
2. **Click Save**: Click "Save to API Service" button in PopClip's action bar
3. **View Result**: The extension will show success or failure notification

### 🔄 Version History

| Version | Release Date | Key Updates |
|---------|--------------|-------------|
| **v5.4** | 2024-01 | 🔧 Added network entitlement, fixed XMLHttpRequest permission error |
| **v5.3** | 2024-01 | 🚀 Switched to asynchronous requests for better UX and stability |
| **v5.2** | 2024-01 | 🌐 Support for new API format `/c/api/save/TOKEN` |
| **v5.1** | 2024-01 | 🔗 Added cubox.pro domain support |
| **v5.0** | 2024-01 | 📝 Fixed PopClip standard format compatibility |
| **v4.x** | 2023-12 | 🐛 Multiple bug fixes and optimizations |
| **v1.0** | 2023-11 | 🎉 Initial release |

### 🔧 Troubleshooting

#### Common Errors and Solutions

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "Please set API URL in settings" | API URL not configured | Add target service's API URL in extension settings |
| "Please set your API URL" | API URL not configured | Add target service's API URL in extension settings |
| "No text selected" | No text selected | Select some text before using the extension |
| "Authentication failed" | API authentication failed | Verify the API Key is correct |
| "Network error" | Network connection issue | Check network connection or retry later |
| "Using XMLHttpRequest requires the 'network' entitlement" | Missing network permission | Ensure the extension has network permission |

### 🤝 Contributing

Contributions are welcome! Please feel free to submit Issues and Pull Requests.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Submit a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- [PopClip](https://pilotmoon.com/popclip/) - Excellent macOS text manipulation tool
- All contributors and users for their feedback

---

<div align="center">

**如果这个项目对您有帮助，请给个 ⭐️ Star！**

**If this project helps you, please give it a ⭐️ Star!**

</div>
