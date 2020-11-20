import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-left: 10px;
    width: 1330px;
    height: 340px;  
`
export const ContainerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: green; */
    border-bottom: 1px solid gray;
    flex: 1;
`

export const ContainerAside = styled.aside`
    /* background-color: blue; */
    flex: 0 0 16%;
`
export const Image = styled.img`
    /* width: 100%; */
    object-fit: cover;
    padding-right: 50px;
`

export const Parrafo = styled.p`
    font-size: 60px;
    padding-left: 50px;

`