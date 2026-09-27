# Winx Club — фан-сайт

Статический сайт о мультсериале Winx Club. Создан на чистых HTML и CSS с небольшим JavaScript для карусели.

## Структура проекта

```
winx-site/
├── index.html          # Главная страница с каруселью
├── style.css           # Стили главной страницы
├── script.js           # Логика карусели
├── about.html          # О мультсериале
├── about-cartoon.css
├── characters.html     # Список персонажей
├── characters.css
├── bloom.html          # Страница Блум
├── bloom.css
├── stella.html         # Страница Стеллы
├── stella.css
├── flora.html          # Страница Флоры
├── flora.css
├── musa.html           # Страница Музы
├── musa.css
├── tecna.html          # Страница Текны
├── tecna.css
├── layla.html          # Страница Лейлы
├── layla.css
├── seasons.html        # Сезоны и эпизоды
├── seasons.css
├── games.html          # Комиксы, игры, спин-оффы
├── games.css
├── facts.html          # Факты и пасхалки
├── facts.css
├── contact.html        # Контакты
├── contact.css
└── README.md
```

## Как запустить локально

Просто откройте `index.html` в браузере. Или запустите локальный сервер:

```bash
python -m http.server 8000
```

Затем откройте `http://localhost:8000` в браузере.

## Как разместить на GitHub Pages

1. Создайте новый репозиторий на GitHub.
2. Загрузите все файлы из папки `winx-site/` в репозиторий.
3. Зайдите в Settings → Pages.
4. В разделе Source выберите ветку `main` и папку `/ (root)`.
5. Нажмите Save. Через пару минут сайт будет доступен по адресу `https://ваш-логин.github.io/название-репозитория/`.

## Навигация

- **Home** — главная страница с каруселью персонажей
- **About the cartoon** → **Characters** — список фей с переходом на детальные страницы
- **World of Winx** → **Seasons and episodes** / **Comics, games, spin-offs** / **Facts and easter eggs**
- **Contact** — форма обратной связи

## Технологии

- HTML5
- CSS3 (Flexbox, Grid, анимации)
- JavaScript (ванильный, для карусели)
- Google Fonts (Chewy)
