import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Cards from '../card/Cards';
// import useStyles from '../card/style';
// import { Card } from '@mui/material';



export default function Product({product}) {

  return (
    <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {
           product.map((el)=>{
               return(
                <Grid item xs={2}>
            
                    <Cards card={el}/>
                </Grid>
               )

           })
       }
       
      </Grid>
    </Box>
  );
}







// import React from 'react'


// function Product({product}) {
//     console.log(product);
//   return (
//     <div>
//       merhaba
//     </div>
//   )
// }

// export default Product


