# Movies Explorer (backend)

Репозиторий с бэкенд частью дипломного проекта. Включает в себя часть приложения с возможностью регистрации, авторизации, изменения информации пользователя, и взаимодействием с фильмами.

## Функционал

- Роуты для пользователей:

    - GET /users/me — возвращает информацию о пользователе
    - PATCH /users/me — обновляет информацию о пользователе

- Роуты для фильмов:

    - GET /movies — возвращает все фильмы из базы
    - POST /movies — создаёт фильм с переданными в теле запроса country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU и nameEN
    - DELETE /movies/:movieId — удаляет фильм по _id

## Используемые технологии

- JavaScript:
    - Промисы (Promise)
    - Асинхронность и оптимизация
    - API
- Node.js
- Express
- MongoDB

<!-- ## Ссылки на проект

IP 51.250.81.210

Backend https://api.mkezhun.nomoredomains.xyz -->
