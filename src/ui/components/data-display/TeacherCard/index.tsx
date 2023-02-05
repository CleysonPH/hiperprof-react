import { Button, Typography } from "@mui/material";
import {
  BoxAvatarStyled,
  BoxCardStyled,
  BoxContentStyled,
  ImageStyled,
} from "./styles";

const TeacherCard = () => {
  return (
    <BoxCardStyled>
      <BoxAvatarStyled>
        <ImageStyled src="https://github.com/cleysonph.png" alt="" />
      </BoxAvatarStyled>
      <BoxContentStyled>
        <div className="text-container">
          <Typography variant="h6" className="description" paragraph>
            Nome
          </Typography>
          <Typography
            className="description"
            sx={{ display: "flex", alignItems: "center" }}
            variant="body2"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            assumenda similique ut minima, aperiam labore ab. Sapiente minima,
            animi fugit atque doloribus repellendus quibusdam voluptatibus enim?
            Nulla totam earum eaque? Labore, recusandae tempore earum assumenda
            impedit obcaecati incidunt dolorem ducimus, officiis placeat vel nam
            nulla consequuntur, dicta odio soluta! Exercitationem sunt sint
            dolorem dicta fugiat eaque, voluptas cumque perferendis id?
          </Typography>
        </div>
        <Button variant="outlined" color="inherit" onClick={() => {}}>
          Ver detalhes
        </Button>
      </BoxContentStyled>
    </BoxCardStyled>
  );
};

export default TeacherCard;
