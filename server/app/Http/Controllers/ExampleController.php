<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function index(){
        $serve = array('employees' => array(
            array('first_name'=>'Rifat','last_name'=>'alom'),
            array('first_name'=>'Rifat','last_name'=>'alom'),
            array('first_name'=>'Rifat','last_name'=>'alom'),
            array('first_name'=>'Rifat','last_name'=>'alom'),
            array('first_name'=>'Rifat','last_name'=>'alom'),
        ));

        $serve2= ["rifat",'alom'];

        return response()->json($serve);
    }
}
