import { Container } from "react-bootstrap";
import React ,{ useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import {items} from './data'
function App() {

  const [itemsData,setItemData] = useState(items)

  // طريقة جلب ال category بدون تكرار 
  const allCategory = ['الكل',...new Set(items.map((i)=>i.category))]
  // filter
  const filterByCategory = (cat)=>{
    if(cat === "الكل"){
      setItemData(items)
    }else{
      const newArr=items.filter((item)=> item.category === cat)
      setItemData(newArr)
    }
  }

  // filter by search
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemData(newArr)
    }
  }
  
  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header/>
        <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
        <ItemList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
