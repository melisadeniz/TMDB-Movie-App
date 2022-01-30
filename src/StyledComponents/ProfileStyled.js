import styled from "styled-components";

export const ProfileGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 30% 70%;
    text-align: center;
    align-items:center;
    @media only screen and (max-width: 960px) {
        grid-template-columns: auto;
    }
`

