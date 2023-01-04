<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DemoUserSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    User::factory(10)->create();

    if (User::where('email', 'test@example.com')->exists()) {
      return;
    }
    User::factory()->create([
      'name' => 'Test User',
      'email' => 'test@example.com',
      'password' => Hash::make('password'),
    ]);
  }
}
