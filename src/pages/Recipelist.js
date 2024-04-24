import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Recipelist() {

  const [recipe,setRecipe]=useState([])
  const [sdata,setSdata]=useState("")

  const fetchData=async()=>{
    const data=await axios.get('https://dummyjson.com/recipes')
     setRecipe(data.data.recipes);
    console.log(data.data.recipes);
   } 
console.log(recipe);
console.log(sdata);
useEffect(()=>{
  fetchData()
},[sdata])

const search=()=>{
 const data= recipe.filter(i=>i.cuisine.toLowerCase().trim().includes(sdata.toLowerCase().trim()))
 setRecipe(data);
}

  return (
    <div>
      <Container w-75>

        <Row className='mt-5 ms-1'>
          <Col lg={4} md={12} sm={12} className='i1'>
              <img src="https://i.postimg.cc/B6W1yk10/d92f1fe102a4a4a6f6557aa7176b0814.jpg" alt="" style={{width:'430px',height:'500px'}}/>

          </Col>
          <Col lg={4} md={12} sm={12}>
<div className='about'>
                  <h3 className='hi'>Hi there</h3>
                  <h3 className='mt-5 hii'>HI THERE !</h3>
                  <h3 className='nice'>Nice to meet you</h3>
                  <p className='con'>Join us on a culinary adventure! Browse our collection of recipes, find something that catches your eye, and let's get cooking together. We're here to help you unleash your inner chef and create delicious meals that you'll love.</p>
                  <button  className='but'>LEARN MORE</button>
</div>
            
          </Col>
          <Col lg={4} md={12} sm={12} className='i2'>
          <img src="https://i.postimg.cc/2y15F2Vb/pexels-photo-2097090.jpg" alt="" style={{width:'430px',height:'500px'}} />

            
          </Col>
        </Row>
      </Container>
  <p style={{textAlign:'center'}} className='cook'>COOK BOOK</p>
<div>
              <input
                    type="text"
                    className="inp"
                    style={{width:'200px'}}
                    onChange={(e)=>setSdata(e.target.value)}
                    spellcheck="false"
        
                    autocomplete="off"
                  />
                  <Button variant="dark" className='b1' type="submit" onClick={search}><i class="fa-solid fa-magnifying-glass"></i></Button>
  
</div>
{ recipe.length>0?
    <div className='p-5'>
      <Row>
        {
          recipe.map(i=>(
      <Col lg={4} md={6} sm={12} className='p-3 mt-3'>
         <Card style={{ width: '28rem', height:'260px',border:'1px solid grey'}} className='c1'>
                    <Row>
<Col>
                         <Card.Img  variant="top" src={i.image} style={{height:'220px'}} className='rimg' />
  
</Col>                      
              <Col>
                <Card.Body className=' text-black' style={{ textAlign: 'initial' }}>
                          <Card.Title style={{textAlign:'center',textTransform:'uppercase'}}>{i.name.length>19?i.name.slice(0,19)+'...':i.name}</Card.Title>
                          <hr />
                          <p style={{fontSize:'17px',textAlign:'center'}}>{i.mealType[0]} , {i.cuisine}</p>
                          <p>Ingredients: {i.ingredients[0].length>9?i.ingredients[0].slice(0,9)+'...':i.ingredients[0]}</p>
                           <Card.Text>{i.rating} <i class="fa-solid fa-star"></i></Card.Text>  
                           <Link style={{textDecoration:'none'}} to={`/single-view/${i.id}`}>
                             <div className="d-flex justify-content-end">
      <a href="" className='read'>Read more <i className="fa-solid fa-arrow-right"></i></a>
    </div>          
                           </Link>
  </Card.Body>
              </Col>
                    </Row>
       </Card>

      </Col>
          ))
        }
      </Row>
  
    </div>
    :
    <div className='text-center p-5 m-5 spinner'>
   <i class="fa-solid fa-circle-notch fa-spin-pulse"></i>
    </div>
} 
    </div>
  )
}

export default Recipelist
