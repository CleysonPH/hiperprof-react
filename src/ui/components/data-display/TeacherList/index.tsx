import { Teacher } from "@data/@types/teacher";
import React from "react";
import TeacherCard from "../TeacherCard";
import { BoxCardItemStyled, ListStyled } from "./styles";

export interface TeacherListProps {
  teachers: Teacher[];
  onClick: (teacher: Teacher) => void;
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers, onClick }) => {
  return (
    <ListStyled>
      {teachers.map((teacher) => (
        <BoxCardItemStyled key={teacher.id}>
          <TeacherCard teacher={teacher} onClick={onClick} />
        </BoxCardItemStyled>
      ))}
    </ListStyled>
  );
};

export default TeacherList;
