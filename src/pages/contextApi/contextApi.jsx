import React,{createContext,useContext,useState} from 'react'
import Template from '../mock/books.json';
import AuthorsSample from '../mock/author.json'


const CartContext = createContext({
first: [],
setFirst: () => {},
infos: [],
setInfos: () => {},
auth:[],
setAuth:() => {},
authVal: [],
setAuthVal: () => {},
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({children}) {
   /** Orginal Book values hold */
    const [first,setFirst]=useState(Template)
    /** created Book values hold */
    const Empties = {
        ID: "",
        Title: "",
        Author: "",
        ISBN: "",
        PublicationDate: ""
      }
      
      const [infos,setInfos]=useState(Empties)
      
     /** Edit Book values hold */
     
    /** Delete Book Values hold */

  
        /**Authers creation functions */
        const[auth,setAuth]=useState(AuthorsSample)

        const iniAuth = {
          ID: "",
          Name: "",
          BirthDate:"",
          Biography: ""
        }
        const [authVal,setAuthVal] = useState(iniAuth);

const value={
first,
setFirst,
infos,
setInfos,
auth,
setAuth,
authVal,
setAuthVal,
}

  return <CartContext.Provider value={value} > {children} </CartContext.Provider>
}
