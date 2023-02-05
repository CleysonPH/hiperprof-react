import { styled } from "@mui/material/styles";

export const BoxAvatarStyled = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.grey[300]};
`;

export const ImageStyled = styled("img")`
  width: 100%;
`;

export const BoxContentStyled = styled("div")`
  height: 400px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  .text-container .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
