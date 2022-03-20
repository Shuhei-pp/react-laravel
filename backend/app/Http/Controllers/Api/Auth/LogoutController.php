<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    /**
     * ログアウト
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $user = Auth::user();
        $result = true;
        $status = 200;
        $message = 'ログアウトしました';
        //ログアウト
        Auth::guard('web')->logout();

        return response()->json(['result' => $result, 'status' => $status, 'message' => $message]);
    }
}
