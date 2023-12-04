import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-areas: 
    "header"
    "content"
    ;
    
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    
        
        

    > main {
            grid-area: content;
            overflow-y: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px 123px;
            
            h2 {
                font-size: 32px;
                font-weight: 400;
                font-family: Roboto Slab;
            }

        }
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 123px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }

`;

export const NewMovie = styled(Link)`
    justify-content: center;
    display: flex;
    padding: 12px;
    
    border-radius: 8px;
    border: none;
    
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    
    gap: 8px;
`;
