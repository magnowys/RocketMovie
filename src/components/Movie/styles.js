import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 15px;
    }

    > p {
        margin-top: 15px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: start;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }
`;