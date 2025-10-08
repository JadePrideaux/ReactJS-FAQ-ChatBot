type Props = {
  error: string | null;
};

const Error = ({ error }: Props) => {
  return <>{error && <p style={{ color: "red" }}>{error}</p>}</>;
};

export default Error;
