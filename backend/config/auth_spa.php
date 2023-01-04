<?php

return [

    'frontend' => [
        'url' => env('FRONTEND_URL', 'http://localhost:3000'),

        'reset_password_url' => env('FRONTEND_RESET_PASSWORD_URL', '/login/reset'),
    ],
];
