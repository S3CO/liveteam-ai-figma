# 🎨 Live Team AI — Figma Plugin

**🇬🇧 EN** | [🇷🇺 RU](#-русский) | [🇹🇷 TR](#-türkçe)

AI-powered image generator directly inside Figma. Generate stunning images with multiple free AI models and place them on your canvas in any size.

![Live Team AI](https://img.shields.io/badge/Figma-Plugin-5AC40A?style=for-the-badge&logo=figma&logoColor=white)
![Free](https://img.shields.io/badge/Free-100%25-5AC40A?style=for-the-badge)
![Models](https://img.shields.io/badge/Models-3-blue?style=for-the-badge)

---

## ✨ Features

- 🍌 **Nano Banana 2** — Free, fast AI image generation
- 🍌 **Nano Banana Pro** — Free, photorealistic results
- 🖼 **Imagen 4 Ultra** — Free, highest quality available
- 📐 **Multi-Size Export** — Generate multiple sizes at once
- ➕ **Custom Sizes** — Add any W×H dimension you need
- 📎 **Reference Image** — Upload a reference, AI matches the style
- 📊 **Progress Bar** — Real-time generation tracking
- 🌍 **3 Languages** — Russian, English, Turkish

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

### Step 3: Get your API Key (see detailed guide below)

---

## 🔑 API Key Setup — Detailed Guide

The plugin uses **Google AI Studio** API. It's free but you need to set up billing to remove the zero-limit restriction on new accounts.

### Step 1: Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. If you don't have a project, click **"Select a project"** → **"New Project"**
3. Name it anything (e.g., `LiveTeam`) → click **"Create"**

### Step 2: Enable Billing

1. In Google Cloud Console, go to **☰ Menu** → **Billing**
2. Click **"Link a billing account"**
3. If you don't have one, click **"Create billing account"**
4. Enter your credit card details
5. Link the billing account to your project

> ⚠️ **Don't worry!** You won't be charged. Google gives a generous free tier. Image generation costs only $0.001-0.005 per image if you exceed the free quota.

### Step 3: Enable the API

1. In Google Cloud Console, go to **☰ Menu** → **APIs & Services** → **Library**
2. Search for **"Generative Language API"**
3. Click on it → click **"Enable"**

### Step 4: Create your API Key

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Click **"Create API Key"**
3. **Important:** Select the project where you enabled billing (e.g., `LiveTeam`)
4. Copy the key (starts with `AIzaSy...`)
5. Paste it into the plugin when prompted

### Troubleshooting

| Error | Solution |
|-------|----------|
| `Quota exceeded, limit: 0` | Billing not linked. Follow Step 2 above. |
| `API key not valid` | Wrong key. Create a new one from the billing-enabled project. |
| `Model not found` | Try a different model in the plugin (Banana 2 or Imagen 4 Ultra). |
| `Safety filter` | Rephrase your prompt, avoid explicit content. |

---

## 🤖 Models

| Model | Speed | Quality | Cost |
|-------|-------|---------|------|
| 🍌 Nano Banana 2 | ⚡ Fast | ★★★★☆ | **Free** |
| 🍌 Nano Banana Pro | 🔄 Medium | ★★★★★ | **Free** |
| 🖼 Imagen 4 Ultra | 🔄 Medium | ★★★★★ | **Free** |

---

## 📐 Preset Sizes

`1024×1024` · `1024×1536` · `1536×1024` · `512×512` · `1080×1080` · `1080×1920` · `900×600` · `1200×628` + custom

---

# 🇷🇺 Русский

## 🎨 Live Team AI — Плагин для Figma

AI генератор изображений прямо внутри Figma. Бесплатные AI модели, любые размеры, референс изображения.

### 🚀 Установка (3 шага)

#### Шаг 1: Скачайте плагин

```bash
git clone https://github.com/S3CO/liveteam-ai-figma.git
```

> Нет Git? [Скачайте ZIP](https://github.com/S3CO/liveteam-ai-figma/archive/refs/heads/main.zip) и распакуйте.

#### Шаг 2: Импортируйте в Figma

1. Откройте **Figma Desktop** (не браузерную версию!)
2. Откройте любой файл
3. **Plugins** → **Development** → **Import plugin from manifest...**
4. Выберите **`manifest.json`** из скачанной папки
5. Готово! Плагин: **Plugins → Development → Live Team AI**

#### Шаг 3: Получите API ключ (подробная инструкция ниже)

---

### 🔑 Настройка API Ключа — Подробная Инструкция

#### Шаг 1: Создайте проект Google Cloud

1. Откройте [console.cloud.google.com](https://console.cloud.google.com)
2. Нажмите **"Выбрать проект"** → **"Новый проект"**
3. Назовите как угодно (например, `LiveTeam`) → **"Создать"**

#### Шаг 2: Подключите биллинг

1. В Google Cloud Console: **☰ Меню** → **Billing (Оплата)**
2. Нажмите **"Привязать платёжный аккаунт"**
3. Если нет аккаунта — создайте новый, введите данные карты
4. Привяжите к проекту

> ⚠️ **Не переживайте!** Деньги не спишут. Google даёт щедрый бесплатный лимит. Если превысите — одно изображение стоит $0.001-0.005.

#### Шаг 3: Включите API

1. В Google Cloud Console: **☰ Меню** → **APIs & Services** → **Library**
2. Найдите **"Generative Language API"**
3. Нажмите → **"Enable" (Включить)**

#### Шаг 4: Создайте API ключ

1. Откройте [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Нажмите **"Create API Key"**
3. **Важно:** Выберите проект с подключённым биллингом (например, `LiveTeam`)
4. Скопируйте ключ (начинается с `AIzaSy...`)
5. Вставьте в плагин

#### Решение проблем

| Ошибка | Решение |
|--------|---------|
| `Quota exceeded, limit: 0` | Биллинг не подключён. Выполните Шаг 2. |
| `API key not valid` | Неверный ключ. Создайте новый из проекта с биллингом. |
| `Model not found` | Попробуйте другую модель (Banana 2 или Imagen 4 Ultra). |

### 🤖 Модели

| Модель | Скорость | Качество | Цена |
|--------|----------|----------|------|
| 🍌 Nano Banana 2 | ⚡ Быстро | ★★★★☆ | **Бесплатно** |
| 🍌 Nano Banana Pro | 🔄 Средне | ★★★★★ | **Бесплатно** |
| 🖼 Imagen 4 Ultra | 🔄 Средне | ★★★★★ | **Бесплатно** |

---

# 🇹🇷 Türkçe

## 🎨 Live Team AI — Figma Eklentisi

Figma içinde AI görsel üretici. Ücretsiz AI modelleri, istediğin boyut, referans görsel desteği.

### 🚀 Kurulum (3 adım)

#### Adım 1: Plugin'i indir

```bash
git clone https://github.com/S3CO/liveteam-ai-figma.git
```

> Git yok mu? [ZIP indir](https://github.com/S3CO/liveteam-ai-figma/archive/refs/heads/main.zip) ve çıkar.

#### Adım 2: Figma'ya import et

1. **Figma Desktop** uygulamasını aç (tarayıcıda çalışmaz!)
2. Herhangi bir dosya aç
3. **Plugins** → **Development** → **Import plugin from manifest...**
4. İndirilen klasördeki **`manifest.json`** dosyasını seç
5. Tamam! **Plugins → Development → Live Team AI** altında görünecek

#### Adım 3: API Key al (detaylı rehber aşağıda)

---

### 🔑 API Key Kurulumu — Detaylı Rehber

#### Adım 1: Google Cloud Projesi Oluştur

1. [console.cloud.google.com](https://console.cloud.google.com) aç
2. **"Proje seç"** → **"Yeni Proje"** tıkla
3. İsim ver (örn: `LiveTeam`) → **"Oluştur"**

#### Adım 2: Billing (Faturalandırma) Bağla

1. Google Cloud Console'da: **☰ Menü** → **Billing**
2. **"Faturalandırma hesabı bağla"** tıkla
3. Hesap yoksa yeni oluştur, kredi kartı bilgilerini gir
4. Projeye bağla

> ⚠️ **Endişelenme!** Para çekmez. Google cömert ücretsiz kota veriyor. Aşarsan bile görsel başına $0.001-0.005.

#### Adım 3: API'yi Aktif Et

1. Google Cloud Console'da: **☰ Menü** → **APIs & Services** → **Library**
2. **"Generative Language API"** ara
3. Tıkla → **"Enable" (Etkinleştir)**

#### Adım 4: API Key Oluştur

1. [aistudio.google.com/apikey](https://aistudio.google.com/apikey) aç
2. **"Create API Key"** bas
3. **Önemli:** Billing bağladığın projeyi seç (örn: `LiveTeam`)
4. Key'i kopyala (`AIzaSy...` ile başlar)
5. Plugin'e yapıştır

#### Sorun Çözümü

| Hata | Çözüm |
|------|-------|
| `Quota exceeded, limit: 0` | Billing bağlanmamış. Adım 2'yi yap. |
| `API key not valid` | Yanlış key. Billing'li projeden yeni key oluştur. |
| `Model not found` | Başka model dene (Banana 2 veya Imagen 4 Ultra). |

### 🤖 Modeller

| Model | Hız | Kalite | Fiyat |
|-------|-----|--------|-------|
| 🍌 Nano Banana 2 | ⚡ Hızlı | ★★★★☆ | **Ücretsiz** |
| 🍌 Nano Banana Pro | 🔄 Orta | ★★★★★ | **Ücretsiz** |
| 🖼 Imagen 4 Ultra | 🔄 Orta | ★★★★★ | **Ücretsiz** |

---

## 📁 Structure

```
liveteam-ai-figma/
├── manifest.json    # Plugin config
├── code.js          # Figma canvas logic
├── ui.html          # Plugin UI
└── README.md        # Documentation (EN/RU/TR)
```

## 📄 License

MIT

---

Made with ❤️ by **Live Team**
