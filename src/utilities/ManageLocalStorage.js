//get data
import { toast } from 'react-toastify';
 export const getIntoLocal=(book) =>{
    let  dataArr = [];
    const getItems = localStorage.getItem(book)
    if(getItems){
        dataArr = JSON.parse(getItems)
    }
    return dataArr
}

//set Data for read

export const setIntoLocal =(Id)=>{
   
    const getItem =getIntoLocal("read");
 
     const isExist =getItem.find((d)=>d.bookId === Id.bookId)
     if(!isExist){
        getItem.push(Id)
        localStorage.setItem('read',JSON.stringify(getItem))
        toast.success("Added Read Books")
     }
     else{
        toast.error("Already Added Read Books")
     }

}

// set books form wishList
export const setDataIntoWishList =(book)=>{
   const getItemInRead =getIntoLocal("read");
   const wishList =getIntoLocal('wish');
   
   const isExist = getItemInRead.find((d)=>d.bookId === book.bookId)
   const isExistWish = wishList.find((d)=>d.bookId === book.bookId)
  if(!isExist){
  if(!isExistWish){
   wishList.push(book)
   localStorage.setItem('wish',JSON.stringify(wishList))
   toast.success("Added Books WishList ")
  }else{
   toast.error("Already Added WishList")
  }
  }
  else{
   toast.error("Already Added Read Books")
}

}