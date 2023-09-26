import axios from "axios";
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from "mdb-react-ui-kit";
import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import Blogs from "../components/Blogs";

const Home = () =>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        loadBlogsData();
    }, [])
    const loadBlogsData = async() =>{
        const response = await axios.get("http://localhost:5000/blogs");
        if(response.status === 200){
            setData(response.data);
        }else{
            toast.error("Something went wrong");
        }
    };
    const handleDelete = async(id) =>{
        if(window.confirm("Are you sure you wanted to delete this blog ?"));

        const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
        if(response.status === 200){
            toast.success("Blog deleted Successfully");
            loadBlogsData();
        }else{
            toast.error("Something went wrong");
        }
    };

    const excerpt = (str) =>{
        if(str.length > 50){
            str= str.substring(0, 50)+"...";
            
        }
        return str;
    }
    return (
        <>
        <MDBRow>
            {data.length === 0 && (
                <MDBTypography className="text-center mb-0" tag="h2">
                    No Blog Found
                </MDBTypography>
            )}
            <MDBCol>
                <MDBContainer>
                    <MDBRow>
                        {data && data.map((item, index) =>(
                            <Blogs
                            key={index}
                            {...item}
                            excerpt={excerpt}
                            handleDelete={handleDelete}
                            />                          
                        ))}
                    </MDBRow>
                </MDBContainer>
            </MDBCol>
        </MDBRow>
        </>
    );
};
export default Home