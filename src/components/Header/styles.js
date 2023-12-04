import styled from "styled-components";

export const Container = styled.header `
    grid-area: header;

    height: 105px;
    width: 100%;

    padding: 24px 123px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    gap: 64px;



    > h1 {
        color: ${({ theme}) => theme.COLORS.PINK};
    }

`;

export const Profile = styled.div `
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        text-align: end;

        strong {
            font-size: 14px;
            color: ${({ theme}) => theme.COLORS.WHITE};
            white-space: nowrap;
            word-wrap: break-word;
        }
    }

    > a {
        img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-left: 9px;
        }
    }
`;

export const Logout = styled.button`
    

    font-size: 14px;
    color: ${({ theme}) => theme.COLORS.GRAY_100};
    background: none;
    border: none;
    text-align: end;
    
`;
