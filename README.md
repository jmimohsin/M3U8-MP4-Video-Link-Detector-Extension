# M3U8 & MP4 Video Link Detector

<p align="center">
  <img src="assets/icon.png" alt="Video Link Detector Logo" width="128">
</p>

<p align="center">
  <strong>Detect M3U8, MPD, MP4, WebM and MOV video links from any webpage.</strong>
</p>

<p align="center">
  A lightweight browser extension by <a href="https://coders-hub.com">Coders Hub</a> for detecting video and streaming URLs directly from network traffic.
</p>

<p align="center">
  <a href="https://github.com/jmimohsin/video-link-detector/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jmimohsin/video-link-detector" alt="License">
  </a>
  <img src="https://img.shields.io/badge/Manifest%20V3-blue" alt="Manifest V3">
  <img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-blue" alt="Open Source">
  <img src="https://img.shields.io/badge/Coders%20Hub-Developer%20Tool-0A84FF" alt="Coders Hub">
</p>

---

## 🎬 What is Video Link Detector?

**M3U8 & MP4 Video Link Detector** is an open-source browser extension that watches network traffic on the webpage you're viewing and detects video and streaming URLs.

It can detect:

* `.m3u8` HLS playlists
* `.mpd` DASH manifests
* `.mp4` video files
* `.webm` video files
* `.mov` video files

Detected links can be opened directly in the browser or sent to the appropriate **Coders Hub player or downloader**.

No account, analytics, or API key is required.

---

## ✨ Features

### 🔎 Detect Video Links

The extension monitors network traffic on the current webpage and lists detected video resources.

Supported formats include:

| Format  | Type          |
| ------- | ------------- |
| `.m3u8` | HLS playlist  |
| `.mpd`  | DASH manifest |
| `.mp4`  | MP4 video     |
| `.webm` | WebM video    |
| `.mov`  | MOV video     |

---

### 📺 HLS & DASH Detection

Automatically detect streaming manifests such as:

* M3U8 / HLS
* MPD / MPEG-DASH

This makes it easier to identify streaming resources used by websites.

---

### ▶️ Open in Coders Hub Player

Send a detected video or streaming URL directly to the **Coders Hub Online Media Player**.

Play supported video and streaming links directly from the browser.

---

### ⬇️ Send to Video Downloader

Detected links can also be opened in the appropriate Coders Hub downloader for further processing, including browser-based conversion to MP4 where supported.

---

### ⚡ Simple Workflow

1. Open a webpage containing a video.
2. Play or load the video.
3. Click the **Coders Hub Video Link Detector** icon.
4. View detected video and streaming URLs.
5. Open the link in the Coders Hub player or downloader.

---

## 🔐 Privacy

Privacy is a core part of the extension.

* ✅ Detected URLs stay in extension memory for the current tab.
* ✅ Captured URLs are cleared when the page reloads.
* ✅ Captured URLs are cleared when the tab closes.
* ✅ Nothing is uploaded.
* ✅ No analytics are used.
* ✅ No account is required.
* ✅ No API key is required.
* ✅ A URL leaves your browser only when you choose to open it in a Coders Hub player or downloader.

The extension does not maintain a server-side collection of the URLs it detects.

---

## 🌐 Browser Support

The extension is designed for modern browsers.

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅       |
| Edge    | ✅       |
| Firefox | ✅       |
| Brave   | ✅       |
| Arc     | ✅       |
| Opera   | ✅       |

The extension is available through the browser extension stores, and an unpacked build is also available for local installation.

---

## 📦 Installation

### From Browser Extension Stores

Install the extension from the official browser extension store for your browser when available.

### Install the Unpacked Version

You can also run the extension directly from the source code.

#### Chrome / Edge / Brave / Arc / Opera

1. Clone this repository:

```bash
git clone https://github.com/jmimohsin/video-link-detector.git
```

2. Open your browser's extensions page:

```text
chrome://extensions
```

3. Enable **Developer mode**.

4. Click **Load unpacked**.

5. Select the extension directory.

6. Open a webpage containing a video.

7. Play the video and click the **Coders Hub** extension icon.

8. Detected video and streaming URLs will appear in the extension.

---

## 🧑‍💻 Development

The extension is built as a browser extension using **Manifest V3** and standard web technologies.

### Project Structure

```text
video-link-detector/
├── assets/
│   ├── icon.png
│   └── screenshots/
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── popup.css
└── README.md
```

> The exact project structure may change as development continues.

---

## 🛠️ Coders Hub Integration

Detected links can be opened in Coders Hub tools for playback or processing.

### Online Media Player

Play detected video, audio, and streaming URLs.

**Coders Hub Online Media Player:**

https://coders-hub.com/tools/video/online-video-player

### Video Downloader

Send supported detected links to the Coders Hub downloader for processing and conversion where supported.

---

## 🤝 Contributing

Contributions are welcome!

You can help by:

* 🐛 Reporting bugs
* 💡 Suggesting features
* 🔧 Improving browser compatibility
* 🎬 Adding support for additional video formats
* 📖 Improving documentation
* 🎨 Improving the extension UI
* 🔀 Submitting pull requests

### Development Workflow

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/my-feature
```

3. Make your changes.
4. Test the extension in your browser.
5. Commit your changes:

```bash
git commit -m "Add my feature"
```

6. Push your branch:

```bash
git push origin feature/my-feature
```

7. Open a Pull Request.

---

## 🐛 Bug Reports

If you find a problem, please open a GitHub Issue.

Include:

* Browser and version
* Extension version
* Website where the issue occurred
* Video/stream format if known
* Steps to reproduce
* Expected behavior
* Actual behavior
* Screenshots or relevant logs

Please avoid posting private URLs, authentication tokens, cookies, or other sensitive information.

---

## ⭐ Support the Project

If this extension is useful to you:

* ⭐ Star the repository
* 🍴 Fork the project
* 🐛 Report bugs
* 💡 Suggest improvements
* 🤝 Contribute code
* ❤️ Support open-source development

You can support Coders Hub here:

https://coders-hub.com/support

---

## ⚖️ Responsible Use

This extension is intended for legitimate development, testing, debugging, research, and personal use.

Only access, download, convert, or replay media that you are authorized to access and use. Respect website terms of service, copyright, DRM, and applicable laws.

The extension does not bypass DRM or provide authorization to access protected content.

---

## 📜 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <a href="https://coders-hub.com">Coders Hub</a>
</p>
