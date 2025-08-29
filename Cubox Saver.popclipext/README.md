# Universal Saver PopClip Extension

一个用于将选中文本快速保存到任何支持API的服务的 PopClip 插件。

## 功能特点

- 🚀 一键保存选中的文本到任何支持API的服务
- ⚙️ 可配置的 API URL
- ✅ 实时反馈操作结果
- 🔒 安全的 API 调用

## 安装方法

1. 双击 `Cubox Saver.popclipext` 文件
2. PopClip 会自动安装插件

## 配置

安装后，需要在 PopClip 的插件设置中配置以下选项：

### 必需配置
- **API URL**: 你的 API 链接
  - 默认链接：`https://dinoai.chatgo.pro/openapi/text/input`
  - 获取方式：请参考目标服务的官方文档

## 使用方法

1. 在任意应用中选中你想要保存的文本
2. 在 PopClip 弹出的操作栏中点击 "Save to API Service" 按钮
3. 插件会自动将文本保存到配置的API服务并显示操作结果

## 注意事项

- ⚠️ **请妥善保管你的 API 链接和认证信息**
- 📊 请遵守目标服务的 API 调用限制

## 故障排除

- **"Please set your API URL"**: 需要在插件设置中配置 API URL
- **"No text selected"**: 请先选中一些文本
- **"Failed to save"**: 检查 API URL 是否正确，或网络连接
- **"Network error"**: 检查网络连接

## 技术信息

- 支持的 PopClip 版本：4155+
- 使用目标服务的 Open API
- 保存类型：text note（文字笔记）