<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Main extends Controller
{
    public function index()
    {
        $teste = "a";
        
        $teste;
        return view('welcome');
    }
}
