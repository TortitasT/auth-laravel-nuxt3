#!/bin/bash
php backend/artisan serve & yarn --cwd frontend dev && fg
