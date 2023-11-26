import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { GeoChartCard } from './Charts/GeoChart';
import { PieChartCard } from './Charts/PieChart';
import { HoriBarCharCard } from './Charts/HoriBarChart';
export default function Analytics() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={2} spacing={4}>
            <Stack direction={{ xs: 'column' }} spacing={2} display='flex' height='40vh'>
                <Card sx={{ display: 'flex', flex: 1, alignItems: 'center', boxShadow: 0, backgroundColor: '#3f51b5'}}>
                    <CardContent>
                        <Stack direction='column' spacing={2}>
                            <CardGiftcardIcon/>
                            <Typography variant='body2' fontWeight='bold'>Current Balance</Typography>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{ display: 'flex', flex: 1, alignItems: 'center', boxShadow: 0, backgroundColor: '#3f51b5'}}>
                    <CardContent>
                        <Stack direction='column' spacing={2}>
                            <CardGiftcardIcon/>
                            <Typography variant='body2' fontWeight='bold'>Current Balance</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Grid>
        <Grid item xs={12} md={2} >
            <Stack direction={{ xs: 'column' }} spacing={2}  height='40vh'>
                <Card sx={{ display: 'flex', flex: 1, alignItems: 'center', boxShadow: 0, backgroundColor: '#3f51b5'}}>
                    <CardContent>
                        <Stack direction='column' spacing={2}>
                            <CardGiftcardIcon/>
                            <Typography variant='body2' fontWeight='bold'>Current Balance</Typography>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{ display: 'flex', flex: 1, alignItems: 'center', boxShadow: 0, backgroundColor: '#3f51b5'}}>
                    <CardContent>
                        <Stack direction='column' spacing={2}>
                            <CardGiftcardIcon/>
                            <Typography variant='body2' fontWeight='bold'>Current Balance</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
            <HoriBarCharCard/>
        </Grid>
        <Grid item xs={12} md={8}>
            <Card sx={{ height: 50 + 'vh', boxShadow: 0 }}>
                <CardContent>
                    <GeoChartCard/>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card sx={{ height: 50 + 'vh', boxShadow: 0 }}>
                <CardContent>
                    <PieChartCard/>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}
