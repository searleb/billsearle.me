interface ColourSplatProps {
  secondary: string;
}

export const ColourSplat = ({ secondary }: ColourSplatProps) => (
  <div
    className="w-4 h-4 m-1 rounded-lg"
    style={{
      background: secondary,
    }}
  />
);
