import * as React from 'react';
import { Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {IoIosMenu} from 'react-icons/io';



const MenuBox = (props) => {

  
  const [activebt,setActivebt] = useState('#')
  const sortcolor = props.btcolor;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const itemsList=[{text:"Home", path:'#' },
                     {text:"About",path:'#about' },
                     {text:"Skills",path:'#skills' },
                     {text:"Courses",path:'#courses' },
                     {text:"Contact",path:'#contact' },
                     
                    ];
  return (
    <div>
      <IconButton 
        size='large'
        color='inherit'
        aria-label="logo"
        onClick={handleClick}
        
        sx={theme => ({ [theme.breakpoints.up('sm')]:{top:'7%',position:'fixed',right:'12%'},
                        [theme.breakpoints.between('xs','sm')]:{ top:'1%',position:'absolute',right:'5%'},
                        [theme.breakpoints.down('xs')]:{ top:'7%',position:'absolute',right:'12%'}
        
          })}
        
        ><IoIosMenu style={{fontSize:35,color:'white'}} />
        </IconButton>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={3} textAlign='center'>
          <div style={{fontFamily:'Poppins',fontWeight: 600}} className='header-head'>Portfolio</div>  
          <CloseIcon onClick={handleClose} sx={{ top:10, position:'absolute', right:10}}/>         
        </Box> 
        <List sx={{marginTop:0}}>
       {itemsList.map((item, index) => {
           
           const {text,path}=item;
           
           return (
               <ListItem    key={text} onClick={() => {
                handleClose();
                
              }}>
                   <ListItemText  onClick={()=>setActivebt(path)} className={activebt === path ? 'active':''} primary={<Typography button style={{ fontFamily:'Poppins', fontWeight: 900,fontSize:'0.8rem' }}>
                  
                 <a href={path} style={{fontSize:'0.95rem'}}  >
                  {text}
                  </a> 
                </Typography>} sx={{ paddingLeft:4,paddingRight:10}} />
               </ListItem> 
           );
           })}
    </List> 
      {/* Bottom component social */}
      <Box p={3}   textAlign="center">
      
          <div style={{fontFamily:'Poppins',fontSize:'0.8rem', fontWeight: 500}}>&copy;Rukesh pvt.ltd.</div>
          
          
      </Box> 
        
      </Menu>
    </div>
  );
}
export default MenuBox;
