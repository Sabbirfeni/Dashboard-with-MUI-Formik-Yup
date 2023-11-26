import React from 'react'
import { Box, Grid, MenuItem, Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccordionCard from './Accordion';
import BarChart from './Charts/BarChart';
import CountUp from 'react-countup';


export default function Overview() {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={2} sx={{ height: 20 + 'vh' }}>
                    <Card sx={{ display: 'flex', flex: 1, alignItems: 'center', boxShadow: 0, backgroundColor: '#3f51b5'}}>
                        <CardContent>
                            <Stack direction='column' spacing={2}>
                                <CardGiftcardIcon/>
                                <Typography variant='h4' fontWeight='bold'><CountUp delay={0.2} end={120} duration={1}/></Typography>
                                <Typography variant='body2' fontWeight='bold'>Current Balance</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', flex: 1, alignItems: 'center', boxShadow: 0, backgroundColor: '#3f51b5'}}>
                        <CardContent>
                            <Stack direction='column' spacing={2}>
                                <CardGiftcardIcon/>
                                <Typography variant='h4' fontWeight='bold'>
                                    <CountUp delay={0.2} end={1200} duration={1}/>
                                </Typography>
                                <Typography variant='body2' fontWeight='bold'>Current Balance</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
                <Stack direction={{ xs: 'column' }}
                spacing={2} sx={{ height: 20 + 'vh' }}>
                    <Card sx={{ maxWidth: 100 + '%', boxShadow: 0 }}>
                        <CardContent>
                            <Stack direction='row' alignItems='center' spacing={2}>
                                <CardGiftcardIcon/>
                                <Stack direction='column' spacing={1}>
                                    <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}><CountUp delay={0.2} end={150} duration={1}/></Typography>
                                    <Typography  variant='body2' sx={{ fontWeight: 'bold' }}>Daily Budget</Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 100 + '%', boxShadow: 0 }}>
                        <CardContent>
                            <Stack direction='row' alignItems='center' spacing={2}>
                                <CardGiftcardIcon/>
                                <Stack direction='column' spacing={1}>
                                    <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}><CountUp delay={0.2} end={200} duration={1}/></Typography>
                                    <Typography  variant='body2' sx={{ fontWeight: 'bold' }}>Daily Budget</Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
        <Box height={15}/>
        <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
            <Card sx={{ height: 70 + 'vh', boxShadow: 0 }}>
                <CardContent>
                    <BarChart/>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card sx={{ height: 70 + 'vh', boxShadow: 0 }}>
                <CardContent>
                    <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}>Frequently ask question.</Typography>
                    <AccordionCard/>
                </CardContent>
            </Card>
        </Grid>
        
        </Grid>
    </>
  )
}
