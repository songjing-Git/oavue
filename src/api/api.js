import {Get} from "./index";

export const login=(username,password)=>{
  return  Get('login',{username,password})
}
