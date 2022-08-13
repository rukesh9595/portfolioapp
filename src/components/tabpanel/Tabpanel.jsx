import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tabpanel.css';
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
import {FcApproval} from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  AOS.init()
  return (
    <section id='courses' >
      <h5>Courses and certificates</h5>
      <h2>Get to Know</h2>
    <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" data-aos-duration="3000" className="tabpanel__container">
    <Box 
         sx={theme => ({ [theme.breakpoints.between(0,600)]:{width: '95vw',maxWidth:'95%'},           
            [theme.breakpoints.up('md')]:{ width: '100vw',maxWidth:'50%'}
            })}
    
    >
      <Box 
           
      
      >
        <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:'white',fontFamily:'Poppins',fontSize:{xs:'0.7rem',md:'0.95rem'}}} label="Autonise" {...a11yProps(0)} />
          <Tab sx={{color:'white',fontFamily:'Poppins',fontSize:{xs:'0.7rem',md:'0.95rem'}}} label="Udemy" {...a11yProps(1)} />
          <Tab sx={{color:'white',fontFamily:'Poppins',fontSize:{xs:'0.7rem',md:'0.95rem'}}} label="AWS learning Workshop" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p><FcApproval/>&nbsp;Participated in workshop of web development by Autonise AI</p>
        <p><FcApproval/>&nbsp;Made a simple website using HTML and CSS</p>
        <a href="" className='coursebtn btn-primary'>Certificate</a>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p><FcApproval/>&nbsp;Automate the Boring Stuff with Python programming</p>
        <a href="" className='coursebtn btn-primary'>Certificate</a>
      <p style={{marginTop:'2%'}}><FcApproval/>&nbsp;React Front To Back 2022</p>
        <a href="" className='coursebtn btn-primary'>Certificate</a>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p><FcApproval/>&nbsp;Participated in Amazon AWS Learning Festival Workshops on
          Cloud Competencies, Design Thinking, Cyber Security and Marketing in Startup on
          May 28th-31st 2021.</p>
        <a href="" className='coursebtn btn-primary'>Certificate</a>
      </TabPanel>
    </Box>
    </div>
    </section>
  );
}
