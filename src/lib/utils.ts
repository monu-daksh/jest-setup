import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios"

// Tailwind helper
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export async function fetchUser(id:string){
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!response.ok){
      throw new Error(`Http Error! status : ${response.status}`)
    }
    return response.json()
  }catch(error:unknown){
    throw new Error(error?.message || "Something went wrong")
  }
}


export async function fetchUserAxios(id){
  try{
    const response = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response

  }catch(err){
    throw new Error(err.message || "Something went wrong")
  }
}


export function sum(a, b){
  if(typeof a !== "number" || typeof b !== "number"){
     throw new Error("Both arguments should be numbers")
  }

  return a + b

}


export function getUniqueValues(arr){
   if(arr.length <= 1) return arr
   let left = 0
   const right = arr.length -1

   while(left < right){
     if(arr[left] !== arr[right]){
       left++
       arr[left] = arr[right]
     }
   }

   return arr.slice(0, left+1)
}


