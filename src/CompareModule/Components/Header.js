import React from 'react';
class Header extends React.Component{


    render(){
         var style={
          color: 'cadetblue'
        } 
        return(

            <h1 style={style} >Product Compare - React App</h1>
            
        );
    }
}

export default Header;