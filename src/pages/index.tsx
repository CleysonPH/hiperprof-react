import PageTitle from "@components/data-display/PageTitle";
import { Button, Icon, TextField } from "@mui/material";
import { BoxButtons, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  return (
    <HomeContainer>
      <PageTitle
        title="Encontre o professor ideal para você!"
        subtitle="Pesquise pelo professor ideal para você."
      />

      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um Professor"}
        InputProps={{
          startAdornment: <Icon>search</Icon>,
        }}
        fullWidth
      />

      <BoxButtons>
        <Button variant="contained" type="submit">
          Buscar o professor perfeito
        </Button>
      </BoxButtons>
    </HomeContainer>
  );
}
