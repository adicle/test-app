<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {

    public function login(Request $request)
    {
        $credentials = ['email' => $request->email, 'password' => $request->password];

        if(Auth::attempt($credentials)) {
            return response()->json(['message' => 'Success'], 200);
        }

        return response()->json(['message' => 'Fail'], 500);
    }

}