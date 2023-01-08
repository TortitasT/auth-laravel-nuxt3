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

Migrate database:
```bash
backend/artisan migrate
```

Run:
```bash
bash start.sh
```

Develop:
```bash
code auth-laravel-nuxt3.code-workspace
```

# Utils
## Commands
Create user (can be run without arguments):
```bash
php backend/artisan auth:create-user [--name=NAME] [--email=EMAIL] [--password=PASSWORD]
```

Create [test user](?plain=40) and a bunch of random users:
```bash
php backend/artisan db:seed --class=DemoUserSeeder
```
```json
{
  "email": "test@example.com",
  "password": "password"
}
```
