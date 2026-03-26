# 🎨 Live Team AI — Figma Plugin

**🇬🇧 EN** | [🇷🇺 RU](#-русский) | [🇹🇷 TR](#-türkçe)

AI-powered image generator, editor, and upscaler directly inside Figma. Generate stunning images, edit them with paint-to-fix tools, upscale to HD, and resize to any dimension.

![Live Team AI](https://img.shields.io/badge/Figma-Plugin-5AC40A?style=for-the-badge&logo=figma&logoColor=white)
![Models](https://img.shields.io/badge/Models-3-blue?style=for-the-badge)
![HD](https://img.shields.io/badge/HD-Real--ESRGAN-ff6b9d?style=for-the-badge)

---

## ✨ Features

### Image Generation
- 🍌 **Nano Banana 2** — Fast AI image generation (Google AI)
- 🍌 **Nano Banana Pro** — Photorealistic results (Google AI)
- 🖼 **Imagen 4 Ultra** — Highest quality (Google AI)
- 📎 **Reference Image** — Upload a reference, AI matches the style
- 🔢 **1-4 Variants** — Generate multiple variations at once

### Editing
- ✏️ **Paint-to-Edit** — Select any image, paint the area to fix, AI edits only that area
- 🖌 **Brush Tool** — Adjustable brush size
- 🧹 **Eraser** — Fix mistakes in your mask
- 🎯 **Precise Editing** — Only painted areas change, rest stays pixel-perfect

### HD Upscale
- 🔍 **Real-ESRGAN** — Professional AI upscaling via Replicate
- 👤 **Face Enhance** — GFPGAN face correction included
- 📏 **Original Size** — Output matches your original dimensions

### Resize
- 📐 **Multi-Size Export** — Resize to multiple sizes at once
- ➕ **Custom Sizes** — Add any W×H dimension
- 🎯 **Character Position** — Left / Center / Right alignment
- 🖼 **High Quality** — 2x export scale, no compression

### Other
- 🌍 **3 Languages** — Russian, English, Turkish (select on startup)
- 📊 **Progress Bar** — Real-time generation tracking

---

## 🔑 API Keys Required

| Key | For | Cost | Get it at |
|-----|-----|------|-----------|
| **Google AI** | Image generation + editing | Free ($300 credit) | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| **Replicate** | HD upscale (Real-ESRGAN) | ~$0.002/image | [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens) |

> Google AI key is required. Replicate key is optional (only needed for HD).

---

## 🚀 Installation (3 steps)

### Step 1: Clone the plugin

```bash
git clone https://github.com/S3CO/liveteam-ai-figma.git
```

> Don't have Git? [Download ZIP](https://github.com/S3CO/liveteam-ai-figma/archive/refs/heads/main.zip) and extract it.

### Step 2: Import into Figma

1. Open **Figma Desktop** app (plugin won't work in browser)
2. Open any file
3. Click **Plugins** → **Development** → **Import plugin from manifest...**
4. Navigate to the cloned folder and select **`manifest.json`**
5. Done! Plugin appears under **Plugins → Development → Live Team AI**

### Step 3: Enter API Keys

1. Select your language (RU / EN / TR)
2. Enter your **Google AI API Key** (`AIzaSy...`)
3. Enter your **Replicate Key** (`r8_...`) — optional, for HD only
4. Click **Start!**

---

## 🔑 Google AI Key Setup — Detailed Guide

### Step 1: Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. If you don't have a project, click **"Select a project"** → **"New Project"**
3. Name it anything (e.g., `LiveTeam`) → click **"Create"**

### Step 2: Enable Billing & Link to Project

1. In Google Cloud Console, go to **☰ Menu** → **Billing**
2. Click **"Create billing account"** if you don't have one → enter credit card
3. **IMPORTANT:** Go back to your project → **☰ Menu** → **Billing**
4. Click **"Link a billing account"** → select your billing account
5. If you see **"Activate billing"** anywhere — click it!

> ⚠️ **Common mistake:** Having a billing account is NOT enough. You must **link it to your project**.

> 💡 Google gives $300 free credit (90 days). Image generation costs only $0.001-0.005 per image.

### Step 3: Enable the API

1. In Google Cloud Console, go to **☰ Menu** → **APIs & Services** → **Library**
2. Search for **"Generative Language API"**
3. Click on it → click **"Enable"**

### Step 4: Create your API Key

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Click **"Create API Key"**
3. Select the project where you enabled billing
4. Copy the key (starts with `AIzaSy...`)
5. Paste it into the plugin

---

## 🔍 HD Upscale Setup (Optional)

HD uses **Real-ESRGAN** via Replicate API for professional quality upscaling.

1. Go to [replicate.com](https://replicate.com) → sign up
2. Go to [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
3. Create a token (starts with `r8_...`)
4. Add credit: [replicate.com/account/billing](https://replicate.com/account/billing) — ~$0.002 per upscale
5. Paste the token into the plugin on startup

---

## 🤖 Models

| Model | Speed | Quality | Cost |
|-------|-------|---------|------|
| 🍌 Nano Banana 2 | ⚡ Fast | ★★★★☆ | **Free** |
| 🍌 Nano Banana Pro | 🔄 Medium | ★★★★★ | **Free** |
| 🖼 Imagen 4 Ultra | 🔄 Medium | ★★★★★ | **Free** |

---

## 📐 Preset Sizes

`1024×1024` · `1024×1536` · `1536×1024` · `512×512` · `1080×1080` · `1080×1920` · `900×600` · `1200×628` · `568×286` · `492×400` · `1152×360` + custom

---

## 🛠 How to Use

### Generate Images
1. Write a prompt describing your image
2. Select model (Banana 2 / Banana Pro / Imagen Ultra)
3. Choose variant count (1-4)
4. Select sizes
5. Click **Create**

### Edit Images (Paint-to-Fix)
1. Select any image on your Figma canvas
2. Click **Edit** button
3. Paint over the area you want to fix (red brush)
4. Write what to change (e.g., "fix the fingers", "change dress color")
5. Click **Fix** — AI edits only the painted area

### HD Upscale
1. Select any image on your Figma canvas
2. Click **HD** button
3. Real-ESRGAN enhances the image with face correction
4. Result placed at original dimensions

### Resize
1. Select any image on your Figma canvas
2. Choose target sizes
3. Set character position (Left / Center / Right)
4. Click **Resize** — high quality copies created

---

## Troubleshooting

| Error | Solution |
|-------|----------|
| `Quota exceeded, limit: 0` | Billing not linked. See setup guide above. |
| `API key not valid` | Wrong key. Create a new one from the billing-enabled project. |
| `Model not found` | Try a different model (Banana 2 or Imagen 4 Ultra). |
| `Safety filter` | Rephrase your prompt, avoid explicit content. |
| `Failed to fetch` (HD) | Check Replicate key is correct and has credit. |
| Keys not accepted | Make sure no extra spaces when pasting keys. |

---

## 📁 Structure

```
liveteam-ai-figma/
├── manifest.json    # Plugin config + allowed domains
├── code.js          # Figma canvas logic (export, resize, place)
├── ui.html          # Plugin UI + AI integration
└── README.md        # Documentation (EN/RU/TR)
```

---

# 🇷🇺 Русский

## 🎨 Live Team AI — Плагин для Figma

AI генератор, редактор и апскейлер изображений прямо внутри Figma.

### ✨ Возможности

- 🎨 **3 AI модели** — генерация изображений (Banana 2, Banana Pro, Imagen Ultra)
- ✏️ **Рисуй и исправляй** — выбери изображение, закрась область, AI исправит только её
- 🔍 **HD апскейл** — Real-ESRGAN через Replicate (нужен ключ Replicate)
- 📐 **Мульти-ресайз** — изменение размера с сохранением качества
- 📎 **Референс** — загрузи референс, AI повторит стиль
- 🌍 **3 языка** — русский, английский, турецкий

### 🔑 Нужные ключи

| Ключ | Для чего | Стоимость | Где взять |
|------|----------|-----------|-----------|
| **Google AI** | Генерация + редактирование | Бесплатно ($300 кредит) | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| **Replicate** | HD апскейл | ~$0.002/изображение | [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens) |

### 🚀 Установка

1. `git clone https://github.com/S3CO/liveteam-ai-figma.git`
2. Figma → Plugins → Development → Import plugin from manifest → выберите `manifest.json`
3. Выберите язык, введите ключи, нажмите **Поехали!**

---

# 🇹🇷 Türkçe

## 🎨 Live Team AI — Figma Eklentisi

Figma içinde AI görsel üretici, düzenleyici ve HD yükseltici.

### ✨ Özellikler

- 🎨 **3 AI model** — görsel üretimi (Banana 2, Banana Pro, Imagen Ultra)
- ✏️ **Boyayıp Düzelt** — görseli seç, düzeltmek istediğin alanı boya, AI sadece orayı değiştirir
- 🔍 **HD Yükseltme** — Real-ESRGAN (Replicate key gerekli)
- 📐 **Çoklu Boyut** — kalite kaybı olmadan boyut değiştirme
- 📎 **Referans Görsel** — referans yükle, AI stili kopyalar
- 🌍 **3 Dil** — Rusça, İngilizce, Türkçe

### 🔑 Gerekli Key'ler

| Key | Ne İçin | Ücret | Nereden |
|-----|---------|-------|---------|
| **Google AI** | Üretim + düzenleme | Ücretsiz ($300 kredi) | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| **Replicate** | HD yükseltme | ~$0.002/görsel | [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens) |

### 🚀 Kurulum

1. `git clone https://github.com/S3CO/liveteam-ai-figma.git`
2. Figma → Plugins → Development → Import plugin from manifest → `manifest.json` seç
3. Dil seç, key'leri gir, **Başla!** bas

### Sorun Çözümü

| Hata | Çözüm |
|------|-------|
| `Quota exceeded, limit: 0` | Billing bağlanmamış. Google Cloud'da projeye billing bağla. |
| `API key not valid` | Yanlış key. Billing'li projeden yeni key oluştur. |
| `Failed to fetch` (HD) | Replicate key'i kontrol et, kredi olduğundan emin ol. |
| Key kabul edilmiyor | Key yapıştırırken boşluk olmadığından emin ol. |

---

## 📄 License

MIT

---

Made with ❤️ by **Live Team**
