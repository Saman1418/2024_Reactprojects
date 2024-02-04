import React from "react";
import API from "./API";
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"

const India =({url})=>{
    const APIS = API(url);
    console.log(APIS)
    if(!APIS){
        return "loading.."
    }
    return(

        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={APIS.data.confirmed.value} duration={2.5} separator={","}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(APIS.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases or covid-19</Typography>
                    </CardContent>

                </Grid>
                
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={APIS.data.recovered.value} duration={2.5} separator={","}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(APIS.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered cases or covid-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={APIS.data.deaths.value} duration={2.5} separator={","}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(APIS.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths cases or covid-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>

        </div>



    
    )

}
export default India;