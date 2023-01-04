# auth-laravel-nuxt3
App template with auth system

# Usage
Install dependencies:
```bash
yarn --cwd frontend
composer install --working-dir backend
```

Configure .env:
```bash
cp backend/.env.example backend/.env
php backend/artisan key:generate
```
!! Change .env database configuration

Run:
```bash
bash start.sh
```

Develop:
```bash
code auth-laravel-nuxt3.code-workspace
```
