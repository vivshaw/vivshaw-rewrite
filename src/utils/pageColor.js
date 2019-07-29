export const THEME_RED = "red";
export const THEME_BLUE = "blue";
export const THEME_YELLOW = "yellow";

export const colorFromPath = path => {
  const firstPathChunk = path.split("/")[1];

  switch (firstPathChunk) {
    case "blog":
      return THEME_BLUE;
    case "work":
      return THEME_YELLOW;
    default:
      return THEME_RED;
  }
};
