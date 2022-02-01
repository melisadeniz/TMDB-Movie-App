import styled from "styled-components";
import Table from "rc-table";

export const ProfileGrid = styled.div`
    align-items:center;
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    
    
    .favseen-list {
        list-style: none;
        align-items: end;
       
    }

    img {
        border-radius: 10px;
    }
    @media only screen and (max-width: 960px) {
        grid-template-columns: auto;
    }
`

export const StyledTable = styled(Table)`
    background-color: ${props => props.theme ==="dark" ? "rgb(48, 71, 94, 0.2)": "rgb(221, 221, 221, 0.5)"};
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.37);
`

export const ProfileInfo = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto;
    align-items: center;
    @media only screen and (max-width: 960px) {
        grid-template-columns: 40% 60%;
    }
    & > div {
        & > .username {
            font-weight: bold;
        }
        & > .join-date {
            color: gray;
            font-size: 13px;
        }
        & > .list {
            margin-top: 20px;
            list-style: none;
            & > li {
                margin-top: 15px;
                & > .movie-counts {
                    font-weight: bold;
                    font-size: 20px;
                    color: ${props => props.theme ==="dark" ? "rgb(34, 40, 49)": "rgb(221, 221, 221)"};;
                    border: 2px ridge rgb(240, 84, 84, 0.8);
                    background-color: ${props => props.theme ==="light" ? "rgb(34, 40, 49)": "rgb(221, 221, 221)"};
                    padding: 3px 10px;
                    border-radius: 50%;
                }
            }
        }
    }
`

