import { Typography } from "@mui/material";

interface TypographyRaceProps {
  fontSize: string;
  marginBottom: string;
  content: string;
  fontWeight: string;
  lineHeight?: string;
}

export const TypographyRace = ({
  marginBottom,
  fontSize,
  content,
  fontWeight,
  lineHeight,
}: TypographyRaceProps) => {
  return (
    <Typography
      className="dark:text-dark_heading_color text-light_heading_color"
      sx={{
        fontSize: fontSize,
        marginBottom: marginBottom,
        fontWeight: fontWeight,
        lineHeight: lineHeight ? lineHeight : "",
      }}
    >
      {content}
    </Typography>
  );
};
