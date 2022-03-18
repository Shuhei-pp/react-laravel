<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * ログイン
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     * 
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request){
        $credentials = $request->only('email','password');
        if(Auth::attempt($credentials)) {
            $result = true;
            $status = 200;
            $message = 'OK';
            $user = Auth::user();
            $request->session()->regenerate();
            //古いトークン削除&新しいトークン作成
            $user->tokens()->where('name','token_name')->delete();
            $token = $user->createToken('token_name');
            return ['token' => $token->plainTextToken];
        }
        $result = false;
        $status = 401;
        $message = 'ユーザが見つかりません';
        $user = null;
        return response()->json(['result' => $result, 'status' => $status, 'user' => $user, 'message' => $message]);
    }
}

