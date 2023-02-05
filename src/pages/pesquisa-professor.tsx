import PageTitle from "@components/data-display/PageTitle";
import TeacherList from "@components/data-display/TeacherList";
import { Container, Icon, TextField } from "@mui/material";

const PesquisaProfessor = () => {
  return (
    <Container>
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um professor"}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>,
        }}
        fullWidth
        required
      />
      <PageTitle
        title="Professores encontrados"
        subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com o mesmo"
      />
      <TeacherList teachers={[]} onClick={(teacher) => {}} />
    </Container>
  );
};

export default PesquisaProfessor;
