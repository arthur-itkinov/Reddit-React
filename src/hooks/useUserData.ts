import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { tokenContext } from "../context/tokenContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";


interface IUserData {
    name?: string;
    iconImg?: string;
  }

export function useUserData() {
    const [data, setData] = useState<IUserData>({})

    const token = useSelector<RootState, string>(state => state.token)
  useEffect(() => {
    if(token && token.length > 0 && token !== 'undefined') {
      axios.get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization : `Bearer ${token}`}
      })
      .then((resp) => {
        const userData = resp.data
        setData({name: userData.name,
        iconImg: userData.icon_img.split("&")[0]})
      })
      .catch(console.log)
    }
    
  }, [token])
  return [data]
}