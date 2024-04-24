import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Singleview.css'
import { Col, Container, Row } from 'react-bootstrap';


function Singleview() {

    const [recipes,setRecipes]=useState({})
    const params=useParams()
    //console.log(params.id);

    const singleData=async()=>{
      const result=await axios.get(`https://dummyjson.com/recipes/${params.id}`)
      setRecipes(result.data);
    }

    useEffect(()=>{
      singleData()
    })
console.log(recipes);
  return (
  <div>
     <Container className='w-50 mt-5 mb-5 '>
          <Row>
            {recipes.id?
            <>
              <Col lg={5} md={4}>
                <img src={recipes.image} alt="" style={{height:'250px',width:'300px'}} className='photo'/>
                <div className='det' >
                     <h4 style={{color:'white',textTransform:'uppercase'}} className='na'>{recipes.name}</h4><br />
                     <p style={{color:'white'}}>****************</p>
                     <p style={{color:'white'}}>Serves {recipes.servings}</p>
                     <p style={{color:'white'}}>****************</p>
                     <p style={{color:'white'}}>Prep time: {recipes.prepTimeMinutes} min</p>
                     <p style={{color:'white'}}>Cook time: {recipes.cookTimeMinutes} min</p>
    
                </div>
               
    
              </Col>
              <Col lg={7} md={8}>
                    <h5 style={{marginTop:'10px'}} >INGREDIENTS</h5>
                    <ul className='ing'>
                                {recipes.ingredients && recipes.ingredients.map((i) => (
                                    <li>{i}</li>
                                ))}
                            </ul>
                 <hr style={{color:'black'}}/>
                 <h5>INSTRUCTIONS</h5>
                 <ul  className='ins'>
                                {recipes.instructions && recipes.instructions.map((i) => (
                                    <li>{i}</li>
                                ))}
                            </ul>
              </Col>
            </>
            :
            <div className='text-center p-5 m-5 spinner'>
            <i class="fa-solid fa-circle-notch fa-spin-pulse"></i>
             </div>
           
         }
          </Row>
     </Container>
     
  </div>
  )
}

export default Singleview
