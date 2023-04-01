import React,{useState,useEffect } from "react";
import Navb from "./navbar";
import Konten from "./card";
import { Button, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";

function Gabung (){
    const [data, setData] = useState([]);
    let [telusuri, setTelusuri] =useState('');
    const [loading, SetLoading] = useState(false);

    useEffect(() => {
        SetLoading(true);
        fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=83e34568e80d4470bfa501380f65f0d6')
          .then((res) => res.json())
          .then((data) => {
            setData(data.articles);
          })
    },[])

    useEffect(()=>{
        if(telusuri === ''){
            fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=83e34568e80d4470bfa501380f65f0d6`)
            .then((res)=> res.json())
            .then((data)=> {
                setData(data.articles)
            });
        }else{
            SetLoading(true);
            fetch(`https://newsapi.org/v2/everything?q=${telusuri}&apiKey=83e34568e80d4470bfa501380f65f0d6`)
            .then((res)=> res.json())
            .then((data)=> {
                setData(data.articles)
            });
        }
    },[telusuri])
    return(
        <div>
            <Navb />
            <Container className="mb-3 mt-3 ">    
            <Row>         
                <InputGroup>
                        <Form.Control
                        type="Search"
                        placeholder="Cari Berita..."
                        aria-label="Cari Berita..."
                        aria-describedby="basic-addon2"
                        onChange={(t)=>{ setTelusuri(t.target.value)}}
                        />
                        <Button variant="outline-primary" id="button-addon2" className="col-lg-2"  >
                        Cari
                        </Button>
                </InputGroup>
            </Row>
        </Container>
            <Container>
                <Row className="justify-content-center">
                    { loading ? data && data.map((tes,i) =>{ //jika data berisi arraya jalankan data.map
                        return( <Konten calling={tes} key={i}/> )
                        })
                        : <center> <Spinner animation="border" variant="primary" ><h2>Loading..</h2></Spinner></center>
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Gabung;
