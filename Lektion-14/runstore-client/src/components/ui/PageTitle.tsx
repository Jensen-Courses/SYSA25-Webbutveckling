type Props = {
  text: string;
};

function PageTitle({ text }: Props) {
  return <h1>{text}</h1>;
}

export default PageTitle;
