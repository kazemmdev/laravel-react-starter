<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request) {
        $user = User::create(array_merge(
            $request->validated(),
            ["password" => bcrypt($request->password)]
        ));

        return response()->json([
            'user' => $user,
            'message' => 'registration successful'
        ]);    
    }

    public function login(LoginRequest $request) {

        if (!$token = auth()->attempt($request->validated())) 
            return response()->json(['message' => 'Invalid email or password'], 401);

        return response()->json([
            'user' => auth()->user(),
            'message' => 'registration successful'
        ]);    
    }
}
