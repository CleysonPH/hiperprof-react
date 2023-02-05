import { styled } from "@mui/material/styles";

export const BoxCardItemStyled = styled("li")`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

export const ListStyled = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 500px;
  padding: 0;
  gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`;
