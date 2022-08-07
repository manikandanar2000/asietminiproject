import React,{useState,useEffect} from "react";
// import './App.css';
import axios from 'axios';
import firebase from '../firebase/config'
import './main.css'
import { Link } from "react-router-dom";


function Main() {
    // const [schools, setSchools] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [todo,setTodo]=useState([]);
  const [totalprice,setTotalprice]=useState(0);


 
 useEffect(() => {
  axios.get("/test").then ((res) =>{
        console.log(res)
        console.log('hellow')
    // setData(res.data) ;
    
    })


     }, );
     const todoRef = firebase.firestore().collection('product_details');
     useEffect((async)=>{
      todoRef.onSnapshot(
        querySnapeshot=>{
          const users=[]
          querySnapeshot.forEach((doc)=>{
            const {product,price} = doc.data()
            users.push({
              product,
              price

            })
            console.log(users)
            setTodo(users)
          })

        }
      )
      

     },[])
     
    //  firebase.firestore().collection('product_details').get().then(snapshot=>{
    //   snapshot.forEach((obj)=>{
    //     console.log(obj.data())
    //     setData(obj.data)
        
    //   })
    //   console.log(data)
    //  })
    
    
   

    // if (loading){
    //   return <h1>loading</h1>
    // }[]
    // function totalbill(val){
    //   console.log("val")
    //   let sum=0;
    //   sum=sum+val;
    //   setTotalprice(sum);
    // }

    return (
      <div>
         <div className='nav'>
        <div className='nav2'>
          

        </div>
        <div className='nav3'>
      
        <table>
              <tr>
              <Link to='/'>
                  <td className='log'>Logout</td>
              </Link>
              </tr>
          </table>
         


        </div>
        

        </div>
        
        <h1>LIST</h1>
        {todo.map((user) => (
                      
        
                      // { totalbill(user.price)}
               
                       
                       
                       <div>
                       <h1 style={{margin:"5px"}}>{user.product} </h1><h1> {user.price}</h1>
                       
                       </div>
                       
                       
                       
        )

        )}
    <div>
      
      {/* <h1>Total={totalprice}</h1> */}
      
      </div>
       
      
      </div>
    )

}

export default Main
