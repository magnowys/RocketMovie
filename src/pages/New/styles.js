import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;

        &::-webkit-scrollbar {
        width: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 0.8rem;
        }
    }

    .tags {
        display: flex;
        border-radius: 8px;
        background: #0D0C0F;
        padding: 16px;
        gap: 24px;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 1113px;
    margin: 36px auto;

    > header {
        display: flex;
        flex-direction: column;
        margin-bottom: 36px;
        
        a {
        display: flex;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.PINK};
        align-items: center;
        gap: 8px;
        }

        h1 {
            font-size: 36px;
            font-weight: 500;
        }
    }

    > div {
        display: flex;
        gap: 40px;

        button:nth-child(1){
            background-color: #0D0C0F;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    textarea {
        margin-top: 32px;
    }

    > Section {
        
        h2 {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            font-size: 20px;
            margin-bottom: 24px;
        }
    }
`;