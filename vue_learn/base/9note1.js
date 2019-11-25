var name = 'xiaoming';
var age = 16;
var flag=true;

function sum(num1,num2){
    return num1 + num2;
}

if(flag){
    console.log(sum(20,30));
}


//导出方式1
export{
    flag,sum
}

//导出方式2

export var num1 = 1000;

//导出方式3
export function mul(num1,num2){
    return num1*num2;
}

export class Person{
    run(){
        console.log("test");
    }
}

//默认导出
export default num1;

// 导入语法
import {flag,sum} from "./9note2";

//导出默认
import nu from "./9note2";

import * as info from "./9note3";