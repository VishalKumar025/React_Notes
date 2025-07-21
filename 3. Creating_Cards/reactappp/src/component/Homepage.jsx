import React from 'react';
import data from '../../data.json'; 

const Homepage = ({cartData:{cardData,setcardData}}) => {

    // console.log(setcardData);

    const handleCart=({data})=>{
        const alreadyexists= cardData.find((ele,i)=>{
            ele.id==data.id
        });
        if (alreadyexists){
            setcardData([...cardData,{...alreadyexist,quantity:quantity+1}]);
        }else{
            setcardData([...cardData,data]);
        }
    }


    return (
        <section className='container'>
            {data.map((item) => (
                <div className='items'>
                    <img src={item.image} alt={item.title} className='image'/>
                    <h3>{item.title}</h3>
                    <p>id: {item.id}</p>
                    <p>Price: ${item.price}</p>
                    {/* <p>{item.description}</p> */}
                    <p>Category: {item.category}</p>
                    <p>Rating: {item.rating.rate} ⭐ ({item.rating.count} reviews)</p>
                    <div className='btns'>
                        <button className='btn2'>Buy now</button>
                        <button className='btn2' onClick={()=>{handleCart(item)}}>Add to cart</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Homepage;

