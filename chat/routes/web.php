<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [Main::class, 'index'])->name('main');
