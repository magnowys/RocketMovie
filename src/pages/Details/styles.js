import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: auto;
    
    &::-webkit-scrollbar {
    width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main {
        grid-area: content;


        
        padding: 64px 0;
        max-width: 1113px;
        margin: 0 auto;

        a {
            display: flex;
            align-items: center;
            color: ${({ theme}) => theme.COLORS.PINK};
        }
    }
    ;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
    width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }


    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 24px;
            div {
            display: flex;
            gap: 8px;
            align-items: center;

                h1 {
                font-size: 36px;
                font-weight: 500;
                }

                img {
                    width: 16px;
                    height: 16px;
                    border-radius: 35px;
                    border: 1px solid #3E3B47;
                }

                span {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }
                
                svg {
                    color: ${({ theme}) => theme.COLORS.PINK};
                }
         }
    }
        
`;