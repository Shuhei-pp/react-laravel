<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SignupController extends Controller
{
    public function signup(Request $request){

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        //そのままログイン
        $credentials = $request->only('email','password');
        Auth::attempt($credentials);
        $user=Auth::user();

        //古いトークン削除&新しいトークン作成
        $user->tokens()->where('name','token-name')->delete();
        $token = $user->createToken('token-name');
        $result = true;
        $status = 200;
        $message = 'OK';
        return response()->json(['result' => $result, 'status' => $status, 'user' => $user, 'message' => $message]);

    }
}
