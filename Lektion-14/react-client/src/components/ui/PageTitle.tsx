type Props = {
  text: string | undefined;
};

function PageTitle({ text }: Props) {
  return <h1>{text}</h1>;
}

export default PageTitle;
