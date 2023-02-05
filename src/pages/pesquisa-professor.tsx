import PageTitle from "@components/data-display/PageTitle";
import TeacherCard from "@components/data-display/TeacherCard";
import { Icon, TextField } from "@mui/material";

const PesquisaProfessor = () => {
  return (
    <>
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
      <TeacherCard />
    </>
  );
};

export default PesquisaProfessor;
