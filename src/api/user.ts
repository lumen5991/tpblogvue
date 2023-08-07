
import {useLocalStorage, useStorage} from "@vueuse/core"

export const user = 
  {
    name:'lumen',
    email:'lumenahle@gmail.com'
  };

  const userInfos = useLocalStorage('user', user);
  
  export {userInfos}