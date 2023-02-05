import { Teacher } from "@data/@types/teacher";
import { Button, Typography } from "@mui/material";
import React from "react";
import { BoxAvatarStyled, BoxContentStyled, ImageStyled } from "./styles";

export interface TeacherCardProps {
  teacher: Teacher;
  onClick: (teacher: Teacher) => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onClick }) => {
  return (
    <>
      <BoxAvatarStyled>
        <BoxAvatarImage src={teacher.foto_perfil} alt="" />
      </BoxAvatarStyled>
      <BoxContentStyled>
        <div className="text-container">
          <Typography variant="h6" className="description" paragraph>
            {teacher.nome}
          </Typography>
          <Typography
            className="description"
            sx={{ display: "flex", alignItems: "center" }}
            variant="body2"
            paragraph
          >
            {teacher.descricao}
          </Typography>
        </div>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => onClick(teacher)}
        >
          Ver detalhes
        </Button>
      </BoxContentStyled>
    </>
  );
};

const BoxAvatarImage = ({ src, alt }: { src?: string; alt: string }) => {
  if (src) {
    return <ImageStyled src={src} alt={alt} />;
  }
  return <ImageStyled src={"/user.svg"} alt={""} sx={{ width: "50%" }} />;
};

export default TeacherCard;
