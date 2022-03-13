<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:3',
            'email' => "required|email|unique:users",
            'password' => 'required|confirmed|min:5|max:15'
        ];
    }
}
