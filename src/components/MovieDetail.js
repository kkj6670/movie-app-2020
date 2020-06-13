import React from "react";

class MovieDetail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        console.log(this.props,"this props");
        if(location.state === undefined){
            history.push("/");
        }
    }
    

    render(){
        const { location } = this.props;
        if(location.state){
            const title = location.state.title;
            return(
                <div style={{textAlign:"center",backgroundColor:"white",width:"25%",margin:"20px auto",padding:"10px",boxShadow:"1px 1px 30px #ccc"}}>
                    <p style={{fontSize:"2em",margin:"20px 0"}}>movie detail state test</p>
                    <p style={{marginBottom:"10px"}}>{location.state.id}</p>
                    <p style={{marginBottom:"10px"}}>{location.state.year}</p>
                    <p style={{marginBottom:"10px"}}>{title}</p>
                    <p style={{marginBottom:"10px"}}>{location.state.summary}</p>
                    <img src={location.state.poster} alt={title} title={title}/>
                    {location.state.genres.map((genre, index) => (
                        <p  style={{marginBottom:"10px"}} key={index}>{genre}</p>
                    ))}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default MovieDetail;