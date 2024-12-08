import React,{useState,useEffect} from 'react'
import {AppBar,Container, ImageList,ImageListItem} from '@mui/material';

import './App.css'




const Header =()=>{
const URL =" https://jsonplaceholder.typicode.com/photos";

const [usersData,setUsersData]=useState([])
const [loading,setLoading]=useState(false);
const [isError,setIsError]=useState({
    status:false,
    message:"",
})

const fetchUsersData =async(apiURL)=>{
    setLoading(true);
    setIsError({
        status:false,message:""
    })
    try{
        const response =await fetch(apiURL);
        const data = await response.json();
        setUsersData(data);
        console.log(data)
        setLoading(false);
        setIsError({
            status:false,
            message:""
        })
    }catch(error){
        setLoading(false)
        setIsError({
            status:true,
            message:error.message || "something is error please check"
        });
    }
};

useEffect(()=>{
    fetchUsersData(URL)
},[]);


if(loading){
    return <div>
        <h4>loading...</h4>
    </div>
};

if(isError.status){
    return <div>
        <h3>{isError.message}</h3>
    </div>
}
    return (
        <React.Fragment>
            <AppBar>
                {/* <Toolbar sx={{background:'#063970'}}>
                
                <ShoppingCartCheckoutIcon />
                
                <Tabs textcolor="inherit">
                    <Tab label="products" />
                    <Tab label="services" />
                    <Tab label="contact US" />
                    <Tab label="About Us" />
                </Tabs>

                <Button sx={{marginLeft:'auto',}} variant="container">login</Button>
                <Button variant="container">sign up</Button>
                
                </Toolbar> */}

                <Container >
                    <ImageList rowHeight={170} cols={3}>
                        
                            {
                            usersData.map((eachUser)=>{
                                return (
                                    <ImageListItem key={eachUser.id}cols={1}>
                                    <img src={eachUser.thumbnailUrl} alt={eachUser.title} />
                                </ImageListItem>
                                )
                                

                            })
                            }
                        
                    </ImageList>
                </Container>
                
            </AppBar>
        </React.Fragment>
    )
}
export default Header;